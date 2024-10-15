import toast from "react-hot-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { insertStoreItem as insertStoreItemApi } from "../../services/apiWarehouseStore"

export function useInsertStoreItem() {
  const queryClient = useQueryClient()

  const { isLoading: isInserting, mutate: insertStoreItem } = useMutation({
    mutationKey: ["insertStoreItem"],
    mutationFn: insertStoreItemApi,
    onSuccess: () => {
      toast.success("Store item added!")
      queryClient.invalidateQueries({ queryKey: ["Warehouse Store"] })
    },
    onError: (err) => toast.error(err.message),
  })

  return { isInserting, insertStoreItem }
}
