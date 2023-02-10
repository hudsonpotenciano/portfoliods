import { ContactMeModel, EntrieModel } from "@portfoliods/foundation/src/types";
import client from "./base.service";

async function getAllContacts(): Promise<ContactMeModel> {
  let result: ContactMeModel = {} as ContactMeModel;
  await client
    .getEntries({
      content_type: "contact",
    })
    .then((entrie: any) => {
      result = { ...entrie.items[0].fields };
      // result = entries.items.map((entrie: any) => {
      //   let item = entrie.fields as ContactMeModel;
      //   // item.contacts.forEach(contact => {
      //   //   contact.logo = entrie.fields.logo.fields.file.url;
      //   // });
      //   return item;
      // });
    })
    .catch(console.error);

  return result;
}

export { getAllContacts };
