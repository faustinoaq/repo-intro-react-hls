import { redirect } from "react-router-dom"
import { updateContact } from "../contacts"

export async function action({ request, params }) {
  const formData = await request.formData()
  //const firstName = formData.get("first")
  //const lastName = formData.get("last")
  const updates = Object.fromEntries(formData)
  console.log(updates.first) // "Some"
  console.log(updates.last) // "Name"
  await updateContact(params.contactId, updates)
  return redirect(`/contacts/${params.contactId}`)
}
