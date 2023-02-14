import { ContactMeModel, ContactModel, EntrieModel } from "@portfoliods/foundation/src/types";
import client from "./base.service";

async function getContactMe(): Promise<ContactMeModel> {
  let result: ContactMeModel = {} as ContactMeModel;
  await client
    .getEntries({
      content_type: "contactMe",
      locale: localStorage.getItem(process.env.REACT_APP_LANGKEY ?? ""),
    })
    .then(async (entrie: any) => {
      result = { ...entrie.items[0].fields };
      await client.getEntries({ content_type: "contact" })
        .then((entries: any) => {
          result.contacts = entries.items.map((contact: any) => {
            return {
              ...contact.fields,
              logo: contact.fields.logo.fields.file.url,
            } as ContactModel
          });
        })
    })
    .catch(console.error);

  return result;
}

export { getContactMe };
