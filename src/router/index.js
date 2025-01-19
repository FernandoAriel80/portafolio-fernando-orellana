import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DistributorView from '../views/proyects/distributor/Index.vue';
import SimsDiary from '../views/proyects/simsDiary/Index.vue';
import Workshop from '../views/proyects/workshop/Index.vue';
import Proyects from '../views/proyects/ProyectsView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/proyectos',
      name: 'proyects',
      component: Proyects,
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
  scrollBehavior(to, from, savedPosition) {
    // Verifica si hay una posición guardada (al navegar hacia atrás/adelante)
    if (savedPosition) {
      return savedPosition; // Mantiene la posición guardada
    }
    // Si no, desplázate al principio de la página
    return { top: 0 };
  },
});
export default router
