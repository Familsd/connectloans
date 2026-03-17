import ExcelJS from "exceljs"
import { supabase } from "@/lib/supabase"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET() {
  try {

    /* ---------------- GET TODAY'S DATE ---------------- */
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const start = new Date()
    start.setHours(0, 0, 0, 0)

    const end = new Date()
    end.setHours(23, 59, 59, 999)

    /* ---------------- FETCH DATA ---------------- */
    // const { data, error } = await supabase
    //   .from("loan_application")
    //   .select("*")
    //   .gte("created_at", new Date(new Date().setHours(0, 0, 0, 0)).toISOString())

    const { data, error } = await supabase
      .from("loan_application")
      .select("*")
      .limit(10)

    if (error) {
   //   console.error("Supabase Error:", error)
      return Response.json({ success: false, error })
    }

    //console.log("Daily report triggered")

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

    data?.forEach((row) => {
      sheet.addRow(row)
    })
    if (!data || data.length === 0) {
     // console.log("No leads today. Skipping email.")
      return Response.json({ success: true, message: "No leads today" })
    }
    const buffer = await workbook.xlsx.writeBuffer()

    /* ---------------- SEND EMAIL ---------------- */
    await resend.emails.send({
      from: `Connect Loans <${process.env.EMAIL_FROM}>`,
      to: [process.env.EMAIL_TO as string],   // must be array
      subject: "Daily Loan Leads Report",
      html: `
        <h2>Daily Loan Leads</h2>
        <p>Attached is today's loan enquiry report.</p>
        <p>Total Leads: ${data?.length || 0}</p>
      `,
      attachments: [
        {
          filename: "loan-leads.xlsx",
          content: Buffer.from(buffer)  // important
        }
      ]
    })


    return Response.json({ success: true, count: data?.length || 0 })

  } catch (error) {
   // console.error("Server Error:", error)
    return Response.json({ success: false, error })
  }
}