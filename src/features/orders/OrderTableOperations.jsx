import SortBy from "../../ui/SortBy"
import Filter from "../../ui/Filter"
import TableOperations from "../../ui/TableOperations"

function OrderTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-in", label: "Checked in" },
          { value: "in-progress", label: "In progress" },
          { value: "delivered", label: "Delivered" },
        ]}
      />

      <SortBy
        options={[
          {
            value: "WarehouseStore(name)-asc",
            label: "Sort by product name (A-Z)",
          },
          {
            value: "WarehouseStore(name)-desc",
            label: "Sort by product name (Z-A)",
          },
          {
            value: "customers(fullName)-asc",
            label: "Sort by customer name (A-Z)",
          },
          {
            value: "customers(fullName)-desc",
            label: "Sort by customer name (Z-A)",
          },
          // {
          //   value: "WarehouseStore(regularPrice)-asc",
          //   label: "Sort by price (low first)",
          // },
          // {
          //   value: "WarehouseStore(regularPrice)-desc",
          //   label: "Sort by price (high first)",
          // },
          { value: "NoOfPcs-asc", label: "Sort by No. of pcs (low first)" },
          { value: "NoOfPcs-desc", label: "Sort by No. of pcs (high first)" },
          {
            value: "WarehouseStore(code)-asc",
            label: "Sort by code (low first)",
          },
          {
            value: "WarehouseStore(code)-desc",
            label: "Sort by code (high first)",
          },
        ]}
      />
    </TableOperations>
  )
}

export default OrderTableOperations
