import supabase, { supabaseUrl } from "./supabase"

// MARK: GET ALL STORE ITEMS.................................................

export async function getWarehouseStore() {
  const { data, error } = await supabase.from("Warehouse Store").select("*")

  if (error) {
    console.error(error)
    throw new Error("Store could not be loaded")
  }

  return data
}

// MARK: INSERT NEW ITEM WITH IMAGE..........................................

export async function insertEditStoreItem(newItem, id) {
  let imagePath = newItem.image

  // Nahrávaj obrázok iba v prípade, že ide o nový súbor
  if (newItem.image instanceof File) {
    const imageName = `${Math.random()}-${newItem.image.name}`.replaceAll(
      "/",
      ""
    )

    imagePath = `${supabaseUrl}/storage/v1/object/public/order-images/${imageName}`

    const { error: storageError } = await supabase.storage
      .from("order-images")
      .upload(imageName, newItem.image)

    if (storageError) {
      console.error(storageError)
      throw new Error("Image could not be uploaded!")
    }
  }

  // Vlož alebo aktualizuj položku až po úspešnom nahraní obrázka alebo ak nie je nový obrázok
  let query = supabase.from("Warehouse Store")

  // A) vlož
  if (!id) {
    query = query.insert([{ ...newItem, image: imagePath }])
  }

  // B) uprav
  if (id) {
    query = query.update({ ...newItem, image: imagePath }).eq("id", id)
  }

  const { data, error } = await query.select().single()

  if (error) {
    console.error(error)
    throw new Error("Item could not be saved")
  }

  return data
}

// MARK:DELETE STORE ITEM.............................................

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
