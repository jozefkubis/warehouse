import styled from "styled-components"

import Row from "../../ui/Row"
import Heading from "../../ui/Heading"
import ButtonGroup from "../../ui/ButtonGroup"
import Button from "../../ui/Button"
import ButtonText from "../../ui/ButtonText"
import Checkbox from "../../ui/Checkbox"

import { useMoveBack } from "../../hooks/useMoveBack"
import Spinner from "../../ui/Spinner"
import { useEffect, useState } from "react"
// import { id, is } from "date-fns/locale"
import { formatCurrency } from "../../utils/helpers"
import useCheckin from "./useCheckin"
import { useSettings } from "../settings/useSettings"
// import { add } from "date-fns"
import { useOrder } from "../orders/useOrder"
// import Order from "../../pages/Order"
import OrderDataBox from "../orders/OrderDataBox"

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`

function CheckinOrder() {
  const [confirmPaid, setConfirmPaid] = useState(false)
  const [addShipping, setAddShipping] = useState(false)
  const { order, isLoading } = useOrder()
  const { settings, isLoading: isLoadingSettings } = useSettings()

  useEffect(() => {
    setConfirmPaid(order?.isPaid ?? false)
  }, [order])

  const moveBack = useMoveBack()
  const { checkin, isCheckingIn } = useCheckin()

  if (isLoading || isLoadingSettings) return <Spinner />

  const { id: orderId, customers, totalPrice, isPaid, NoOfPcs } = order

  const optionalShippingPrice = settings.shipping * NoOfPcs

  function handleCheckin() {
    if (!confirmPaid) return

    if (addShipping) {
      checkin({
        orderId,
        shipping: {
          isPaid: true,
          extrasPrice: optionalShippingPrice,
          totalPrice: totalPrice + optionalShippingPrice,
        },
      })
    } else {
      checkin({ orderId, shipping: {} })
    }
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in order #{orderId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <OrderDataBox order={order} />

      {!isPaid && (
        <Box>
          <Checkbox
            checked={addShipping}
            onChange={() => {
              setAddShipping((add) => !add)
              setConfirmPaid(false)
            }}
            id="shipping"
          >
            Want to add shipping for {formatCurrency(optionalShippingPrice)}?
          </Checkbox>
        </Box>
      )}

      <Box>
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          id="confirm"
          disabled={confirmPaid || isCheckingIn}
        >
          I confirm that {customers.fullName} has paid the total amount of{" "}
          <strong>
            {!addShipping
              ? formatCurrency(totalPrice)
              : `${formatCurrency(
                  totalPrice + optionalShippingPrice
                )} (${formatCurrency(totalPrice)} + ${formatCurrency(
                  optionalShippingPrice
                )})`}
          </strong>
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
          Check in order #{orderId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  )
}

export default CheckinOrder
