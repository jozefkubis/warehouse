import Input from "../../ui/Input"
import Button from "../../ui/Button"
import FileInput from "../../ui/FileInput"
import Textarea from "../../ui/Textarea"
import Form from "../../ui/Form"
import { useForm } from "react-hook-form"
import { useInsertStoreItem } from "./useInsertStoreItem"
import FormRow from "../../ui/FormRow"

function CreateStoreForm() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm()
  const { isInserting, insertStoreItem } = useInsertStoreItem()

  function onSubmit(data) {
    insertStoreItem(data)
    reset()
  }

  function onError(errors) {
    console.log(errors)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Code" error={errors?.code?.message}>
        <Input
          type="number"
          id="code"
          {...register("code", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="No. of pcs" error={errors?.NoOfPcs?.message}>
        <Input
          type="number"
          id="NoOfPcs"
          {...register("NoOfPcs", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Regular Price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          {...register("discount", {
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
          defaultValue={0}
        />
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <Textarea
          type="text"
          id="description"
          {...register("description", {
            required: "This field is required",
          })}
          defaultValue=""
        />
      </FormRow>

      <FormRow label>
        <FileInput
          id="image"
          accept="image/*"
          type="file"
          {...register("image", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isInserting} type="submit">
          Edit item
        </Button>
      </FormRow>
    </Form>
  )
}

export default CreateStoreForm
