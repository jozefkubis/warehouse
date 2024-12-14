import OrderRow from "./OrderRow"
import Table from "../../ui/Table"
import Menus from "../../ui/Menus"
import Empty from "../../ui/Empty"
import { useOrders } from "./useOrders"
import Spinner from "../../ui/Spinner"
import styled from "styled-components"
import Pagination from "../../ui/Pagination"
import { useSettings } from "../settings/useSettings"

const Div = styled.div`
  margin: 0 auto;
`

function OrderTable() {
  const { orders, isLoading: isOrdersLoading, count } = useOrders()
  const { settings, isLoading: isSettingsLoading, error } = useSettings()

  if (isOrdersLoading || isSettingsLoading) return <Spinner />

  if (error) {
    console.error("Failed to load settings:", error)
    return <div>Error loading settings</div>
  }

  if (!orders.length) return <Empty resourceName="orders" />

  const shippingPrice = settings?.shipping ?? 0

  return (
    <Menus>
      <Table columns="0.7fr 2fr 2fr 2.4fr 0.5fr 1fr 0.6fr 0.6fr">
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
          render={(order) => (
            <OrderRow
              key={order.id}
              order={order}
              shippingPrice={shippingPrice}
            />
          )}
        />

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  )
}

export default OrderTable
