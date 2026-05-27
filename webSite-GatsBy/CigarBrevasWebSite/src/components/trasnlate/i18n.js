import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({

  resources: {
    es: {
      translation: {
        wellcome: "Bienvenido",
        tienes: "Tienes",
        hecho: "Hecho a Mano",
        edad: "edad",
        suficiente: "suficiente"
      },
    },
    en: {
      translation: {
        wellcome: "Wellcome", 
        tienes: "Are You",
        hecho: "Hand Made",
        suficiente: "enough"
      },
    },
    pt: {
      translation: {
        wellcome: "Bem-vindo",
        tienes: "Você tem",
        hecho: "Feito à Mão",
        suficiente: "suficiente"
      },
    },
  },

  lng: "es",
  fallbackLng: "en",
  interpolation: { escapeValue: false },

});

export default i18n;