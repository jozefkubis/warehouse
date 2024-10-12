import supabase from "./supabase"

export async function getWarehouseStore() {
  const { data, error } = await supabase.from("Warehouse Store").select("*")

  if (error) {
    console.error(error)
    throw new Error("Store could not be loaded")
  }

  return data
}
