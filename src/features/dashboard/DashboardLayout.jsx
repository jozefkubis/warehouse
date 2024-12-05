import styled from "styled-components"
import { useRecentOrders } from "./useRecentOrders"
import Spinner from "../../ui/Spinner"
import Stats from "./Stats"
import { useWarehouseStore } from "../warehouseStore/useWarehouseStore"

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
    isLoading: ordersLoading,
  } = useRecentOrders()
  const { isLoading: warehouseStoreLoading, warehouseStoreData } =
    useWarehouseStore()

  if (ordersLoading || warehouseStoreLoading) return <Spinner />

  return (
    <StyledDashboardLayout>
      <Stats
        orders={orders}
        confirmedOrders={confirmedOrders}
        unconfirmedOrders={unconfirmedOrders}
        warehouseStoreData={warehouseStoreData}
      />
      <div>Today's activity</div>
      <div>Chart stay durations</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  )
}
