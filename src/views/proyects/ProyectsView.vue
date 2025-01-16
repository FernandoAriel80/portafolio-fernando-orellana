<template>
    <div class="bg-gray-900 text-white min-h-screen">
      <!-- Cabecera -->
      <LayoutView/>
  
      <!-- Lista de Proyectos -->
      <section class="py-20">
        <div class="max-w-7xl mx-auto text-center">
          <h1 class="text-4xl font-bold text-teal-400 mb-12">Todos los Proyectos</h1>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
           <!--  <ProyectoView
              v-for="(project, index) in projects"
              :key="index"
              :image="project.image"
              :name="project.name"
              :text="project.description"
              :href="`/proyecto/${project.id}`"
            /> -->
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <FooterView/>
    </div>
  </template>
  