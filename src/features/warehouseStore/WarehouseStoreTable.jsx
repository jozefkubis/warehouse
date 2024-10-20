import styled from "styled-components"
import Spinner from "../../ui/Spinner"
import WarehouseStoreRow from "./WarehouseStoreRow"
import { useWarehouseStore } from "./useWarehouseStore"

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`
const Div = styled.div`
  margin: 0 auto;
`

function WarehouseStoreTable() {
  const { isLoading, warehouseStoreData } = useWarehouseStore()

  if (isLoading) return <Spinner />

  return (
    <Table role="table">
      <TableHeader role="row">
        <Div></Div>
        <Div>Code</Div>
        <Div>Name</Div>
        <Div>No. of pcs</Div>
        <Div>Price</Div>
        <Div>Discount</Div>
        <Div></Div>
      </TableHeader>
      {warehouseStoreData.map((warehouseStore) => (
        <WarehouseStoreRow
          key={warehouseStore.id}
          warehouseStore={warehouseStore}
        />
      ))}
    </Table>
  )
}

export default WarehouseStoreTable
