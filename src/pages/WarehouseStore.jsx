import Heading from "../ui/Heading"
import Row from "../ui/Row"
import WarehouseStoreTable from "../features/warehouseStore/WarehouseStoreTable"
import { useState } from "react"
import Button from "../ui/Button"
import CreateStoreForm from "../features/warehouseStore/CreateStoreForm"

function WarehouseStore() {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Store</Heading>
      </Row>

      <Row>
        <WarehouseStoreTable />

        <Button onClick={() => setShowForm((show) => !show)}>
          Add new Item to Store
        </Button>
        {showForm && <CreateStoreForm />}
      </Row>
    </>
  )
}

export default WarehouseStore
