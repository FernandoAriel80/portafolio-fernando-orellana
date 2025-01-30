<script setup>
import ProyectPreView from "@/components/ProyectPreView.vue";
import apiRutas from "@/assets/images/esqueleto-api/api-rutas.png";


const tecnologiesApiSkeleton = [
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
      :image="apiRutas"
      name="Esqueleto Api"
      text="Estructura para realizar api rest's con php."
      href="/proyecto-esqueleto-api"
      :technologies="tecnologiesApiSkeleton"
    />
</template>