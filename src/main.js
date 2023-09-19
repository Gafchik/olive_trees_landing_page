import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync';
import { i18n } from './plugins/i18n';


sync(store, router);

Vue.config.productionTip = false
new Vue({
  vuetify,
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
