import supabase from "./supabase"

export async function getWarehouseStore() {
  const { data, error } = await supabase.from("Warehouse Store").select("*")

  if (error) {
    console.error(error)
    throw new Error("Store could not be loaded")
  }

  return data
}

export async function insertStoreItem(newItem) {
  const { data, error } = await supabase
    .from("Warehouse Store")
    .insert([newItem])
    .select()

  if (error) {
    console.error(error)
    throw new Error("Item could not be loaded")
  }

  return data
}

export async function deleteWarehouseStoreItem(id) {
  const { data, error } = await supabase
    .from("Warehouse Store")
    .delete()
    .eq("id", id)

  if (error) {
    console.error(error)
    throw new Error("Store could not be deleted")
  }

  return data
}
