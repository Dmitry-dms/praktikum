import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ExpSystem from '../views/ExpSystem.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/exp',
    name: 'Expert System',
    component: ExpSystem,
    props: true
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/ExpSystem.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
