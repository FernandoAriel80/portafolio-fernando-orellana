<script setup>
import LayoutProyects from "../layout/LayoutProyects.vue";
import CarouselView from "../components/CarouselView.vue";
import inicioImage from "@/assets/images/sims-page/inicio.png";

const DiaryCustomerData = [
  {
    src: inicioImage,
    alt: "Vista pantalla inicial",
    description: "En la vista inicial, tenemos la bienvenida a la pagina, también se puede acceder a ver todos los días, pero si queremos entrar al perfil tenemos que estar registrados y logiados. En la seccion izquierda estan las opciones para ingresar o registrarse como usuario.",
  },
  {
    src: inicioImage,
    alt: "Vista pantalla inicial",
    description: "En la vista inicial, tenemos la bienvenida a la pagina, también se puede acceder a ver todos los días, pero si queremos entrar al perfil tenemos que estar registrados y logiados. En la seccion izquierda estan las opciones para ingresar o registrarse como usuario.",
  },
];
</script>
<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <LayoutProyects />
    <section class="py-20">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold text-teal-400 mb-6">Diario los Fans Sims</h2>
        <div class="text-lg text-gray-300 leading-relaxed mb-10">
          <p>
            Proyecto personal que trata de recrear la sección de historias en el sitio
            oficial de Los Sims donde los usuarios podían registrarse para crear y leer
            historias, agregarlas a favoritos para seguir sus actualizaciones y
            puntuarlas.
          </p>
          <p>Desarrollado en php, css para los estilos y MySql para la base de datos.</p>
          <div class="mt-5 border-t">
            <p>
              Si quieres ver el repositorio del proyecto:
              <a
                class="hover:text-teal-400"
                href="https://github.com/FernandoAriel80/Pagina-Fans-Sims"
                >Acá</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="max-w-5xl m-7 mx-auto">
        <h1 class="text-3xl font-bold text-teal-400">Vista del usuario</h1>
        <CarouselView :data="DiaryCustomerData" />
      </div>
    </section>
  </div>
</template>
