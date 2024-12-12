import { useState } from "react"
import supabase from "../services/supabase"
import Button from "../ui/Button"
import { customers } from "./customersData"
import { storeItems } from "./storeItemsData"
import { orders } from "./ordersData"
import { useDarkMode } from "../context/DarkModeContext"

// Funkcie na mazanie dát
async function deleteOrders() {
  const { error } = await supabase.from("orders").delete().gt("id", 0)
  if (error) console.log("Failed to delete orders:", error.message)
}

async function deleteCustomers() {
  const { error } = await supabase.from("customers").delete().gt("id", 0)
  if (error) console.log("Failed to delete customers:", error.message)
}

async function deleteStoreItems() {
  const { error } = await supabase.from("WarehouseStore").delete().gt("id", 0)
  if (error) console.log("Failed to delete store items:", error.message)
}

// Funkcie na nahrávanie dát
async function uploadCustomers() {
  console.log("Uploading customers...")
  const { error } = await supabase.from("customers").insert(customers)
  if (error) console.log("Customers upload failed:", error.message)
  else console.log("Customers uploaded successfully!")
}

async function uploadStoreItems() {
  console.log("Uploading store items...")
  const { error } = await supabase.from("WarehouseStore").insert(storeItems)
  if (error) console.log("Store items upload failed:", error.message)
  else console.log("Store items uploaded successfully!")
}

async function uploadOrders() {
  console.log("Uploading orders...")

  // Načítaj aktuálne `storeId` a `customerId`
  const { data: stores } = await supabase.from("WarehouseStore").select("id")
  const { data: customers } = await supabase.from("customers").select("id")

  const storeIds = stores.map((store) => store.id)
  const customerIds = customers.map((customer) => customer.id)

  // Upravené objednávky s reálnymi ID
  const finalOrders = orders.map((order) => ({
    ...order,
    storeId: storeIds[order.storeId - 1],
    customerId: customerIds[order.customerId - 1],
  }))

  // Nahranie objednávok
  const { error } = await supabase.from("orders").insert(finalOrders)
  if (error) console.log("Orders upload failed:", error.message)
  else console.log("Orders uploaded successfully!")
}

// Komponent Uploader
function Uploader() {
  const [isLoading, setIsLoading] = useState(false)
  const { isDarkMode } = useDarkMode()

  async function uploadAll() {
    setIsLoading(true)

    try {
      // Mazanie existujúcich dát
      await deleteOrders()
      await deleteCustomers()
      await deleteStoreItems()

      // Nahrávanie nových dát
      await uploadCustomers()
      await uploadStoreItems()
      await uploadOrders()

      console.log("All data uploaded successfully!")
    } catch (error) {
      console.error("Upload failed:", error.message)
    } finally {
      setIsLoading(false)
    }
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
