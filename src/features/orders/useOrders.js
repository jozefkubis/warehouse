import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getOrders } from "../../services/apiOrders"
import { useSearchParams } from "react-router-dom"
import { PAGE_SIZE } from "../../utils/constans"

export function useOrders() {
  const queryClient = useQueryClient()
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

  // MARK: PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"))

  const {
    isLoading,
    data: { data: orders, count } = {},
    error,
  } = useQuery({
    queryKey: ["orders", filter, sortBy, page],
    queryFn: () => getOrders({ filter, sortBy, page }),
  })

  // MARK: PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE)

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["query", filter, sortBy, page + 1],
      queryFn: () => getOrders({ filter, sortBy, page: page + 1 }),
    })

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["orders", filter, sortBy, page - 1],
      queryFn: () => getOrders({ filter, sortBy, page: page - 1 }),
    })

  return { isLoading, orders, error, count, page }
}
