<script setup>
import { ref } from "vue";
import LayoutView from "@/layout/LayoutView.vue";
import HabilidadView from "@/components/HabilidadView..vue";
import ProyectoView from "@/components/ProyectoView.vue";
import IconoView from "@/components/IconoView.vue";
import FooterView from "@/footer/FooterView.vue";

// Estado para controlar el aviso de copiado
const copied = ref(false);

// Función para copiar el correo al portapapeles
const copyToClipboard = () => {
  const correo = document.getElementById("correo").textContent;

  navigator.clipboard
    .writeText(correo)
    .then(() => {
      // Mostrar el aviso cuando el correo es copiado
      copied.value = true;

      // Desaparecer el aviso después de 2 segundos
      setTimeout(() => {
        copied.value = false;
      }, 2000);
    })
    .catch((error) => {
      console.error("Error al copiar el correo: ", error);
    });
};
</script>

<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <!-- Cabecera -->
    <LayoutView/>
    <!-- Sección Principal -->
    <section class="py-20 text-center">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-5xl font-extrabold text-teal-400 mb-4">¡Hola! Soy Fernando</h2>
        <p class="text-xl text-gray-300 leading-relaxed m-8">
          Soy programador web apasionado por el backend, me gusta la lógica detrás de las
          aplicaciones web y la optimización de procesos. Mi enfoque está en construir
          sistemas eficientes, escalables y seguros, mi objetivo es seguir creciendo como
          desarrollador full-stack.
        </p>
        <a
          href="#proyectos"
          class="text-teal-400 hover:text-teal-300 text-lg font-medium transition-colors"
          >Ver Proyectos</a
        >
      </div>
    </section>

    <!-- Sección de Habilidades -->
    <section id="habilidades" class="py-16 bg-gray-800">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-teal-400 mb-12">Habilidades</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12">

          <HabilidadView name="HTML" src="https://img.icons8.com/ios/50/ffffff/html-5--v1.png"/>

          <HabilidadView name="CSS" src="https://img.icons8.com/ios/50/ffffff/css3.png"/>

          <HabilidadView name="JavaScript" src="https://img.icons8.com/ios/50/ffffff/javascript.png"/>
          
          <HabilidadView name="PHP" src="https://img.icons8.com/ios/50/ffffff/php.png"/>
         
          <HabilidadView name="MySQL" src="https://img.icons8.com/ios/50/ffffff/mysql.png"/>
        
          <HabilidadView name="Vue.js" src="https://img.icons8.com/ios/50/ffffff/vuejs.png"/>
          
          <HabilidadView name="Laravel" src="https://img.icons8.com/ios/50/ffffff/laravel.png" />

          <HabilidadView name="Git" src="https://img.icons8.com/ios/50/ffffff/git.png" />
          
        </div>
      </div>
    </section>

    <!-- Sección de Proyectos -->

    <section id="proyectos" class="py-20">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-teal-400 mb-12">Proyectos Destacados</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
       
          <!-- Repite más bloques de proyectos como sea necesario -->
          <ProyectoView image="" name="Proyecto 1" text="proyecto 1 por asdbajhsd sahdbahsbdasd asd" href=""/>
        </div>

        <!-- Botón para Ver Todos los Proyectos -->
        <div class="mt-12">
          <a
            href="#todos-proyectos"
            class="inline-block px-6 py-3 text-lg font-medium text-teal-400 border border-teal-400 rounded-lg hover:bg-teal-400 hover:text-gray-900 transition-colors"
          >
            Ver todos los proyectos
          </a>
        </div>
      </div>
    </section>

    <!-- Sección de Contacto -->
    <section id="contacto" class="py-16 bg-gray-800">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-teal-400 mb-8">Contacto</h2>
        <p class="text-lg text-gray-300 mb-8">
          Si tienes alguna consulta o deseas trabajar conmigo, no dudes en contactarme.
        </p>
        <div class="flex justify-center items-center space-x-8 mb-8">
          <!-- Icono GitHub -->
          <IconoView name="GitHub" src="https://img.icons8.com/ios-filled/50/ffffff/github.png" href="https://github.com/FernandoAriel80"/>

          <!-- Icono LinkedIn -->
          <IconoView name="LinkedIn" src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" href="https://www.linkedin.com/in/fernando-ariel-orellana-601ba7300/"/>
          
          <!-- Icono Descargar CV -->
          <a
            href="../../public/CV Orellana Fernando Ariel.pdf"
            download="CV Orellana Fernando Ariel.pdf"
            class="relative text-gray-300 hover:text-teal-400 transition-colors group"
          >
            <img
              src="https://img.icons8.com/?size=100&id=39372&format=png&color=FFFFFF"
              alt="Descargar CV"
              class="w-12 h-12"
            />
            <!-- Tooltip -->
            <span
              class="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-sm bg-teal-500 text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Curriculum
            </span>
          </a>
        </div>
        <!-- Correo en texto -->

        <p class="text-lg text-gray-300">
          Correo:
          <span class="font-medium text-teal-400" id="correo"
            >fernando_ariel1995@hotmail.com</span
          >
          <!-- Icono de copiar -->
          <button @click="copyToClipboard" class="ml-2 text-teal-400 hover:text-teal-600">
            <i class="fas fa-copy text-white w-6 h-6"></i>
            <!-- Ícono de copiar -->
          </button>
        </p>

        <!-- Aviso de éxito al copiar -->
        <div
          v-if="copied"
          class="fixed bottom-4 right-4 bg-teal-500 text-white p-2 rounded shadow"
        >
          ¡Correo copiado al portapapeles!
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterView/>
  </div>
</template>

<style scoped>
/* Asegúrate de que el ícono sea visible y esté centrado */
.fas {
  font-size: 1.25rem;
}
</style>
