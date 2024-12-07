import { useQuery } from "@tanstack/react-query"
import { getFilteredOrders } from "../../services/apiOrders"

export function useGetFilteredOrders() {
  const {
    isLoading: isDataLoading,
    data: allData,
    error,
  } = useQuery({
    queryFn: getFilteredOrders,
    queryKey: ["orders"],
  })

  return { isDataLoading, allData, error }
}
