import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DistributorView from '../views/proyects/distributor/Index.vue';
import SimsDiary from '../views/proyects/simsDiary/Index.vue';
import Workshop from '../views/proyects/workshop/Index.vue';

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
    {
      path: '/proyecto-diario-sims',
      name: 'proyect-sims-diary',
      component: SimsDiary,
    },
    {
      path: '/proyecto-taller',
      name: 'proyect-workshop',
      component: Workshop,
    },

  ],
})

export default router
