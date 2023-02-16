import { Constants } from "@portfoliods/foundation/src";
import { ContactMeModel, ContactModel, EntrieModel } from "@portfoliods/foundation/src/types";
import { ContactMeAPI } from "@portfoliods/foundation/src/types/contactme.interface";
import client from "./base.service";

async function getContactMe(): Promise<ContactMeModel> {
  try {
    const { items } = await client
      .getEntries<ContactMeAPI>({
        content_type: "contactMe",
        locale: localStorage.getItem(Constants.LanguageKey ?? ""),
        limit: 1
      });

    if (items) {
      const contacts = items[0].fields.contacts.map((contact) => {
        return { ...contact.fields, logo: contact.fields.logo.fields.file.url }
      })
      return {
        ...items[0].fields,
        contacts: contacts
      } as ContactMeModel
    }

    return {} as ContactMeModel;

  } catch (error: any) {
    console.error(error);
    return Promise.reject();
  }
}

export { getContactMe };
