import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {

  try {
    const data = await req.json()

    const clientEmail = process.env.CLIENT_EMAIL;
    if (!clientEmail) {
      throw new Error("CLIENT_EMAIL environment variable is not set");
    }

    await resend.emails.send({
      from: "ConnectLoans <noreply@connectloans.in>",
      to: clientEmail,
      subject: "New Enquiry",
      html: `
      <h2>New enquiry received</h2>
      <p>Name: ${data.fullName}</p>
      <p>Email: ${data.email}</p>
      <p>Subject: ${data.subject}</p>
      <p>Message: ${data.message}</p>
    `,
    })

    return Response.json({ success: true })
  } catch (error) {

    return Response.json({ success: false })

  }
}