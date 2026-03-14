import { supabase } from "@/lib/supabase"

export async function POST(req: Request) {
  try {
  const data = await req.json()


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

  const { error } = await supabase
    .from("loan_application")
    .insert([data])

  if (error) {
    return Response.json({ success: false })
  }

  return Response.json({ success: true })
} catch (error) {

    return Response.json({ success: false })

  }
}