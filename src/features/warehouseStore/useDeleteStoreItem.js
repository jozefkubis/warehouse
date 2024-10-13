import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteWarehouseStoreItem as deleteWarehouseStoreItemApi } from "../../services/apiWarehouseStore"
import toast from "react-hot-toast"

export function useDeleteStoreItem() {
  const queryClient = useQueryClient()

  const { isLoading: isDeleting, mutate: deleteStoreItem } = useMutation({
    // mutationFn(id): deleteWarehouseStoreItemApi(id),
    mutationFn: deleteWarehouseStoreItemApi,
    onSuccess: () => {
      toast.success("Store item deleted!")
      queryClient.invalidateQueries({ queryKey: ["Warehouse Store"] })
    },
    onError: (err) => toast.error(err.message),
  })

  return { isDeleting, deleteStoreItem }
}
