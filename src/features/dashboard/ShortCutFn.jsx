import { useNavigate } from "react-router-dom"
import Button from "../../ui/Button"
import styled from "styled-components"
import { format } from "date-fns"
import { useDarkMode } from "../../context/DarkModeContext"

const StyledShortCutFn = styled.div`
  font-size: 1.5rem;
  max-height: 50rem;
  overflow-y: auto;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.5rem;
`

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 1fr;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;

  & h4 {
    margin: 0 auto;
  }
`

const StyledOrders = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;

  & p {
    margin: 0 auto;
  }
`

function ShortCutFn({ filteredOrders }) {
  const navigate = useNavigate()
  const { isDarkMode } = useDarkMode()

  return (
    <StyledShortCutFn>
      {filteredOrders.length > 0 ? (
        <StyledContainer>
          <StyledHeader>
            <h4>Orders No.</h4>
            <h4>Date</h4>
            <h4>Name</h4>
          </StyledHeader>

          {filteredOrders.map((order) => (
            <StyledOrders key={order.id}>
              <p>{order.WarehouseStore.code}</p>
              <p>
                {format(
                  new Date(order.WarehouseStore.created_at),
                  "MMM dd yyyy"
                )}
              </p>
              <p>{order.customers.fullName}</p>
              <Button
                $size="small"
                $variation={isDarkMode ? "secondary" : "primary"}
                onClick={() => navigate(`/orders/${order.id}`)}
              >
                Detail
              </Button>
            </StyledOrders>
          ))}
        </StyledContainer>
      ) : (
        <StyledContainer>
          <h2>Sorry, but there are no orders found 🙁</h2>
        </StyledContainer>
      )}
    </StyledShortCutFn>
  )
}

export default ShortCutFn
