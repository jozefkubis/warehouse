import OrderTable from "../features/orders/OrderTable"
import Row from "../ui/Row"
import Heading from "../ui/Heading"
import OrderTableOperations from "../features/orders/OrderTableOperations"

function Orders() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All orders</Heading>
        <OrderTableOperations />
      </Row>

      <OrderTable />
    </>
  )
}

export default Orders
