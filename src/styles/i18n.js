import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const storedLang = typeof window !== 'undefined' ? localStorage.getItem('lng') || 'en' : 'en';

await i18n.use(initReactI18next).init({
  resources: {},
  lng: storedLang,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export async function loadNamespaces(ns, lng = i18n.language) {
  if (!i18n.hasResourceBundle(lng, 'translation')) {
    const resources = await import(`../locales/${lng}.json`);
    i18n.addResourceBundle(lng, 'translation', resources.default || resources);
  }
  await i18n.loadNamespaces(ns);
}

export default i18n;