import styled from "styled-components"
import Heading from "../../ui/Heading"
import Row from "../../ui/Row"
import { useGetFilteredOrders } from "./useGetFilteredOrders"
import Button from "../../ui/Button"
// import { filterOrders } from "../../utils/helpers";
import Spinner from "../../ui/Spinner"
import { useState } from "react"

const StyledSearchInput = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / span 2;
  padding-top: 2.4rem;
  /* justify-content: center; */
  align-items: center;
`

const SearchInput = styled.input`
  height: 6rem;
  width: 80%;
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  margin-top: 3.2rem;
  box-shadow: var(--shadow-sm);
`

export default function ShortCutSearch() {
  const { isDataLoading, allData, error } = useGetFilteredOrders()
  const [searchingOrder, setSearchingOrder] = useState("")
  const [filteredOrders, setFilteredOrders] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    const itemsAfterFilter = allData.filter(
      (order) =>
        order.customers.fullName
          .toLowerCase()
          .includes(searchingOrder.toLowerCase()) ||
        order.WarehouseStore.name
          .toLowerCase()
          .includes(searchingOrder.toLowerCase()) ||
        order.id.toString().includes(searchingOrder.toLowerCase())
    )
    setFilteredOrders(itemsAfterFilter)
  }

  if (isDataLoading) return <Spinner />
  if (error) return <div>Error: {error.message}</div>

  return (
    <StyledSearchInput>
      <Row type="horizontal">
        <Heading as="h2">Search by Customer Name or Order ID</Heading>
      </Row>

      <SearchInput
        type="search"
        value={searchingOrder}
        onChange={(e) => setSearchingOrder(e.target.value)}
      />
      <Button onClick={handleSubmit}>Search</Button>

      {filteredOrders.length > 0 && (
        <div>
          {filteredOrders.map((order) => (
            <div key={order.id}>
              <p>Customer Name: {order.customers.fullName}</p>
              <p>Product: {order.WarehouseStore.name}</p>
            </div>
          ))}
        </div>
      )}
    </StyledSearchInput>
  )
}
