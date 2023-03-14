import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import Backend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import fr from "./locales/fr/translation.json"
import en from "./locales/en/translation.json"
import de from "./locales/de/translation.json"
import it from "./locales/it/translation.json"
import Cache from "i18next-localstorage-cache"

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Cache)
  .init({
    react: {
      useSuspense: false, //   <---- desactivate suspense
    },
    default: "en",
    fallbackLng: "en",
    debug: false,
    whitelist: ["en", "fr", "de", "it"],
    cache: {
      enabled: false,
      prefix: "i18next_res_",
      expirationTime: Infinity,
      versions: {},
    },
    ddetector: {
      order: ["querystring", "cookie", "localstorage"],
      lookupQuerystring: "lng",
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",
      cache: ["localStorage", "cookie"],
      checkWhitelist: true,
    },
    resources: {
      fr: {
        common: fr,
      },
      en: {
        common: en,
      },
      de: {
        common: de,
      },
      it: {
        common: it,
      },
    },

    ns: ["common"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
  })
export default i18n

// import i18n from "i18next"
// import { initReactI18next } from "react-i18next"
// import Backend from "i18next-http-backend"
// import LanguageDetector from "i18next-browser-languagedetector"
// import fr from "./locales/fr/translation.json"
// import en from "./locales/en/translation.json"
// import de from "./locales/en/translation.json"
// import it from "./locales/en/translation.json"
// import Cache from "i18next-localstorage-cache"

// i18n
//   .use(Backend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .use(Cache)
//   .init({
//     react: {
//       useSuspense: false, //   <---- desactivate suspense
//     },
//     fallbackLng: "en",
//     debug: true,
//     whitelist: ["de", "fr", "en", "it"],
//     cache: {
//       enabled: false,
//       prefix: "i18next_res_",
//       expirationTime: Infinity,
//       versions: {},
//     },
//     detector: {
//       order: ["querystring", "cookie", "localstorage"],
//       lookupQuerystring: "lng",
//       lookupCookie: "i18next",
//       lookupLocalStorage: "i18nextLng",
//       cache: ["localStorage", "cookie"],
//       checkWhitelist: true,
//     },
//     // backend: {
//     //   loadPath: "/assets/locales/{{lng}}/translation.json",
//     // },
//     resources: {
//       en: {
//         common: en,
//       },
//       fr: {
//         common: fr,
//       },
//       de: {
//         common: de,
//       },
//       it: {
//         common: it,
//       },
//     },

//     ns: ["common"],
//     defaultNS: "common",
//     interpolation: {
//       escapeValue: false,
//     },
//   })

// // i18n.on("languageChanged", (lng) => {
// // E.g. set the moment locale with the current language
// // moment.locale(lng)
// // then re-render your app
// // app.render();
// // })
// export default i18n
