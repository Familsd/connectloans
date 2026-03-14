import ExcelJS from "exceljs"
import { supabase } from "@/lib/supabase"

export async function GET() {

  const { data } = await supabase
    .from("loan_applications")
    .select("*")
console.log("Daily report triggered")
  const workbook = new ExcelJS.Workbook()
  const sheet = workbook.addWorksheet("Leads")

  sheet.columns = [
    { header: "Name", key: "name" },
    { header: "Phone", key: "phone" },
    { header: "Email", key: "email" },
    { header: "Loan Type", key: "loan_type" },
    { header: "Amount", key: "loan_amount" },
  ]

  data?.forEach(row => sheet.addRow(row))

  const buffer = await workbook.xlsx.writeBuffer()

  return new Response(buffer)
}