import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          signIn: "Sign in",
          donHaveAccount: "Don't have account ?",
          registerNow: "Register Now!",
          facebook: "Sign in with Facebook",
          google: "Sign in with Google",
          or: "or",
          emailAddress: "E-mail address",
          rememberMe: "Remember me",
          password: "Password",
          shop: "Shop",
          blog: "Blog",
          orders: "Orders",
          calendar: "Calendar",
        },
      },
      ru: {
        translations: {
          signIn: "Войти",
          facebook: "Войти с помощью Facebook",
          google: "Войти с помощью Google",
          or: "или",
          shop: "Магазин",
          blog: "Блог",
          orders: "Заказы",
          calendar: "Календарь",
        },
      },
      he: {
        translations: {
          signIn: "Sign in",
          facebook: "Facebook",
          google: "Sign in with Google",
          or: "or",
        },
      },
    },
    fallbackLng: "en",
    debug: false,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
