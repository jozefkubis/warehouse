import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteWarehouseStoreItem as deleteWarehouseStoreItemApi } from "../../services/apiWareHouseStore"
import toast from "react-hot-toast"

export function useDeleteStoreItem() {
  const queryClient = useQueryClient()

  const { isLoading: isDeleting, mutate: deleteStoreItem } = useMutation({
    // mutationFn(id): deleteWarehouseStoreItemApi(id),
    mutationFn: deleteWarehouseStoreItemApi,
    onSuccess: () => {
      toast.success("Store item deleted!")
      queryClient.invalidateQueries({ queryKey: ["WarehouseStore"] })
    },
    onError: (err) => toast.error(err.message),
  })

  return { isDeleting, deleteStoreItem }
}
