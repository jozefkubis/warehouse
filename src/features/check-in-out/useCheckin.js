import toast from "react-hot-toast"
import { updateOrder } from "../../services/apiOrders"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

export default function useCheckin() {
  const QueryClient = useQueryClient()
  const navigate = useNavigate()

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ orderId, shipping }) =>
      updateOrder(orderId, {
        status: "checked-in",
        isPaid: true,
        ...shipping,
      }),

    onSuccess: (data) => {
      toast.success(`Order #${data.id} successfully checked in!`)
      QueryClient.invalidateQueries({
        active: true,
      })
      navigate("/")
    },

    onError: () => toast.error("There was an error while checking in"),
  })

  return { checkin, isCheckingIn }
}
