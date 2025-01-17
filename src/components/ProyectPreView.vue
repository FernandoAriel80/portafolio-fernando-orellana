<script setup>
const props = defineProps({
  image: String,
  name: String,
  text: String,
  href: String,
  technologies: Array,
});
</script>
<template>
  <div
    class="relative group m-5 bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
  >
    <img
      :src="props.image"
      alt="Vista previa del proyecto"
      class="w-full h-56 object-cover"
    />

    <div
      class="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity"
    >
      <h3 class="text-2xl font-bold text-teal-300 mb-2">{{ props.name }}</h3>
      <p class="text-gray-300 text-center px-4">
        {{ props.text }}
      </p>
      <router-link class="mt-4 text-teal-400 hover:text-teal-300 font-medium" :to="props.href" >Ver más</router-link>
    </div>
    <div class="flex justify-between mx-4">
      <div v-for="(technology, index) in props.technologies" :key="index">
        <img :src="technology.src" :alt="technology.name" class="m-1 w-10 h-10" />
      </div>
    </div>
  </div>
</template>
