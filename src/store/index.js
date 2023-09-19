import Vue from 'vue';
import Vuex from 'vuex';
import pathify from 'vuex-pathify'
import shared from './shared'
import HomePage from './modules/pages/HomePage/home-page';


Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [ pathify.plugin ],
    modules: {
        app: shared,
        homePage: HomePage,
    }
});
