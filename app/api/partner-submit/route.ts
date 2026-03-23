// app/api/submit-loan/route.ts

import { supabase } from "@/lib/supabase"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY!)

async function generatePartnerId(name: string) {
    const prefix = "CNCT"
    const firstLetter = name?.charAt(0)?.toUpperCase() || "X"

    const { data } = await supabase.rpc("get_next_partner_seq")

    const padded = String(data).padStart(3, "0")

    return `${prefix}${padded}${firstLetter}`
}

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { email, phone, type, details } = body

        if (!email || !phone || !type) {
            return Response.json({ error: "Missing fields" }, { status: 400 })
        }

        //  verify OTP
        const { data: otpData } = await supabase
            .from("otp_verifications")
            .select("*")
            .eq("email", email)
            .eq("verified", true)
            .maybeSingle()

        if (!otpData) {
            return Response.json({ error: "OTP not verified" }, { status: 403 })
        }

        const name =
            type === "individual"
                ? details.name
                : details.companyName

        const partner_id = await generatePartnerId(name)

        await supabase.from("loan_applications").insert({
            partner_id,
            email,
            phone,
            type,

            name: details.name || null,
            pan: details.pan || null,
            company_name: details.companyName || null,
            firm_type: details.firmType || null,
            address: details.address || null,
            pincode: details.pincode || null,

            extra_details: details
        })
        const emailFrom = process.env.EMAIL_FROM
        if (!emailFrom) {
            throw new Error("EMAIL_FROM environment variable is not set")
        }
        await resend.emails.send({
            from: emailFrom,
            to: email,
            subject: "Application Submitted",
            html: `<h2>Your Partner ID: ${partner_id}</h2>`
        })

        return Response.json({ success: true, partner_id })

    } catch (err) {
        console.error("SUBMIT ERROR:", err)
        return Response.json({ error: "Submission failed" }, { status: 500 })
    }
}