import config from '@/vue.config'
import { i18n } from '@/plugins/i18n';
import axios from '@/plugins/axios';

const URL_GET_CONTACTS = '/api/services/get-contacts'

const state = {
    locale: config.config.locale,
    contacts: []
};

const getters = {
    getLocale: state => {
        return state.locale
    },
    contacts: state => {
        return state.contacts
    },
};

const mutations = {
    setLocale: (state, payload) => {
        state.locale = payload;
        window.localStorage.setItem('locale', state.locale);
    },
    setContacts: (state, payload) => {
        state.contacts = payload;
    },
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
    getContactsAsync: async ({commit}) => {
        return await axios.post(URL_GET_CONTACTS,)
            .then(({data}) => {
                commit('setContacts',data.data)
            })
            .catch(() => {
                commit('setContacts',[])
            })
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
