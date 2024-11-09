import OrderRow from "./OrderRow"
import Table from "../../ui/Table"
import Menus from "../../ui/Menus"
import Empty from "../../ui/Empty"
import { useOrders } from "./useOrders"
import Spinner from "../../ui/Spinner"

function OrderTable() {
  const { orders, isLoading } = useOrders()

  if (isLoading) return <Spinner />

  if (!orders.length) return <Empty resourceName="orders" />

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={orders}
          render={(order) => <OrderRow key={order.id} order={order} />}
        />
      </Table>
    </Menus>
  )
}

export default OrderTable
