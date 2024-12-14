import styled from "styled-components"
import { formatCurrency } from "../../utils/helpers"
import { useDeleteStoreItem } from "./useDeleteStoreItem"
import CreateStoreForm from "./CreateStoreForm"
import { useInsertStoreItem } from "./useInsertStoreItem"
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2"
import Modal from "../../ui/Modal"
import ConfirmDelete from "../../ui/ConfirmDelete"
import Table from "../../ui/Table"
import Menus from "../../ui/Menus"

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`
const ModalImg = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(12);
`

const StoreItem = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-grey-600);
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
  const { isInserting, insertStoreItem } = useInsertStoreItem()

  const {
    id: itemId,
    code,
    name,
    regularPrice,
    discount,
    description,
    image,
  } = warehouseStore

  function handleDuplicate() {
    insertStoreItem({
      code,
      name: `Copy of ${name}`,
      regularPrice,
      discount,
      description,
      image,
    })
  }

  return (
    <Table.Row>
      <div>
        <Modal>
          <Modal.Open opens="image-modal">
            <Img src={image} />
          </Modal.Open>
          <Modal.Window name="image-modal">
            <ModalImg src={image} />
          </Modal.Window>
        </Modal>
      </div>

      <StoreItem>{code}</StoreItem>
      <Div>{name}</Div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <Span>&mdash;</Span>
      )}

      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={itemId} />
            <Menus.List id={itemId}>
              <Menus.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>
                Duplicate
              </Menus.Button>
              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />} disabled={isInserting}>
                  Edit
                </Menus.Button>
              </Modal.Open>
              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>
            <Modal.Window name="edit">
              <CreateStoreForm itemToEdit={warehouseStore} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="Store Item"
                onConfirm={() => deleteStoreItem(itemId)}
                disabled={isDeleting}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  )
}

export default WarehouseStoreRow
