<script setup>
import LayoutView from "./layout/LayoutProyects.vue";

import ProyectPreView from "@/components/ProyectPreView.vue";
import inicioSimsDiary from "@/assets/images/sims-page/inicio.png";
import inicioDistribuitor from "@/assets/images/distribuidora/inicio.png";
import inicioWorkshop from "@/assets/images/taller/indice.png";
import apiRutas from "@/assets/images/esqueleto-api/api-rutas.png";

const tecnologiesSimsDiary = [
  { name: "HTML", src: "https://img.icons8.com/ios/50/ffffff/html-5--v1.png" },
  { name: "CSS", src: "https://img.icons8.com/ios/50/ffffff/css3.png" },
  { name: "PHP", src: "https://img.icons8.com/?size=100&id=39852&format=png&color=FFFFFF" },
  { name: "MySql", src: "https://img.icons8.com/?size=100&id=39855&format=png&color=FFFFFF" },
];
const tecnologiesDistributor = [
  { name: "HTML", src: "https://img.icons8.com/ios/50/ffffff/html-5--v1.png" },
  { name: "Tailwind", src: "https://img.icons8.com/?size=100&id=qOFWMoaAQIdR&format=png&color=FFFFFF" },
  { name: "Vue.js", src: "https://img.icons8.com/ios/50/ffffff/vuejs.png" },
  { name: "Laravel", src: "https://img.icons8.com/ios/50/ffffff/laravel.png" },
  { name: "MySql", src: "https://img.icons8.com/?size=100&id=39855&format=png&color=FFFFFF" },
];
const tecnologiesWorkshop = [
  { name: "HTML", src: "https://img.icons8.com/ios/50/ffffff/html-5--v1.png" },
  { name: "Tailwind", src: "https://img.icons8.com/?size=100&id=qOFWMoaAQIdR&format=png&color=FFFFFF" },
  { name: "Laravel", src: "https://img.icons8.com/ios/50/ffffff/laravel.png" },
  { name: "MySql", src: "https://img.icons8.com/?size=100&id=39855&format=png&color=FFFFFF" },
];

const tecnologiesApiSkeleton = [
  { name: "PHP", src: "https://img.icons8.com/?size=100&id=39852&format=png&color=FFFFFF" },
  { name: "MySql", src: "https://img.icons8.com/?size=100&id=39855&format=png&color=FFFFFF" },
];
//////
const allProjects = [
  {
    image: inicioDistribuitor,
    name: "La Viejita",
    text: "Distribuidora de alimentos con carrito y estadísticas.",
    href: "/proyecto-destribuidora",
    technologies: tecnologiesDistributor,
  },
  {
    image: inicioWorkshop,
    name: "A&M Service",
    text: "Gestión automotriz con turnos y seguimiento de vehículos.",
    href: "/proyecto-taller",
    technologies: tecnologiesWorkshop,
  },
  {
    image: inicioSimsDiary,
    name: "Recreación web oficial de los Sims",
    text: "Publicar y leer historias, puntuación, favoritos.",
    href: "/proyecto-diario-sims",
    technologies: tecnologiesSimsDiary,
  },
  {
    image: apiRutas,
    name: "Esqueleto Api",
    text: "Estructura para realizar api rest's con php",
    href: "/proyecto-esqueleto-api",
    technologies: tecnologiesApiSkeleton,
  },

];
</script>

<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <LayoutView />
    <section id="todos-proyectos" class="py-20">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-5xl font-extrabold text-teal-400 mb-4">Todos los Proyectos</h2>
        <p class="text-xl text-gray-300 leading-relaxed mb-12">
          Aquí puedes explorar todos los programas y proyectos que he desarrollado, mostrando
          mi pasión por crear soluciones innovadoras y eficientes.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <ProyectPreView
            v-for="(project, index) in allProjects"
            :key="index"
            :image="project.image"
            :name="project.name"
            :text="project.text"
            :href="project.href"
            :technologies="project.technologies"
          />
        </div>
      </div>
    </section>
  </div>
</template>
