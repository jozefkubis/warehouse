import Filter from "../../ui/Filter"
import SortBy from "../../ui/SortBy"
import TableOperations from "../../ui/TableOperations"

function StoreTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "with-discount", label: "With discount" },
          { value: "no-discount", label: "No discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by price (low first)" },
          { value: "regularPrice-desc", label: "Sort by price (high first)" },
          { value: "code-asc", label: "Sort by code (low first)" },
          { value: "code-desc", label: "Sort by code (high first)" },
        ]}
      />
    </TableOperations>
  )
}

export default StoreTableOperations
