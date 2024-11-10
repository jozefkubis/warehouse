import { useQuery } from "@tanstack/react-query"
import { getWarehouseStore } from "../../services/apiWarehouseStore"

export function useWarehouseStore() {
  const {
    isLoading,
    data: warehouseStoreData,
    error,
  } = useQuery({
    queryKey: ["WarehouseStore"],
    queryFn: getWarehouseStore,
  })

  return { isLoading, warehouseStoreData, error }
}
