import styled from "styled-components"
import { useRecentOrders } from "./useRecentOrders"
import Spinner from "../../ui/Spinner"
import Stats from "./Stats"
import { useWarehouseStore } from "../warehouseStore/useWarehouseStore"
import { useSettings } from "../settings/useSettings"
import SalesChart from "./SalesChart"

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`
export default function DashboardLayout() {
  const {
    orders,
    confirmedOrders,
    unconfirmedOrders,
    numDays,
    isLoading: ordersLoading,
  } = useRecentOrders()
  const { isLoading: warehouseStoreLoading, warehouseStoreData } =
    useWarehouseStore()

  const { isLoading: settingsLoading, settings } = useSettings()

  if (ordersLoading || warehouseStoreLoading || settingsLoading)
    return <Spinner />

  const { shipping } = settings

  return (
    <StyledDashboardLayout>
      <Stats
        orders={orders}
        confirmedOrders={confirmedOrders}
        unconfirmedOrders={unconfirmedOrders}
        warehouseStoreData={warehouseStoreData}
        shipping={shipping}
      />
      <div>Today's activity</div>
      <div>Chart stay durations</div>
      <SalesChart
        orders={orders}
        confirmedOrders={confirmedOrders}
        unconfirmedOrders={unconfirmedOrders}
        numDays={numDays}
        shipping={shipping}
      />
    </StyledDashboardLayout>
  )
}
