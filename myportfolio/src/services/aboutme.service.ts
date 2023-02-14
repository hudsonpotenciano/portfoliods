import { AboutMeModel } from "@portfoliods/foundation/src/types";
import client from "./base.service";

async function getAboutMe(): Promise<AboutMeModel> {
  let result: AboutMeModel = {} as AboutMeModel;
  await client
    .getEntries({
      content_type: "aboutMe",
      locale: localStorage.getItem(process.env.REACT_APP_LANGKEY ?? ""),
    })
    .then((entrie: any) => {
      result = { ...entrie.items[0].fields };
      result.imageUrl = entrie.items[0].fields.image.fields.file.url;
    })
    .catch(console.error);

  return result;
}

export { getAboutMe };
