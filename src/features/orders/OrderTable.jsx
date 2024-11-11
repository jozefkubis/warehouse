import OrderRow from "./OrderRow"
import Table from "../../ui/Table"
import Menus from "../../ui/Menus"
import Empty from "../../ui/Empty"
import { useOrders } from "./useOrders"
import Spinner from "../../ui/Spinner"
import styled from "styled-components"
import Pagination from "../../ui/Pagination"

const Div = styled.div`
  margin: 0 auto;
`

function OrderTable() {
  const { orders, isLoading, count } = useOrders()

  if (isLoading) return <Spinner />

  if (!orders.length) return <Empty resourceName="orders" />

  return (
    <Menus>
      <Table columns="0.7fr 1.6fr 1.5fr 2fr 0.8fr 1fr 0.6fr">
        <Table.Header>
          <Div>Code</Div>
          <Div>Product and Date</Div>
          <Div>Customer</Div>
          <Div>Address</Div>
          <Div>Quantity</Div>
          <Div>Status</Div>
          <Div>Amount</Div>
          <Div></Div>
        </Table.Header>

        <Table.Body
          data={orders}
          render={(order) => <OrderRow key={order.id} order={order} />}
        />

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  )
}

export default OrderTable
