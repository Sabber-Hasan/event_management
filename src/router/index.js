import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import Hall from '../components/HallBooking.vue'
import Order from '../components/Order.vue'
import Report from '../components/Report.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/hall',
      name: 'hall',
      component: Hall
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/report',
      name: 'report',
      component: Report
    },
  ]
})

export default router