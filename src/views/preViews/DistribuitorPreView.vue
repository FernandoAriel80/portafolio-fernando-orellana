<script setup>
import ProyectPreView from "@/components/ProyectPreView.vue";
import inicioDistribuitor from "@/assets/images/distribuidora/inicio.png";

const tecnologiesDistributor = [
  {
    name: "HTML",
    src: "https://img.icons8.com/ios/50/ffffff/html-5--v1.png",
  },
  {
    name: "Tailwind",
    src: "https://img.icons8.com/?size=100&id=qOFWMoaAQIdR&format=png&color=FFFFFF",
  },
  {
    name: "Vue.js",
    src: "https://img.icons8.com/ios/50/ffffff/vuejs.png",
  },
  {
    name: "Laravel",
    src: "https://img.icons8.com/ios/50/ffffff/laravel.png",
  },
  {
    name: "MySql",
    src: "https://img.icons8.com/?size=100&id=39855&format=png&color=FFFFFF",
  },
];
</script>
<template>
  <ProyectPreView
    :image="inicioDistribuitor"
    name="La Viejita"
    text="Distribuidora de alimentos con carrito y estadísticas."
    href="/proyecto-destribuidora"
    :technologies="tecnologiesDistributor"
  />
</template>
