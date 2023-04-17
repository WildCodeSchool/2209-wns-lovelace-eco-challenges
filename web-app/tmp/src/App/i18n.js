import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './translations/en.json';
import translationFR from './translations/fr.json';

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

const detectionOptions = {
  order: ['localStorage', 'navigator'],
  caches: ['localStorage'],
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    detection: detectionOptions,
    resources,
    fallbackLng: 'en',
    react: {
      useSuspense: false,
    }
  });

export default i18n;