import { useQuery } from "@tanstack/react-query"
import { subDays } from "date-fns"
import { useSearchParams } from "react-router-dom"
import { getOrdersAfterDate } from "../../services/apiOrders"

export function useRecentOrders() {
  const [searchParams] = useSearchParams()

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"))

  const queryDate = subDays(new Date(), numDays).toISOString()

  const { isLoading, data: orders } = useQuery({
    queryFn: () => getOrdersAfterDate(queryDate),
    queryKey: ["orders", `last-${numDays}`],
  })

  const confirmedOrders = orders?.filter(
    (order) => order.status === "checked-in" || order.status === "delivered"
  )

  const unconfirmedOrders = orders?.filter(
    (order) => order.status === "in-progress"
  )

  return { isLoading, orders, confirmedOrders, unconfirmedOrders, numDays }
}
