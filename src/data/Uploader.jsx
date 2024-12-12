import supabase from "../services/supabase"
import { customers } from "./customersData"
import { storeItems } from "./storeItemsData"
import { orders } from "./ordersData"
import { useState } from "react"
import Button from "../ui/Button"
import { useDarkMode } from "../context/DarkModeContext"
import toast from "react-hot-toast"

async function uploadCustomers() {
  const { data: existingCustomers, error: fetchError } = await supabase
    .from("customers")
    .select("id, email")

  if (fetchError) throw new Error(fetchError.message)

  const newCustomers = customers.filter(
    (customer) =>
      !existingCustomers.some((existing) => existing.email === customer.email)
  )

  if (newCustomers.length === 0) {
    console.log("No new customers to upload.")
    return
  }

  const { data, error } = await supabase.from("customers").insert(newCustomers)

  if (error) {
    console.error("Customers data upload failed:", error)
    toast.error("Customers data upload failed:", error)
  } else {
    console.log("Customers data uploaded successfully:", data)
    console.log(`Number of new customers uploaded: ${newCustomers.length}`)
    toast.success(`Successfully uploaded ${newCustomers.length} new customers!`)
  }
}

async function uploadStoreItems() {
  const { data: existingStoreItems, error: fetchError } = await supabase
    .from("WarehouseStore")
    .select("id, code")

  if (fetchError) throw new Error(fetchError.message)

  const newStoreItems = storeItems.filter(
    (storeItem) =>
      !existingStoreItems.some(
        (existing) =>
          existing.id === storeItem.id || existing.code === storeItem.code
      )
  )

  if (newStoreItems.length === 0) {
    console.log("No new store items to upload.")
    return
  }

  const { data, error } = await supabase
    .from("WarehouseStore")
    .insert(newStoreItems)

  if (error) {
    console.error("StoreItems data upload failed:", error)
    toast.error("StoreItems data upload failed:", error)
  } else {
    console.log("StoreItems data uploaded successfully:", data)
    console.log(`Number of new store items uploaded: ${newStoreItems.length}`)
    toast.success(
      `Successfully uploaded ${newStoreItems.length} new store items!`
    )
  }
}

async function uploadOrders() {
  const { data: existingOrders, error: fetchError } = await supabase
    .from("orders")
    .select("id ")

  if (fetchError) throw new Error(fetchError.message)

  const newOrders = orders.filter(
    (order) => !existingOrders.some((existing) => existing.id === order.id)
  )

  if (newOrders.length === 0) {
    console.log("No new orders to upload.")
    return
  }

  const { data, error } = await supabase.from("orders").insert(newOrders)

  if (error) {
    console.error("Orders data upload failed:", error)
    toast.error("Orders data upload failed:", error)
  } else {
    console.log("Orders data uploaded successfully:", data)
    console.log(`Number of new orders uploaded: ${newOrders.length}`)
    toast.success(`Successfully uploaded ${newOrders.length} new orders!`)
  }
}

function Uploader() {
  const [isLoading, setIsLoading] = useState(false)
  const { isDarkMode } = useDarkMode()

  async function uploadAll() {
    setIsLoading(true)

    await uploadCustomers()
    await uploadStoreItems()
    await uploadOrders()
    setIsLoading(false)

    setIsLoading(false)
  }

  return (
    <div
      style={{
        marginTop: "auto",
        backgroundColor: "#e0e7ff",
        padding: "8px",
        borderRadius: "5px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <h3 style={{ color: isDarkMode && "black" }}>SAMPLE DATA</h3>

      <Button onClick={uploadAll} disabled={isLoading}>
        {isLoading ? "Uploading..." : "Upload ALL"}
      </Button>
    </div>
  )
}

export default Uploader
