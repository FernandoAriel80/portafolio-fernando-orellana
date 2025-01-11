<script setup>
import { ref } from "vue";
// Estado para controlar el aviso de copiado y el estado del menú
const isMenuOpen = ref(false);

// Función para manejar el menú
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
<template>
  <header class="py-6 px-6 sm:px-8 border-b border-gray-700">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <h1 class="text-3xl sm:text-4xl font-bold text-teal-400 tracking-wider">
        Fernando Ariel Orellana
      </h1>

      <!-- Navegación para pantallas grandes -->
      <nav class="hidden sm:flex space-x-8 text-lg">
        <a href="#proyectos" class="hover:text-teal-300 transition-colors">Proyectos</a>
        <a href="#habilidades" class="hover:text-teal-300 transition-colors"
          >Habilidades</a
        >
        <a href="#contacto" class="hover:text-teal-300 transition-colors">Contacto</a>
      </nav>

      <!-- Botón hamburguesa para pantallas pequeñas -->
      <div class="sm:hidden">
        <button @click="toggleMenu" class="text-teal-400 hover:text-teal-300">
          <svg
            class="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Menú desplegable para pantallas pequeñas -->
    <nav
      v-if="isMenuOpen"
      class="sm:hidden mt-4 flex flex-col items-start space-y-4 text-lg px-6"
    >
      <a href="#proyectos" class="hover:text-teal-300 transition-colors">Proyectos</a>
      <a href="#habilidades" class="hover:text-teal-300 transition-colors">Habilidades</a>
      <a href="#contacto" class="hover:text-teal-300 transition-colors">Contacto</a>
    </nav>
  </header>
</template>
