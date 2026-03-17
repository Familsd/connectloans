import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const clientEmail = process.env.CLIENT_EMAIL
    const emailFrom = process.env.EMAIL_FROM

    if (!clientEmail) {
      throw new Error("CLIENT_EMAIL environment variable is not set")
    }

    if (!emailFrom) {
      throw new Error("EMAIL_FROM environment variable is not set")
    }

    if (!data.email || !data.fullName) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      )
    }

    const { data: emailData, error } = await resend.emails.send({
      from: `Connect Loans <${emailFrom}>`,
      to: [clientEmail],
      replyTo: data.email ? [data.email] : undefined,
      subject: "New Enquiry",
      html: `
        <h2>New enquiry received</h2>
        <p><b>Name:</b> ${data.fullName}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Loan Type:</b> ${data.subject}</p>
        <p><b>Message:</b> ${data.message}</p>
      `
    })

    if (error) {
      // console.error("Resend error:", error)
      return Response.json({ success: false, error })
    }

    // console.log("Email sent:", emailData)

    return Response.json({ success: true })

  } catch (error) {
    // console.error("Contact form error:", error)

    return Response.json(
      { success: false, message: "Email failed", error },
      { status: 500 }
    )
  }
}