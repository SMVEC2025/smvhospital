import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // Load translations from JSON files
  .use(LanguageDetector) // Detect browser language
  .use(initReactI18next) // Initialize with React
  .init({
    supportedLngs: ["en", "ta", "ur", "zh"],
    fallbackLng: "en", // Default fallback language
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["cookie"], // Store user preference
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Translation files path
    },
    interpolation: {
      escapeValue: false, // Prevents React escaping HTML
    },
  });

export default i18n;
