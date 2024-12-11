import supabase from "../services/supabase"
import { customers } from "./customersData"
import { storeItems } from "./storeItemsData"
import { orders } from "./ordersData"
import { useState } from "react"
import Button from "../ui/Button"
import { useDarkMode } from "../context/DarkModeContext"

async function uploadCustomers() {
  const { data, error } = await supabase.from("customers").insert(customers)

  if (error) {
    console.error("Customers data upload failed:", error)
  } else {
    console.log("Customers data uploaded successfully:", data)
  }
}

async function uploadStoreItems() {
  const { data, error } = await supabase
    .from("WarehouseStore")
    .insert(storeItems)

  if (error) {
    console.error("StoreItems data upload failed:", error)
  } else {
    console.log("StoreItems data uploaded successfully:", data)
  }
}

async function uploadOrders() {
  const { data, error } = await supabase.from("orders").insert(orders)

  if (error) {
    console.error("Orders data upload failed:", error)
  } else {
    console.log("Orders data uploaded successfully:", data)
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
