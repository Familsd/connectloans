import { supabase } from "@/lib/supabase"
import { Resend } from "resend"


const resend = new Resend(process.env.RESEND_API_KEY)
export async function POST(req: Request) {
  try {
    const data = await req.json()

    const { captchaToken, ...formData } = data

    /* ---------------- CAPTCHA VERIFY ---------------- */
    const captchaRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${data.captchaToken}`
      }
    )
    const captchaData = await captchaRes.json()

    if (!captchaData.success) {
      return Response.json({ success: false, message: "Captcha failed" })
    }
    /* ---------------- DATABASE INSERT ---------------- */
    const { error } = await supabase
      .from("loan_application")
      .insert([formData])

    if (error) {
      console.error(error)
      return Response.json({ success: false })
    }

    /* ---------------- EMAIL NOTIFICATION ---------------- */

    await resend.emails.send({
      from: `Connect Loans <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO!,
      replyTo: formData.email,
      subject: "New Loan Application",
      html: `
        <h2>New Loan Application</h2>

        <p><b>Name:</b> ${formData.firstName} ${formData.lastName}</p>
        <p><b>Email:</b> ${formData.email}</p>
        <p><b>Phone:</b> ${formData.phone}</p>
        <p><b>City:</b> ${formData.city}</p>
        <p><b>Loan Type:</b> ${formData.loanType}</p>
        <p><b>Amount:</b> ${formData.loanAmount}</p>
        <p><b>Employment:</b> ${formData.employmentType}</p>
        <p><b>Income:</b> ${formData.monthlyIncome}</p>
        <p><b>Property:</b> ${formData.propertyType}</p>
        <p><b>Message:</b> ${formData.message}</p>
        `
    })

    return Response.json({ success: true })

  } catch (error) {
    console.log(error);
    return Response.json({ success: false, message: "Server error" })

  }
}