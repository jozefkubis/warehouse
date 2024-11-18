import styled from "styled-components"

import OrderDataBox from "./OrderDataBox"
import Row from "../../ui/Row"
import Heading from "../../ui/Heading"
import Tag from "../../ui/Tag"
import ButtonGroup from "../../ui/ButtonGroup"
import Button from "../../ui/Button"
import ButtonText from "../../ui/ButtonText"

import { useMoveBack } from "../../hooks/useMoveBack"
import Spinner from "../../ui/Spinner"
import { useOrder } from "./useOrder"
import { HiOutlineShoppingCart } from "react-icons/hi2"

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;

  svg {
    height: 3.2rem;
    width: 3.2rem;
    stroke-width: 2.5px;
  }
`

function OrderDetail() {
  const { order, isLoading } = useOrder()

  const moveBack = useMoveBack()

  if (isLoading) return <Spinner />

  const { status, id: orderId } = order

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  }

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          {/* <HiOutlineShoppingCart /> */}
          <Heading as="h1">Order #{orderId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <OrderDataBox order={order} />

      <ButtonGroup>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  )
}

export default OrderDetail
