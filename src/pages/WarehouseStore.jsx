import { useEffect } from "react"
import getWarehouseStore from "../services/apiWareHouseStore"
import Row from "../ui/Row"
import Heading from "../ui/Heading"

function WarehouseStore() {
  useEffect(() => {
    getWarehouseStore().then((data) => console.log(data))
  }, [])

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Warehouse Store</Heading>
        <img src="https://djfaztojwfbjslvxbdep.supabase.co/storage/v1/object/public/order-images/OIP.jpeg" />
        <p>Filer / Sort</p>
      </Row>
    </>
  )
}

export default WarehouseStore
