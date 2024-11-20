import styled from "styled-components"
import { format } from "date-fns"

import Tag from "../../ui/Tag"
import Table from "../../ui/Table"

import { formatCurrency } from "../../utils/helpers"
import { useNavigate } from "react-router-dom"
import Menus from "../../ui/Menus"
import { HiArrowDownOnSquare, HiEye } from "react-icons/hi2"

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
    orderPrice,
    extrasPrice,
    status,
    notes,
    totalPrice,
    WarehouseStore: { name: ItemName, code },
    customers: { fullName: customerName, email, address },
  },
}) {
  const navigate = useNavigate()

  const statusToTagName = {
    "in-progress": "blue",
    shipped: "green",
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

      <Menus.Menu>
        <Menus.Toggle id={orderId} />
        <Menus.List id={orderId}>
          <Menus.Button
            icon={<HiArrowDownOnSquare />}
            onClick={() => navigate(`/checkin/${orderId}`)}
          >
            Check in
          </Menus.Button>

          <Menus.Button
            icon={<HiEye />}
            onClick={() => navigate(`/orders/${orderId}`)}
          >
            See details
          </Menus.Button>
        </Menus.List>
      </Menus.Menu>
    </Table.Row>
  )
}

export default OrderRow
