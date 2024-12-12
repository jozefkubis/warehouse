import toast from "react-hot-toast"
import { updateOrder } from "../../services/apiOrders"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export default function useShipped() {
  const QueryClient = useQueryClient()

  const { mutate: shipped, isLoading: isShipping } = useMutation({
    mutationFn: (orderId) =>
      updateOrder(orderId, {
        status: "shipped",
      }),

    onSuccess: (data) => {
      toast.success(`Order #${data.id} successfully shipped!`)
      QueryClient.invalidateQueries({
        active: true,
      })
    },

    onError: () => toast.error("There was an error while shipping"),
  })

  return { shipped, isShipping }
}
