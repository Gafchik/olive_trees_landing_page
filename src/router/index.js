import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '/src/router/components/pages/HomePage/home-page';

Vue.use(VueRouter)

const routes = [
    ...HomePage
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
