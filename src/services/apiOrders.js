import supabase from "./supabase"
import { PAGE_SIZE } from "../utils/constans"

export async function getOrders({ filter, sortBy, page }) {
  let query = supabase
    .from("orders")
    .select(
      "id, created_at, NoOfPcs,  status, notes, WarehouseStore(name, code, regularPrice, discount), customers(fullName, email, address)",
      { count: "exact" }
    )

  // MARK: FILTERING
  if (filter) query = query[filter.method || "eq"](filter.field, filter.value)

  // MARK: SORTING
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    })

  // MARK: PAGING
  if (page) {
    const from = (page - 1) * PAGE_SIZE
    const to = from + PAGE_SIZE - 1
    query = query.range(from, to)
  }

  const { data, error, count } = await query

  if (error) {
    console.error(error)
    throw new Error("Orders could not be loaded")
  }

  return { data, count }
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

export async function updateOrder(id, obj) {
  const { data, error } = await supabase
    .from("orders")
    .update(obj)
    .eq("id", id)
    .select()
    .single()

  if (error) {
    console.error(error)
    throw new Error("Order could not be updated")
  }
  return data
}

export async function deleteOrder(id) {
  // REMEMBER RLS POLICIES
  const { data, error } = await supabase.from("orders").delete().eq("id", id)

  if (error) {
    console.error(error)
    throw new Error("Order could not be deleted")
  }
  return data
}
