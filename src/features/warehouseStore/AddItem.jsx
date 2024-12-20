import Modal from "../../ui/Modal"
import Button from "../../ui/Button"
import CreateStoreForm from "./CreateStoreForm"

function AddItem() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="item-form">
          <Button>Add new Item to Store</Button>
        </Modal.Open>
        <Modal.Window name="item-form">
          <CreateStoreForm />
        </Modal.Window>
      </Modal>
    </div>
  )
}

// Alternatívna implementácia pomocou stavu
// function AddItem() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add new Item to Store
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateStoreForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddItem
