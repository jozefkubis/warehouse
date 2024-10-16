import toast from "react-hot-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { insertEditStoreItem as insertEditStoreItemApi } from "../../services/apiWarehouseStore"

export function useUpdateStoreItem() {
  const queryClient = useQueryClient()

  const { isLoading: isUpdating, mutate: updateStoreItem } = useMutation({
    mutationKey: ["updateStoreItem"],
    mutationFn: ({ newItemData, id }) =>
      insertEditStoreItemApi(newItemData, id),
    onSuccess: () => {
      toast.success("Store item updated!")
      queryClient.invalidateQueries({ queryKey: ["Warehouse Store"] })
    },
    onError: (err) => toast.error(err.message),
  })

  return { isUpdating, updateStoreItem }
}
