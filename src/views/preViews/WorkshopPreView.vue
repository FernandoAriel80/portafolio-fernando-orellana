<script setup>
import inicioWorkshop from "@/assets/images/taller/indice.png";
import ProyectPreView from "@/components/ProyectPreView.vue";


const tecnologiesWorkshop = [
  {
    name: "HTML",
    src: "https://img.icons8.com/ios/50/ffffff/html-5--v1.png",
  },
  {
    name: "Tailwind",
    src: "https://img.icons8.com/?size=100&id=qOFWMoaAQIdR&format=png&color=FFFFFF",
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
    :image="inicioWorkshop"
    name="A&M Service"
    text="Gestión automotriz con turnos y seguimiento de vehículos."
    href="/proyecto-taller"
    :technologies="tecnologiesWorkshop"
  />
</template>
