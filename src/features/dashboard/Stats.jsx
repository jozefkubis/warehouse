import {
  HiOutlineBanknotes,
  // HiOutlineChartBar,
  HiOutlineShoppingCart,
} from "react-icons/hi2"
import { GiConfirmed } from "react-icons/gi"
import { GrInProgress } from "react-icons/gr"
import Stat from "./Stat"
import { formatCurrency } from "../../utils/helpers"

export default function Stats({
  orders,
  confirmedOrders,
  unconfirmedOrders,
  warehouseStoreData,
}) {
  const discounts = warehouseStoreData.reduce(
    (acc, cur) => acc + cur.discount,
    0
  )

  const numOrders = orders?.length

  const sales = confirmedOrders.reduce(
    (acc, cur) =>
      acc + cur.WarehouseStore.regularPrice * cur.NoOfPcs - discounts,
    0
  )

  console.log(sales)

  const confirmed = confirmedOrders.length

  const inProgress = unconfirmedOrders.length

  // num checked nights / all available nights (numDays * cabinCount)
  // const occupancyRate =
  //   confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
  //   (numDays * cabinCount)

  // const confirmedOredersPercentage = (confirmed / numOrders) * 100

  return (
    <>
      <Stat
        title="Orders"
        color="blue"
        icon={<HiOutlineShoppingCart />}
        value={numOrders}
      />

      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />

      <Stat
        title="Confirmed Orders "
        color="indigo"
        icon={<GiConfirmed />}
        value={confirmed}
      />

      <Stat
        title="In Progress"
        color="yellow"
        icon={<GrInProgress />}
        value={inProgress}
      />

      {/* <Stat
        title="Confirmed Percentage"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={confirmed > 0 ? confirmedOredersPercentage + "%" : "0%"}
      /> */}
    </>
  )
}
