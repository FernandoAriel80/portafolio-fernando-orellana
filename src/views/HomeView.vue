<script setup>
import LayoutView from "@/layout/LayoutView.vue";
import HabilidadView from "@/components/HabilidadView..vue";
import WorkshopPreView from "./preViews/WorkshopPreView.vue";
import DistribuitorPreView from "./preViews/DistribuitorPreView.vue";
import FansSimsPreView from "./preViews/FansSimsPreView.vue";


</script>

<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <LayoutView />
    <section class="py-20 text-center">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-5xl font-extrabold text-teal-400 mb-4">¡Hola! Soy Fernando</h2>
        <p class="text-xl text-gray-300 leading-relaxed m-8">
          Soy programador web apasionado por el backend, me gusta la lógica detrás de las
          aplicaciones web y la optimización de procesos. Mi enfoque está en construir
          sistemas eficientes, escalables y seguros, mi objetivo es seguir creciendo como
          desarrollador full-stack.
        </p>
        <a
          href="#proyectos"
          class="text-teal-400 hover:text-teal-300 text-lg font-medium transition-colors"
          >Ver Proyectos</a
        >
      </div>
    </section>

    <section id="habilidades" class="py-16 bg-gray-800">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-teal-400 mb-12">Habilidades</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12">
          <HabilidadView
            name="HTML"
            src="https://img.icons8.com/ios/50/ffffff/html-5--v1.png"
          />

          <HabilidadView name="CSS" src="https://img.icons8.com/ios/50/ffffff/css3.png" />

          <HabilidadView
            name="JavaScript"
            src="https://img.icons8.com/ios/50/ffffff/javascript.png"
          />

          <HabilidadView
            name="PHP"
            src="https://img.icons8.com/?size=100&id=39852&format=png&color=FFFFFF"
          />

          <HabilidadView
            name="SQL"
            src="https://img.icons8.com/?size=100&id=77694&format=png&color=FFFFFF"
          />

          <HabilidadView
            name="MySQL"
            src="https://img.icons8.com/?size=100&id=39855&format=png&color=FFFFFF"
          />

          <HabilidadView
            name="Tailwind"
            src="https://img.icons8.com/?size=100&id=qOFWMoaAQIdR&format=png&color=FFFFFF"
          />

          <HabilidadView
            name="Vue.js"
            src="https://img.icons8.com/ios/50/ffffff/vuejs.png"
          />

          <HabilidadView
            name="Laravel"
            src="https://img.icons8.com/ios/50/ffffff/laravel.png"
          />

          <HabilidadView name="Git" src="https://img.icons8.com/ios/50/ffffff/git.png" />

          <HabilidadView
            name="Visual Studio Code"
            src="https://img.icons8.com/?size=100&id=121601&format=png&color=FFFFFF"
          />
        </div>
      </div>
    </section>

    <section id="proyectos" class="py-20">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-teal-400 mb-12">Proyectos Destacados</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <!-- proyectos -->
          <DistribuitorPreView/>
          
          <WorkshopPreView/>
          <FansSimsPreView/>         
        </div>

        <div class="mt-12">
          <router-link
            to="/proyectos"
            class="inline-block px-6 py-3 text-lg font-medium text-teal-400 border border-teal-400 rounded-lg hover:bg-teal-400 hover:text-gray-900 transition-colors"
          >
            Ver todos los proyectos</router-link
          >
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.fas {
  font-size: 1.25rem;
}
</style>
