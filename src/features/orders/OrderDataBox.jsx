import styled from "styled-components"
import { format, isToday } from "date-fns"
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2"
import DataItem from "../../ui/DataItem"
import { formatDistanceFromNow, formatCurrency } from "../../utils/helpers"
import { TbSend2 } from "react-icons/tb"
import { useSettings } from "../settings/useSettings"
import Spinner from "../../ui/Spinner"

const StyledOrderDataBox = styled.section`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  overflow: hidden;
`

const Header = styled.header`
  background-color: var(--color-brand-500);
  padding: 2rem 4rem;
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;

  & div:first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.1rem;
    font-weight: 500;
    font-size: 1.8rem;
  }

  & span {
    font-family: "Sono";
    font-size: 2rem;
    margin-left: 4px;
  }
`

const Section = styled.section`
  padding: 3.2rem 4rem 1.2rem;
`

const Customer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }

  & svg {
    height: 2.1rem;
    width: 2.1rem;
  }
`

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;
  background-color: ${(props) =>
    props.$isPaid ? "var(--color-green-100)" : "var(--color-yellow-100)"};
  color: ${(props) =>
    props.$isPaid ? "var(--color-green-700)" : "var(--color-yellow-700)"};

  & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }
`

const Footer = styled.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
`

function OrderDataBox({ order }) {
  const {
    created_at,
    NoOfPcs,
    notes,
    isPaid,
    WarehouseStore: { name: ItemName, code, regularPrice, discount },
    customers: { fullName: customerName, email, address },
  } = order

  const { settings } = useSettings()

  if (!settings || typeof settings.shipping === "undefined") {
    console.error(
      "Settings not loaded or missing 'shipping' property:",
      settings
    )
    return <Spinner />
  }

  const shippingPrice = settings.shipping
  const orderPrice = regularPrice - discount
  const totalOrderPrice = orderPrice * NoOfPcs
  const totalPrice = totalOrderPrice + shippingPrice

  return (
    <StyledOrderDataBox>
      <Header>
        <div>
          <p>
            Order: <span>{code}</span>
          </p>
          <p>
            Item(s): <span>{NoOfPcs}</span>
          </p>
          <p>
            Item(s) Name: <span>{ItemName}</span>
          </p>
        </div>

        <p>
          {format(new Date(created_at), "EEE, MMM dd yyyy")} (
          {isToday(new Date(created_at))
            ? "Today"
            : formatDistanceFromNow(created_at)}
          )
        </p>
      </Header>

      <Section>
        <Customer>
          <TbSend2 />
          <p>{customerName}</p>
          <p>{email}</p>
          <span>&bull;</span>
          <p>{address}</p>
        </Customer>

        {notes && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
            label="Notes"
          >
            {notes}
          </DataItem>
        )}

        <Price $isPaid={isPaid}>
          <DataItem icon={<HiOutlineCurrencyDollar />} label={`Total price`}>
            {formatCurrency(totalPrice)}

            {` (${formatCurrency(totalOrderPrice)} cabin + ${formatCurrency(
              shippingPrice
            )}) `}
          </DataItem>

          <p>{isPaid ? "Paid" : "Not paid"}</p>
        </Price>
      </Section>

      <Footer>
        <p>Ordered {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
      </Footer>
    </StyledOrderDataBox>
  )
}

export default OrderDataBox
