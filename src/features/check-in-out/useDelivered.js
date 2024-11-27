import toast from "react-hot-toast"
import { updateOrder } from "../../services/apiOrders"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export default function useDelivered() {
  const QueryClient = useQueryClient()

  const { mutate: delivered, isLoading: isDelivering } = useMutation({
    mutationFn: (orderId) =>
      updateOrder(orderId, {
        status: "delivered",
      }),

    onSuccess: (data) => {
      toast.success(`Order #${data.id} successfully delivered!`)
      QueryClient.invalidateQueries({
        active: true,
      })
    },

    onError: () => toast.error("There was an error while delivering"),
  })

  return { delivered, isDelivering }
}
