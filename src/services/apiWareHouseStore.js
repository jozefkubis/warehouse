import supabase, { supabaseUrl } from "./supabase"

export async function getWarehouseStore() {
  const { data, error } = await supabase.from("Warehouse Store").select("*")

  if (error) {
    console.error(error)
    throw new Error("Store could not be loaded")
  }

  return data
}

export async function insertStoreItem(newItem) {
  // Check if image exists
  const hasImagePath = newItem.image?.startsWith?.(supabaseUrl)

  // Generate image name
  const imageName = `${Math.random()}-${newItem.image.name}`.replaceAll("/", "")

  // Set image path
  const imagePath = hasImagePath
    ? newItem.image
    : `${supabaseUrl}/storage/v1/object/public/order-images/${imageName}`

  // Insert item
  const { data, error } = await supabase
    .from("Warehouse Store")
    .insert([{ ...newItem, image: imagePath }])
    .select()

  if (error) {
    console.error(error)
    throw new Error("Item could not be loaded")
  }

  // Upload image
  const { error: storageError } = await supabase.storage
    .from("order-images")
    .upload(imageName, newItem.image)

  // Delete item if image upload failed
  if (storageError) {
    console.error(storageError)
    await supabase.from("Warehouse Store").delete().eq("id", data.id)
    console.error(storageError)
    throw new Error(
      "Item image could not be uploaded and the item was not inserted"
    )
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
