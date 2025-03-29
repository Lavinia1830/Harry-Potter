import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../lang/en/en.json';
import it from '../lang/it/it.json';

const savedLanguage = localStorage.getItem('language') || 'it'; // Recupera la lingua salvata o imposta 'it' di default

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        it: { translation: it },
    },
    lng: savedLanguage, // Imposta la lingua recuperata
    fallbackLng: 'en', // Lingua di fallback
    interpolation: {
        escapeValue: false, // React già scappa i valori
    }
});

export default i18n;
