<script setup>
import FooterView from "@/footer/FooterView.vue";
</script>

<template>
  <div class="bg-gradient-to-r bg-slate-900 min-h-screen">
    <router-view></router-view>
    <FooterView/>
  </div>
</template>
