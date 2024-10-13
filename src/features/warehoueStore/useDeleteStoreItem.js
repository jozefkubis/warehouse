import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteWarehouseStoreItem as deleteWarehouseStoreItemApi } from "../../services/apiWarehouseStore"

export function useDeleteStoreItem() {
  const queryClient = useQueryClient()

  const { isLoading: isDeleting, mutate: deleteStoreItem } = useMutation({
    // mutationFn(id): deleteWarehouseStoreItemApi(id),
    mutationFn: deleteWarehouseStoreItemApi,
    onSuccess: () => {
      alert("Store item deleted!")
      queryClient.invalidateQueries({ queryKey: ["Warehouse Store"] })
    },
    onError: (err) => alert(err.message),
  })

  return { isDeleting, deleteStoreItem }
}
