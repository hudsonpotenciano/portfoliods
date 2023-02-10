import { EntrieModel, ExperienceModel } from "@portfoliods/foundation/src/types";
import client from "./base.service";

async function getAllContent(): Promise<ExperienceModel[]> {
  let result: ExperienceModel[] = [];
  await client
    .getEntries({
      content_type: "experience",
      order: "fields.order",
      locale: localStorage.getItem(process.env.REACT_APP_LANGKEY ?? ""),
    })
    .then((entries: any) => {
      result = entries.items.map((entrie: any) => {
        let item = entrie.fields as ExperienceModel;
        item.avatar = entrie.fields.avatar.fields.file.url;
        return item;
      });
    })
    .catch(console.error);

  return result;
}

export { getAllContent };
