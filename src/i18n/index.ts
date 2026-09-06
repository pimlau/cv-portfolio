import i18next from "i18next";
import en from "./locales/en.json";

export const defaultLanguage = "en";

export async function initI18n(): Promise<void> {
  await i18next.init({
    lng: defaultLanguage,
    fallbackLng: defaultLanguage,
    resources: {
      en: { translation: en },
    },
    interpolation: { escapeValue: false },
  });
}
