import styled from "styled-components"
import Heading from "../../ui/Heading"
import Row from "../../ui/Row"
import { useGetFilteredOrders } from "./useGetFilteredOrders"
import Button from "../../ui/Button"
// import { filterOrders } from "../../utils/helpers";
import Spinner from "../../ui/Spinner"
import { useState } from "react"
import ShortCutFn from "./ShortCutFn"
import { HiXMark } from "react-icons/hi2"
import { useOutsideClick } from "../../hooks/useOutsideClick"

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

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`

const ModalButton = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`

export default function ShortCutSearch() {
  const { isDataLoading, allData, error } = useGetFilteredOrders()
  const [searchingOrder, setSearchingOrder] = useState("")
  const [filteredOrders, setFilteredOrders] = useState([])
  const [isOpenModal, setIsOpenModal] = useState(false)
  const ref = useOutsideClick(() => setIsOpenModal(false))

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
    setIsOpenModal(true)
  }

  if (isDataLoading) return <Spinner />
  if (error) return <div>Error: {error.message}</div>

  return (
    <StyledSearchInput>
      <Row type="horizontal">
        <Heading as="h2">Search by Customer Name or Order No.</Heading>
      </Row>
      <SearchInput
        type="search"
        value={searchingOrder}
        onChange={(e) => setSearchingOrder(e.target.value)}
      />
      <Button size="large" variation="primary" onClick={handleSubmit}>
        Search
      </Button>

      {isOpenModal && (
        <Overlay>
          <StyledModal ref={ref}>
            <ModalButton onClick={() => setIsOpenModal(false)}>
              <HiXMark />
            </ModalButton>
            <ShortCutFn filteredOrders={filteredOrders} />
          </StyledModal>
        </Overlay>
      )}
    </StyledSearchInput>
  )
}
