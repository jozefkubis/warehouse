import styled from "styled-components"
// import { format, isToday } from "date-fns"

import Tag from "../../ui/Tag"
import Table from "../../ui/Table"

import { formatCurrency } from "../../utils/helpers"
// import { formatDistanceFromNow } from "../../utils/helpers"

const Item = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`

function OrderRow({
  order: {
    id: OrderId,
    created_at,
    NoOfPcs,
    orderPrice,
    extraPrice,
    status,
    notes,
    totalPrice,
    // WarehouseStore: { name: ItemName },
    customers: { fullName: customerName, email },
  },
}) {
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  }

  return (
    <Table.Row>
      <Item>{OrderId}</Item>

      <Stacked>
        <span>{customerName}</span>
        <span>{email}</span>
      </Stacked>

      {/* <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag> */}

      <Amount>{formatCurrency(totalPrice)}</Amount>
    </Table.Row>
  )
}

export default OrderRow
