import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '/src/router/components/pages/HomePage/home-page';
import PageNotFound from '/src/router/components/pages/404/404';

Vue.use(VueRouter)

const routes = [
    ...HomePage,
    ...PageNotFound
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
