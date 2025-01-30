<script setup>
import ProyectPreView from "@/components/ProyectPreView.vue";
import inicioSimsDiary from "@/assets/images/sims-page/inicio.png";

const tecnologiesSimsDiary = [
  {
    name: "HTML",
    src: "https://img.icons8.com/ios/50/ffffff/html-5--v1.png",
  },
  {
    name: "CSS",
    src: "https://img.icons8.com/ios/50/ffffff/css3.png",
  },
  {
    name: "PHP",
    src: "https://img.icons8.com/?size=100&id=39852&format=png&color=FFFFFF",
  },
  {
    name: "MySql",
    src: "https://img.icons8.com/?size=100&id=39855&format=png&color=FFFFFF",
  },
];
</script>

<template>
  <ProyectPreView
    :image="inicioSimsDiary"
    name="Recreación web oficial de Los Sims"
    text="Publicar y leer historias, puntuación, favoritos."
    href="/proyecto-diario-sims"
    :technologies="tecnologiesSimsDiary"
  />
</template>
