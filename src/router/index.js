import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DistributorView from '../views/proyects/distributor/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/proyecto-destribuidora',
      name: 'proyect-distributor',
      component: DistributorView,
    },

  ],
})

export default router
