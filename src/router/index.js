import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    },

    {
      path: '/dashboard/schedule',
      name: 'schedule',
      component: () => import('../views/ScheduleView.vue')
    },

    {
      path: '/dashboard/comms',
      name: 'comms',
      component: () => import('../views/CommsView.vue')
    },

    {
      path: '/dashboard/employees',
      name: 'employees',
      component: () => import('../views/EmployeesView.vue')
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },

    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    }
  ]
})

export default router