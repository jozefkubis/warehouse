import supabase from "./supabase"

export default async function getWarehouseStore() {
  const { data, error } = await supabase.from("Warehouse Store").select("*")

  if (error) {
    console.error(error)
    throw new Error("Cabins could not be loaded")
  }

  return data
}
