import { useQuery } from "@tanstack/react-query"
import { getOrders } from "../../services/apiOrders"
import { useSearchParams } from "react-router-dom"

export function useOrders() {
  const [searchParams] = useSearchParams()

  // MARK: FILTERING
  const filterValue = searchParams.get("status")
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue }

  // MARK: SORTING
  const sortByRaw = searchParams.get("sortBy") || "created_at-desc"
  const [field, direction] = sortByRaw.split("-")
  const sortBy = { field, direction }

  const {
    isLoading,
    data: orders,
    error,
  } = useQuery({
    queryKey: ["orders", filter, sortBy],
    queryFn: () => getOrders({ filter, sortBy }),
  })

  return { isLoading, orders, error }
}
