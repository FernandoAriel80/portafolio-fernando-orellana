<script setup>
    const props = defineProps({
        image:String,
        name:String,
        text:String,
        href:String
    });
</script>
<template>
  <div
    class="relative group m-5 bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
  >
    <!-- Imagen del proyecto -->
    <img
      :src="props.image"
      alt="Vista previa del proyecto"
      class="w-full h-56 object-cover"
    />
    <!-- Contenido superpuesto -->
    <div
      class="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity"
    >
      <h3 class="text-2xl font-bold text-teal-300 mb-2">{{ props.name }}</h3>
      <p class="text-gray-300 text-center px-4">
       {{ props.text }}
      </p>
      <a :href="props.href" class="mt-4 text-teal-400 hover:text-teal-300 font-medium"> Ver más </a>
    </div>
  </div>
</template>
