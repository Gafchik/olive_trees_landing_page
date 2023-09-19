import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ukr from '../locales/ukr/main_locale';
import rus from '../locales/rus/main_locale';
import eng from '../locales/eng/main_locale';
import geo from '../locales/geo/main_locale';


Vue.use(VueI18n);

export const i18n = new VueI18n({
    locale: 'ukr',
    fallbackLocale: 'rus',
    messages: {
        ukr,rus,eng,geo
    }
})
