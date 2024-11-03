import Heading from "../ui/Heading"
import Row from "../ui/Row"
import WarehouseStoreTable from "../features/warehouseStore/WarehouseStoreTable"
// import CreateStoreForm from "../features/warehouseStore/CreateStoreForm"
import AddItem from "../features/warehouseStore/AddItem"

function WarehouseStore() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Store</Heading>
      </Row>

      <Row>
        <WarehouseStoreTable />
        <AddItem />
      </Row>
    </>
  )
}

export default WarehouseStore
