import ExcelJS from "exceljs"
import { supabase } from "@/lib/supabase"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET() {

  try {

    if (!process.env.EMAIL_TO || !process.env.EMAIL_FROM) {
      return Response.json({
        success: false,
        message: "Email env variables missing"
      })
    }

    /* ---------------- FETCH NEW LEADS ---------------- */

    const { data, error } = await supabase
      .from("loan_application")
      .select("*")
      .eq("report_sent", false)
      .order("created_at", { ascending: true })
      .limit(100)

    if (error) {
      return Response.json({ success: false, error })
    }

    if (!data || data.length === 0) {
      return Response.json({
        success: true,
        message: "No new leads"
      })
    }

    /* ---------------- CREATE EXCEL ---------------- */

    const workbook = new ExcelJS.Workbook()
    const sheet = workbook.addWorksheet("Leads")

    sheet.columns = [
      { header: "First Name", key: "first_name", width: 20 },
      { header: "Last Name", key: "last_name", width: 20 },
      { header: "Email", key: "email", width: 30 },
      { header: "Phone", key: "phone", width: 20 },
      { header: "City", key: "city", width: 20 },
      { header: "Loan Type", key: "loan_type", width: 20 },
      { header: "Loan Amount", key: "loan_amount", width: 20 },
      { header: "Employment Type", key: "employment_type", width: 20 },
      { header: "Monthly Income", key: "monthly_income", width: 20 },
      { header: "Property Type", key: "property_type", width: 20 },
      { header: "Message", key: "message", width: 40 },
      { header: "Created At", key: "created_at", width: 30 }
    ]

    data.forEach((row) => sheet.addRow(row))

    const buffer = await workbook.xlsx.writeBuffer()

    /* ---------------- SEND EMAIL ---------------- */
    const clientEmail = process.env.CLIENT_EMAIL
    const emailFrom = process.env.EMAIL_FROM

    if (!clientEmail) {
      throw new Error("CLIENT_EMAIL environment variable is not set")
    }

    if (!emailFrom) {
      throw new Error("EMAIL_FROM environment variable is not set")
    }


    const email = await resend.emails.send({

      from: `Connect Loans <${emailFrom}>`,
      to: [clientEmail],
      subject: `Loan Leads Report (${data.length})`,
      html: `
        <h2>New Loan Leads</h2>
        <p>Total New Leads: <strong>${data.length}</strong></p>
      `,
      attachments: [
        {
          filename: "loan-leads.xlsx",
            content: Buffer.from(buffer).toString("base64")
        }
      ]
    })

    if (!email?.data?.id) {
      return Response.json({
        success: false,
        message: "Email sending failed"
      })
    }

    /* ---------------- MARK LEADS SENT ---------------- */

    const { error: updateError } = await supabase
      .from("loan_application")
      .update({ report_sent: true })
      .in("id", data.map((row) => row.id))

    if (updateError) {
      return Response.json({
        success: false,
        message: "Failed to update report status",
        updateError
      })
    }

    return Response.json({
      success: true,
      sent: data.length
    })

  } catch (error) {

    return Response.json({
      success: false,
      error
    })

  }

}