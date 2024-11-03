import Input from "../../ui/Input"
import Button from "../../ui/Button"
import FileInput from "../../ui/FileInput"
import Textarea from "../../ui/Textarea"
import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"

import { useForm } from "react-hook-form"
import { useInsertStoreItem } from "./useInsertStoreItem"
import { useUpdateStoreItem } from "./useUpdateStoreItem"

function CreateStoreForm({ itemToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = itemToEdit
  const isEditSession = Boolean(editId)

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: isEditSession ? editValues : {},
  })

  const { isInserting, insertStoreItem } = useInsertStoreItem()
  const { isUpdating, updateStoreItem } = useUpdateStoreItem()
  const isWorking = isInserting || isUpdating

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0]

    if (isEditSession)
      updateStoreItem(
        { newItemData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset()
            onCloseModal()
          },
        }
      )
    else
      insertStoreItem(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset()
            onCloseModal()
          },
        }
      )
  }

  function onError(errors) {
    console.log(errors)
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Code" error={errors?.code?.message}>
        <Input
          type="number"
          id="code"
          disabled={isWorking}
          {...register("code", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="No. of pieces" error={errors?.NoOfPcs?.message}>
        <Input
          type="number"
          id="NoOfPcs"
          disabled={isWorking}
          {...register("NoOfPcs", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Regular Price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
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
          disabled={isWorking}
          {...register("description", {
            required: "This field is required",
          })}
          defaultValue=""
        />
      </FormRow>

      <FormRow label>
        <FileInput
          id="image"
          disabled={isWorking}
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking} type="submit">
          {isEditSession ? "Save changes" : "Create new item"}
        </Button>
      </FormRow>
    </Form>
  )
}

export default CreateStoreForm
