// lib/partnerId.ts
import { supabase } from "./supabase"

export const generatePartnerId = async (name: string) => {
  const prefix = "CNCT"
  const firstLetter = name?.charAt(0)?.toUpperCase() || "X"

  // get next sequence (atomic)
  const { data, error } = await supabase.rpc("nextval", {
    sequence: "partner_seq"
  })

  if (error) throw error

  const padded = String(data).padStart(3, "0")

  return `${prefix}${padded}${firstLetter}`
}