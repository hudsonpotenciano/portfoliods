import { Constants } from "@portfoliods/foundation/src";
import { EntrieModel, IntroModel } from "@portfoliods/foundation/src/types";
import client from "./base.service";

async function getIntro(): Promise<IntroModel> {
  let result: IntroModel = {} as IntroModel;
  await client
    .getEntries({
      content_type: "intro",
      locale: localStorage.getItem(Constants.LanguageKey ?? ''),
    })
    .then((entrie: any) => {
      result = { ...entrie.items[0].fields };
      result.avatar = entrie.items[0].fields.avatar.fields.file.url;
    })
    .catch(console.error);

  return result;
}

export { getIntro };
