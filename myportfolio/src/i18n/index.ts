import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "aboutme": "About me",
            "contactme": "Contact me",
            "experiences": "Experiences",
        }
    },
    pt: {
        translation: {
            "aboutme": "Sobre mim",
            "contactme": "Contato",
            "experiences": "Experiências",
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;