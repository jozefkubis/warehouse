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
import { useNavigate } from "react-router-dom"
import useDelivered from "../check-in-out/useDelivered"
import { HiArrowUpOnSquare } from "react-icons/hi2"
import Modal from "../../ui/Modal"
import ConfirmDelete from "../../ui/ConfirmDelete"
import { useDeleteOrder } from "./useDeleteOrder"
// import { HiOutlineShoppingCart } from "react-icons/hi2"

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
  const { delivered, isDelivering } = useDelivered()
  const { deleteOrder, isDeleting } = useDeleteOrder()

  const navigate = useNavigate()

  const moveBack = useMoveBack()

  if (isLoading) return <Spinner />

  const { status, id: orderId } = order

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
    delivered: "green",
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
        {status === "in-progress" && (
          <Button onClick={() => navigate(`/checkin/${orderId}`)}>
            Check in
          </Button>
        )}

        {status === "checked-in" && (
          <Button
            icon={<HiArrowUpOnSquare />}
            onClick={() => delivered(orderId)}
            disabled={isDelivering}
          >
            Delivered
          </Button>
        )}

        <Modal>
          <Modal.Open opens="delete">
            <Button variation="danger">Delete order</Button>
          </Modal.Open>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="order"
              onConfirm={() =>
                deleteOrder(orderId, { onSettled: () => navigate(-1) })
              }
              disabled={isDeleting}
            />
          </Modal.Window>
        </Modal>

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  )
}

export default OrderDetail
