import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"
import Input from "../../ui/Input"
import Spinner from "../../ui/Spinner"
import { useSettings } from "./useSettings"
// import { useUpdateSetting } from "./useUpdateSetting"

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: { minPcsToOrder, maxPcsToOrder, shipping } = {},
  } = useSettings()
  // const { isUpdating, updateSetting } = useUpdateSetting()

  if (isLoading) return <Spinner />

  // function handleUpdate(e, field) {
  //   const { value } = e.target

  //   if (!value) return
  //   updateSetting({ [field]: value })
  // }

  return (
    <Form>
      <FormRow label="Minimum pieces to order">
        <Input
          type="number"
          id="minPcsToOrder"
          defaultValue={minPcsToOrder}
          // disabled={isUpdating}
          // onBlur={(e) => handleUpdate(e, "minPcsToOrder")}
        />
      </FormRow>

      <FormRow label="Maximum pieces to order">
        <Input
          type="number"
          id="maxPcsToOrder"
          defaultValue={maxPcsToOrder}
          // disabled={isUpdating}
          // onBlur={(e) => handleUpdate(e, "maxPcsToOrder")}
        />
      </FormRow>

      <FormRow label="Shipping costs">
        <Input
          type="number"
          id="shipping"
          defaultValue={shipping}
          // disabled={isUpdating}
          // onBlur={(e) => handleUpdate(e, "shipping")}
        />
      </FormRow>
    </Form>
  )
}

export default UpdateSettingsForm
