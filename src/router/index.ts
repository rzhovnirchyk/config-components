import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageView from '../views/PageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/customer-care/search',
      component: PageView,
      props: { page: 'CustomerCare.Search' },
      meta: { reuse: false },
    },
    {
      path: '/customer-care/user',
      component: PageView,
      props: { page: 'CustomerCare.User' },
      meta: { reuse: false },
    }
  ]
})

export default router
