// app/api/verify-otp/route.ts

import { supabase } from "@/lib/supabase"

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json()

    if (!email || !otp) {
      return Response.json({ valid: false, message: "Missing data" })
    }

    const { data } = await supabase
      .from("otp_verifications")
      .select("*")
      .eq("email", email)
      .maybeSingle()

    if (!data) {
      return Response.json({ valid: false, message: "No OTP found" })
    }

    //  attempts check
    if (data.attempts >= 3) {
      return Response.json({
        valid: false,
        message: "Maximum attempts reached"
      })
    }

    //  expiry check
    if (new Date(data.expires_at) < new Date()) {
      return Response.json({
        valid: false,
        message: "OTP expired"
      })
    }

    //  wrong OTP
    if (data.otp !== otp) {
      await supabase
        .from("otp_verifications")
        .update({ attempts: data.attempts + 1 })
        .eq("id", data.id)

      return Response.json({
        valid: false,
        message: `Incorrect OTP (${data.attempts + 1}/3)`
      })
    }
    console.log("otpvrify");
    //  success
    await supabase
      .from("otp_verifications")
      .update({ verified: true })
      .eq("id", data.id)
    console.log("otpvsuccess");
    return Response.json({ valid: true })

  } catch (err) {
    console.error("VERIFY ERROR:", err)
    return Response.json({ valid: false, message: "Verification failed" })
  }
}