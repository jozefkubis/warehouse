import styled from "styled-components"
import { format } from "date-fns"

import Tag from "../../ui/Tag"
import Table from "../../ui/Table"

import { formatCurrency } from "../../utils/helpers"
import { useNavigate } from "react-router-dom"
import Menus from "../../ui/Menus"
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2"
import useDelivered from "../check-in-out/useDelivered"
import Modal from "../../ui/Modal"
import ConfirmDelete from "../../ui/ConfirmDelete"
import { useDeleteOrder } from "./useDeleteOrder"
// import { useSettings } from "../settings/useSettings"

const Item = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-grey-600);
  /* font-family: "Sono"; */
  margin: 0 auto;
`

const ItemQuantity = styled.div`
  font-size: 1.2rem;
  color: var(--color-grey-600);
  /* font-family: "Sono"; */
  margin: 0 auto;
`

const Address = styled.div`
  font-size: 1.2rem;
  color: var(--color-grey-600);
  margin: 0 auto;
`

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin: 0 auto;

  & span:first-child {
    font-weight: 500;
    margin: 0 auto;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
    margin: 0 auto;
  }
`

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 600;
  margin: 0 auto;
`

function OrderRow({
  order: {
    id: orderId,
    created_at,
    NoOfPcs,
    status,
    notes,
    WarehouseStore: { name: ItemName, code, regularPrice, discount },
    customers: { fullName: customerName, email, address },
  },
  shippingPrice,
}) {
  const navigate = useNavigate()
  const { delivered, isDelivering } = useDelivered()
  const { deleteOrder, isDeleting } = useDeleteOrder()

  const orderPrice = regularPrice - discount
  const totalOrderPrice = orderPrice * NoOfPcs
  const totalPrice = totalOrderPrice + shippingPrice

  const statusToTagName = {
    "in-progress": "silver",
    "checked-in": "green",
    shipped: "blue",
    delivered: "yellow",
  }

  return (
    <Table.Row>
      <Item>{code}</Item>
      <Stacked>
        <Item>{ItemName}</Item>
        <span>{format(new Date(created_at), "MMM dd yyyy")}</span>
      </Stacked>

      <Stacked>
        <span>{customerName}</span>
        <span>{email}</span>
      </Stacked>
      <Address>{address}</Address>
      <ItemQuantity>{NoOfPcs}</ItemQuantity>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={orderId} />
          <Menus.List id={orderId}>
            {status === "in-progress" && (
              <Menus.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/checkin/${orderId}`)}
              >
                Check in
              </Menus.Button>
            )}

            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/orders/${orderId}`)}
            >
              See details
            </Menus.Button>

            {status === "checked-in" && (
              <Menus.Button
                icon={<HiArrowUpOnSquare />}
                onClick={() => delivered(orderId)}
                disabled={isDelivering}
              >
                Delivered
              </Menus.Button>
            )}

            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete Order</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="order"
            onConfirm={() => deleteOrder(orderId)}
            disabled={isDeleting}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  )
}

export default OrderRow
