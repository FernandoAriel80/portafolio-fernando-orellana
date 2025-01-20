<script setup>
import LayoutView from "./layout/LayoutProyects.vue";
import DistribuitorPreView from "../preViews/DistribuitorPreView.vue";
import WorkshopPreView from "../preViews/WorkshopPreView.vue";
import FansSimsPreView from "../preViews/FansSimsPreView.vue";
import ApiSkeletonPreView from "../preViews/ApiSkeletonPreView.vue";

</script>

<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <LayoutView />
    <section id="todos-proyectos" class="py-20">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-5xl font-extrabold text-teal-400 mb-4">Todos los Proyectos</h2>
        <p class="text-xl text-gray-300 leading-relaxed mb-12">
          Aquí puedes explorar todos los programas y proyectos que he desarrollado.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <!-- proyectos -->
          <DistribuitorPreView />
          <WorkshopPreView />
          <FansSimsPreView />
          <ApiSkeletonPreView/>

        </div>
      </div>
    </section>
  </div>
</template>
