import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ExpSystemClear from '../views/ExpSystemClear.vue'
import ExpSystem from '../views/ExpSystem.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/exp-add-new',
    name: 'Expert System Clear',
    component: ExpSystemClear
    
  },
  {
    path: '/systems/:id',
    name: 'Expert System',
    component: ExpSystem,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
