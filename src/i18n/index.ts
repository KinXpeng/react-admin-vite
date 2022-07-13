import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zh_CN from './locales/zh_CN';
import en_US from './locales/en_US';

const resources = {
  en: {
    translation: en_US,
  },
  zh: {
    translation: zh_CN,
  },
};

const lang = localStorage.getItem('locale');
i18n.use(initReactI18next).init({
  resources,
  lng: lang === 'en_US' ? 'en' : 'zh', // 缓存没有时默认中文
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
