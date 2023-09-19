import config from '@/vue.config'
import { i18n } from '@/plugins/i18n';

const state = {
    locale: config.config.locale
};

const getters = {
    getLocale: state => {
        return state.locale
    }
};

const mutations = {
    setLocale: (state, payload) => {
        state.locale = payload;
        window.localStorage.setItem('locale', state.locale);
    }
};

const actions = {
    setLocale: ({commit}, locale) => {
        if (config.config.locales.includes(locale)) {
            import(`@/locales/${locale}/main_locale.js`).then(() => {
                i18n.locale = locale;
                commit('setLocale', locale);
            }).catch((error) => {
                console.log('i18n locale error: ', error)
            });
        }
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
