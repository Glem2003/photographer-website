import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

import { en, zhTW } from './locales/index'

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en-US',
        debug: true,
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ["localStorage", "cookie", "navigator"],
            caches: ["localStorage", "cookie"],
        },
        resources: {
            'en-US': { translation: en },
            'zh-TW': { translation: zhTW }
        }
    });

export default i18n;