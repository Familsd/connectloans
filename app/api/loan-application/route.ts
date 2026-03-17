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
        body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${captchaToken}`
      }
    )
    const captchaData = await captchaRes.json()

    if (!captchaData.success) {
      console.log("Captcha Response:", captchaData)
      return Response.json({ success: false, message: "Captcha failed" })
    }
    /* ---------------- DATABASE INSERT ---------------- */
    const { error } = await supabase
      .from("loan_application")
      .insert([{
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        loan_type: formData.loanType,
        loan_amount: formData.loanAmount,
        employment_type: formData.employmentType,
        monthly_income: formData.monthlyIncome,
        property_type: formData.propertyType,
        message: formData.message
      }])
    console.log("Insert Data:", formData)
    console.log("Supabase Error:", error)
    if (error) {
      console.error(error, "r-err")
     return Response.json({ success: false }, { status: 400 })
    }
    console.log("im comming1");
    /* ---------------- EMAIL NOTIFICATION ---------------- */
    const emailRes = await resend.emails.send({
      from: `Connect Loans <${process.env.EMAIL_FROM}>`,
      to: [process.env.EMAIL_TO!],
      replyTo: formData.email ? [formData.email] : undefined,
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
    console.log("im comming");
    console.log("Email Response:", emailRes)
    return Response.json({ success: true })
    

  } catch (error) {
    console.log(error);
    return Response.json({ success: false, message: "Server error" })

  }
}