import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJson from '../i18n/en-US/en-US.json';
import ptBrJson from '../i18n/pt-BR/pt-BR.json';

i18next.use(initReactI18next).init({
  fallbackLng: 'ptBR',
  interpolation: {
    escapeValue: false,
  },

  resources: {
    en: enJson,
    ptBR: ptBrJson,
  },
});
