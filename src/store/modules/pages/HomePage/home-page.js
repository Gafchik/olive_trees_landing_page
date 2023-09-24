import axios from '@/plugins/axios';
import shared from '@/store/shared'


const URL_BUY_TREES_MONO = '/api/services/buy-young-olive-trees'

const state = {
    uuid: ''
};

const getters = {
    uuid: state => {
        return state.uuid
    },
};

const mutations = {
    setUuid: (state, payload) => {
        state.uuid = payload;
    },
    setTest: (state, payload) => {
       payload
    },
};

const actions = {
    buyTreesMono: async ({commit}, payload) => {
        let headers = {
            'X-Lang-Header': shared.state.locale,
            'Authorization': state.uuid
        }
        return await axios.post(URL_BUY_TREES_MONO, payload,{headers:headers})
            .then(({data}) => {
                commit('setTest',data.data)
                return {
                    result: true,
                    pageUrl: data.data.pageUrl
                }
            })
            .catch(() => {
                return {
                    result: false,
                }
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
