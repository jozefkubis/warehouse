import styled from "styled-components"
import { formatCurrency } from "../../utils/helpers"
import { useDeleteStoreItem } from "./useDeleteStoreItem"

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`

const StoreItem = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
  margin: 0 auto;
`

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
  margin: 0 auto;
`

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
  margin: 0 auto;
`

const Div = styled.div`
  margin: 0 auto;
`

const Span = styled.span`
  margin: 0 auto;
`

function WarehouseStoreRow({ warehouseStore }) {
  const { isDeleting, deleteStoreItem } = useDeleteStoreItem()

  const {
    id: storeId,
    code,
    name,
    NoOfPcs,
    regularPrice,
    discount,
    // description,
    image,
  } = warehouseStore

  return (
    <>
      <TableRow role="row">
        <Img src={image} />
        <StoreItem>{code}</StoreItem>
        <Div>{name} </Div>
        <Div>{NoOfPcs}</Div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <Span>&mdash;</Span>
        )}
        {/* <Div>{description}</Div> */}

        <Div>
          <button
            onClick={() => deleteStoreItem(storeId)}
            disabled={isDeleting}
          >
            Delete
          </button>
        </Div>
      </TableRow>
    </>
  )
}

export default WarehouseStoreRow