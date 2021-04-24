import Vue from 'vue'
import VueRouter from 'vue-router'
import SimonEasy from '../views/SimonEasy'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SimonEasy',
    component: SimonEasy
  },
  {
    path: '/SimonMiddle',
    name: 'SimonMiddle',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SimonMiddle')
  },
    {
    path: '/SimonDifficult',
    name: 'SimonDifficult',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SimonDifficult')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
