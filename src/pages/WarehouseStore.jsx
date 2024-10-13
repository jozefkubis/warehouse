import Heading from "../ui/Heading"
import Row from "../ui/Row"
import WarehouseStoreTable from "../features/warehoueStore/WarehouseStoreTable"

function WarehouseStore() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Store</Heading>
      </Row>

      <Row>
        <WarehouseStoreTable />
      </Row>
    </>
  )
}

export default WarehouseStore
