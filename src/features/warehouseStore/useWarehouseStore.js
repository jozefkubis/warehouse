import { useQuery } from "@tanstack/react-query"
import { getWarehouseStore } from "../../services/apiWareHouseStore"

export function useWarehouseStore() {
  const {
    isLoading,
    data: warehouseStoreData,
    error,
  } = useQuery({
    queryFn: getWarehouseStore,
    queryKey: ["Warehouse Store"],
  })

  return { isLoading, warehouseStoreData, error }
}
