// app/api/send-otp/route.ts

import { supabase } from "@/lib/supabase"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(req: Request) {
  try {
    const { email, phone } = await req.json()

    if (!email || !phone) {
      return Response.json({ error: "Email and phone required" }, { status: 400 })
    }

    // get latest OTP
    const { data: existing } = await supabase
      .from("otp_verifications")
      .select("*")
      .eq("email", email)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle()

    // 🔴 cooldown check
    if (existing) {
      const last = new Date(existing.created_at).getTime()
      const now = Date.now()

      if (now - last < 30000) {
        return Response.json(
          { error: "Please wait 30 seconds before retrying" },
          { status: 429 }
        )
      }
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString()

    const expires_at = new Date(Date.now() + 5 * 60 * 1000)

    // delete old OTPs (important)
    await supabase.from("otp_verifications").delete().eq("email", email)

    // insert new OTP
    await supabase.from("otp_verifications").insert({
      email,
      phone,
      otp,
      expires_at,
      attempts: 0
    })

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Your OTP Code",
      html: `<h2>${otp}</h2><p>Valid for 5 minutes</p>`
    })

    return Response.json({ success: true })

  } catch (err) {
    console.error("SEND OTP ERROR:", err)
    return Response.json({ error: "Failed to send OTP" }, { status: 500 })
  }
}