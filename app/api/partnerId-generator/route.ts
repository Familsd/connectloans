// app/api/submit-loan/route.ts
import { supabase } from "@/lib/supabase"
import { generatePartnerId } from "@/lib/partnerId"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { email, phone, type, details } = body

    const name =
      type === "individual"
        ? details.name
        : details.companyName

    // generate partner ID
    const partner_id = await generatePartnerId(name)

    // insert clean structured data
    await supabase.from("partner_applications").insert({
      partner_id,
      email,
      phone,
      type,

      name: type === "individual" ? details.name : null,
      pan: details.pan || null,
      company_name: details.companyName || null,
      firm_type: details.firmType || null,
      address: details.address || null,
      pincode: details.pincode || null,

      extra_details: details
    })
    const clientEmail = process.env.CLIENT_EMAIL
    const emailFrom = process.env.EMAIL_FROM

    if (!clientEmail) {
      throw new Error("CLIENT_EMAIL environment variable is not set")
    }

    if (!emailFrom) {
      throw new Error("EMAIL_FROM environment variable is not set")
    }
    await resend.emails.send({
      from: emailFrom,
      to: email,
      subject: "Application Submitted",
      html: `<p>Your Partner ID: <b>${partner_id}</b></p>`
    })

    return Response.json({ success: true, partner_id })
  } catch (err) {
    console.error("SUBMIT ERROR:", err)
    return Response.json({ success: false }, { status: 500 })
  }
}