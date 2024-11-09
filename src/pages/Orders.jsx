import OrderTable from "../features/orders/OrderTable"
import Row from "../ui/Row"
import Heading from "../ui/Heading"

function Orders() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All orders</Heading>
        <p>TEST</p>
      </Row>

      <OrderTable />
    </>
  )
}

export default Orders
