<script setup>
import { ref } from "vue";

const props = defineProps({
    data: Array,
});
// Estado reactivo
const currentIndex = ref(0);

// Métodos
const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % props.data.length;
};

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + props.data.length) % props.data.length;
};
</script>

<template>
  <div class="max-w-5xl mx-auto">
    <h4 class="text-2xl text-center font-bold text-teal-400 mb-6">{{ props.data[currentIndex].alt  }}</h4>
    <!-- Contenedor de Carrusel -->
    <div class="relative">
      <div class="overflow-hidden rounded-lg shadow-lg">
        <!-- Lista de imágenes -->
        <div
          class="flex transition-transform duration-500"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            v-for="(image, index) in props.data"
            :key="index"
            class="min-w-full h-96 flex items-center justify-center bg-gray-800"
          >
            <img :src="image.src" :alt="image.alt" class="max-h-full max-w-full" />
          </div>
        </div>
      </div>

      <!-- Botones de navegación -->
      <button
        @click="prevImage"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-teal-500 text-gray-900 rounded-full p-3 hover:bg-teal-400 transition"
      >
      <img class=" w-4 h-4" src="https://img.icons8.com/?size=100&id=98961&format=png&color=1A1A1A" alt="arraw">
      </button>
      <button
        @click="nextImage"
        class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-teal-500 text-gray-900 rounded-full p-3 hover:bg-teal-400 transition"
      >
        <img class=" w-4 h-4" src="https://img.icons8.com/?size=100&id=99266&format=png&color=1A1A1A" alt="arraw">
      </button>
    </div>

    <!-- Descripción de la imagen -->
    <div class="mt-6 mx-3 text-center">
      <p class="text-lg text-gray-300">{{ props.data[currentIndex].description }}</p>
    </div>
  </div>
</template>
