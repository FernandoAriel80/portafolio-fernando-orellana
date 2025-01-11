<script setup>
    const props = defineProps({
        name: String,
        src:String
    });
</script>
<template>
  <div class="text-center">
    <img
      :src="props.src"
      :alt="props.name"
      class="mx-auto mb-4 w-16 h-16"
    />
    <p class="text-lg text-gray-300">{{ props.name }}</p>
  </div>
</template>
