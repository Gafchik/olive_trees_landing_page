import Vue from 'vue';
import Vuex from 'vuex';
import pathify from 'vuex-pathify'
import shared from './shared'
import PayPage from '@/store/modules/pages/PayPage/pay-page';


Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [ pathify.plugin ],
    modules: {
        app: shared,
        payPage: PayPage,
    }
});
