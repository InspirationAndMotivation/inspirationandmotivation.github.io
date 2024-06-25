import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from '../languages/en.json';
import frJSON from '../languages/fr.json';
import plJSON from '../languages/pl.json';
import ruJSON from '../languages/ru.json';
import uaJSON from '../languages/ua.json';

i18n.use(initReactI18next).init({
    resources: {
        en: { ...enJSON },
        fr: { ...frJSON },
        pl: { ...plJSON },
        ru: { ...ruJSON },
        ua: { ...uaJSON },
    },
    lng: "en",
});