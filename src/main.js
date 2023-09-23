import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync';
import { i18n } from './plugins/i18n';
import axios from 'axios';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';


sync(store, router);

Vue.config.productionTip = false
new Vue({
  vuetify,
  router,
  i18n,
  store,
  axios,
  Swal,
  render: h => h(App)
}).$mount('#app')
