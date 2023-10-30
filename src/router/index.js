import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '/src/router/components/pages/HomePage/home-page';
import PageNotFound from '/src/router/components/pages/404/404';
import PayPage from '/src/router/components/pages/PayPage/pay-page';

Vue.use(VueRouter)

const routes = [
    ...HomePage,
    ...PayPage,
    ...PageNotFound,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
