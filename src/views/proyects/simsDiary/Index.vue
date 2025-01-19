<script setup>
import LayoutProyects from "../layout/LayoutProyects.vue";
import CarouselView from "../components/CarouselView.vue";
import inicioImage from "@/assets/images/sims-page/inicio.png";
import todosDiarios from "@/assets/images/sims-page/todos_los_diarios.png";
import vistaDiarioA from "@/assets/images/sims-page/vista_diarioA.png";
import vistaDiarioB from "@/assets/images/sims-page/vista_diarioB.png";
import vistaDiarioC from "@/assets/images/sims-page/vista_diarioC.png";
import filtro from "@/assets/images/sims-page/filtro.png";
import perfil from "@/assets/images/sims-page/perfil.png";
import cargarDiario from "@/assets/images/sims-page/carga_diario.png";

const DiaryCustomerData = [
  {
    src: inicioImage,
    alt: "Vista pantalla inicial",
    description:
      "En la vista inicial, tenemos la bienvenida a la pagina, también se puede acceder a ver todos los días, pero si queremos entrar al perfil tenemos que estar registrados y logiados. En la seccion izquierda estan las opciones para ingresar o registrarse como usuario.",
  },
  {
    src: todosDiarios,
    alt: "Vista todos los diarios",
    description:
      "Se puede los diarios de todos los usuarios en orden de publicación o actualización, podes agregar tu historia favorita desde la estrella.",
  },
  {
    src: vistaDiarioA,
    alt: "Vista del diario usuario A",
    description:
      "En la vista del diario, el usuario que creo el diario, puede editar y eliminar el diario, también se puede agregar un capitulo, editar y eliminarlo.",
  },
  {
    src: vistaDiarioB,
    alt: "Vista del diario usuario B",
    description:
      "Cuando otro usuario ve el diario, calificarlo y agregarlo como favorito.",
  }, 
  {
    src: vistaDiarioC,
    alt: "Vista del diario usuario C",
    description:
      "Esta seria la vista de un diario con imagen.",
  },
  {
    src: filtro,
    alt: "Vista todos los diarios",
    description:
      "Los diarios se pueden filtrar, por genero, ordenar por fecha de actualización, creación y por puntos, por ascendente y descenderte, y por nombre por nombre.",
  },
  {
    src: perfil,
    alt: "Vista del perfil",
    description:
      "En el perfil el usuario puede ver sus diarios y los que agrego como favorito, también se puede crear un diario y aditar el perfil.",
  },
  {
    src: cargarDiario,
    alt: "Vista de carga de diario",
    description:
      "Para crear un diario, se tiene que cargar el titulo y una descripción de lo que se va a tratar el diario y también que agregar los géneros. Los diarios van creados con una primera entrada (ósea un capitulo), el capitulo tiene que tener un titulo y la historia del primer capitulo, se puede agregar una imagen o no. Antes de crear el diario puede dejarlo como visible o privado, si es privado los demás usuarios no pueden verlo.",
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
