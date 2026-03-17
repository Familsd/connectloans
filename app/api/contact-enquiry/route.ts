import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {

  try {
    const data = await req.json()

    const clientEmail = process.env.CLIENT_EMAIL;
    const emailFrom = process.env.EMAIL_FROM;
    if (!clientEmail) {
      throw new Error("CLIENT_EMAIL environment variable is not set");
    }
    if (!emailFrom) {
      throw new Error("EMAIL_FROM environment variable is not set");
    }
    console.log(clientEmail, emailFrom, "emails");
    await resend.emails.send({
      from: emailFrom,
      to: clientEmail,
      replyTo: data.email,
      subject: "New Enquiry",
      html: `
      <h2>New enquiry received</h2>
      <p>Name: ${data.fullName}</p>
      <p>Email: ${data.email}</p>
      <p>Loan Type: ${data.subject}</p>
      <p>Message: ${data.message}</p>
    `,
    })
    console.log(Response.json, Response, "resp");
    return Response.json({ success: true })
  } catch (error) {

    return Response.json({ success: false })

  }
}