<script setup>
    const props = defineProps({
        name:String,
        src:String,
        href:String
    });
</script>
<template>
  <a
    :href="props.href"
    target="_blank"
    class="relative text-gray-300 hover:text-teal-400 transition-colors group"
  >
    <img
      :src="props.src"
      :alt="props.name"
      class="w-12 h-12"
    />
    <!-- Tooltip -->
    <span
      class="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-sm bg-teal-500 text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      {{ props.name }}
    </span>
  </a>
</template>
