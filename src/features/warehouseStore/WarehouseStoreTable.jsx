import styled from "styled-components"
import Spinner from "../../ui/Spinner"
import WarehouseStoreRow from "./WarehouseStoreRow"
import { useWarehouseStore } from "./useWarehouseStore"
import Table from "../../ui/Table"
import Menus from "../../ui/Menus"
import { useSearchParams } from "react-router-dom"

const Div = styled.div`
  margin: 0 auto;
`

function WarehouseStoreTable() {
  const { isLoading, warehouseStoreData } = useWarehouseStore()
  const [searchParams] = useSearchParams()

  if (isLoading) return <Spinner />

  // MARK: FILTERING
  const filterValue = searchParams.get("discount") || "all"

  let filteredItems
  if (filterValue === "all") filteredItems = warehouseStoreData

  if (filterValue === "with-discount")
    filteredItems = warehouseStoreData.filter(
      (warehouseStore) => warehouseStore.discount > 0
    )

  if (filterValue === "no-discount")
    filteredItems = warehouseStoreData.filter(
      (warehouseStore) => warehouseStore.discount === 0
    )

  // // MARK: SORTING
  // const sortBy = searchParams.get("sortBy") || "startDate-asc"
  // const [field, direction] = sortBy.split("-")
  // const modifier = direction === "asc" ? 1 : -1
  // const storedItems = filteredItems.sort(
  //   (a, b) => (a[field] - b[field]) * modifier
  // )

  // MARK: SORTING
  const sortBy = searchParams.get("sortBy") || "startDate-asc"
  const [field, direction] = sortBy.split("-")
  const modifier = direction === "asc" ? 1 : -1

  const storedItems = filteredItems.sort((a, b) => {
    if (typeof a[field] === "string" && typeof b[field] === "string") {
      return a[field].localeCompare(b[field]) * modifier
    } else {
      return (a[field] - b[field]) * modifier
    }
  })

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr 1fr">
        <Table.Header role="row">
          <Div></Div>
          <Div>Code</Div>
          <Div>Name</Div>
          <Div>No. of pcs</Div>
          <Div>Price</Div>
          <Div>Discount</Div>
          <Div></Div>
        </Table.Header>
        <Table.Body
          data={storedItems}
          render={(warehouseStore) => (
            <WarehouseStoreRow
              key={warehouseStore.id}
              warehouseStore={warehouseStore}
            />
          )}
        />
      </Table>
    </Menus>
  )
}

export default WarehouseStoreTable
