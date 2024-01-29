import i18n from "i18next";

import * as en from "./en";
import * as id from "./id";

i18n.init({
  compatibilityJSON: "v3",
  resources: {
    en: {
      translation: {
        ...en,
      },
    },
    id: {
      translation: {
        ...id,
      },
    },
  },
  lng: "id",
  fallbackLng: "id",
  interpolation: {
    escapeValue: false,
  },
  ns: ["translation"],
  defaultNS: "translation",
});

export default i18n;
