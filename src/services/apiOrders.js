import supabase from "./supabase"

export async function getOrders() {
  const { data, error } = await supabase.from("orders").select(
    `
      id, 
      created_at, 
      NoOfPcs, 
      orderPrice, 
      extrasPrice, 
      status, 
      notes, 
      totalPrice, 
      WarehouseStore (name, code), 
      customers (fullName, email, address)
      `
  )

  if (error) {
    console.error(error)
    throw new Error("Orders could not be loaded")
  }

  return data
}

export async function getOrder(id) {
  const { data, error } = await supabase
    .from("orders")
    .select("*, WarehouseStore(*), customers(*)")
    .eq("id", id)
    .single()

  if (error) {
    console.error(error)
    throw new Error("Order not found")
  }

  return data
}
