// app/api/submit-loan/route.ts

import { supabase } from "@/lib/supabase"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY!)

async function generatePartnerId(name: string) {
    const prefix = "CNCT"
    const firstLetter = name?.charAt(0)?.toUpperCase() || "X"

    const { data } = await supabase.rpc("get_next_partner_seq")

    if (!data) throw new Error("Failed to generate partner sequence")

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
        if (!email || !phone || !type) {
            return Response.json({ error: "Missing fields" }, { status: 400 })
        }

        // Type-specific validation (PUT HERE)
        if (type === "individual" && !details?.name) {
            return Response.json({ error: "Name required" }, { status: 400 })
        }

        if (type === "firm" && !details?.companyName) {
            return Response.json({ error: "Company name required" }, { status: 400 })
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
        await supabase
            .from("otp_verifications")
            .delete()
            .eq("email", email)
        const name =
            type === "individual"
                ? details.name
                : details.companyName

        const partner_id = await generatePartnerId(name)
        console.log(partner_id, "idgen", email);
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
        try {
            await resend.emails.send({
                from: emailFrom,
                to: email,
                subject: "Application Received",
                html: `
    <h2>Thank you for applying!</h2>
    <p>Your partner application has been received successfully.</p>
    <p>Our team will review your details and contact you shortly.</p>
  `
            })

            await resend.emails.send({
                from: emailFrom,
                to: "praveen@connectloans.in", // admin email
                subject: "New Partner Application",
                html: `
    <h3>New Application Received</h3>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Type:</b> ${type}</p>
    <p><b>Details:</b> ${JSON.stringify(details)}</p>
    <p><b>Partner ID (internal):</b> ${partner_id}</p>
  `
            })
        } catch (emailErr) {
            console.error("Email sending error:", emailErr)
        }
        // return Response.json({ success: true, partner_id })
        return Response.json({ success: true })

    } catch (err) {
        console.error("SUBMIT ERROR:", err)
        return Response.json({ error: "Submission failed" }, { status: 500 })
    }
}