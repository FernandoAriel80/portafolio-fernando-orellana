<script setup>
import IconoView from "@/components/IconoView.vue";
import { ref } from "vue";

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
  <!-- Sección de Contacto -->
  <section id="contacto" class="py-16 bg-gray-800">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-teal-400 mb-8">Contacto</h2>
      <p class="text-lg text-gray-300 mb-8">
        Si tienes alguna consulta o deseas trabajar conmigo, no dudes en contactarme.
      </p>
      <div class="flex justify-center items-center space-x-8 mb-8">
        <!-- Icono GitHub -->
        <IconoView
          name="GitHub"
          src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
          href="https://github.com/FernandoAriel80"
        />

        <!-- Icono LinkedIn -->
        <IconoView
          name="LinkedIn"
          src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
          href="https://www.linkedin.com/in/fernando-ariel-orellana-601ba7300/"
        />

        <!-- Icono Descargar CV -->
        <a
          href="/CV Orellana Fernando Ariel.pdf"
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
          >orellana.dev@gmail.com</span
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
  <a
    href="#top"
    class="fixed bottom-20 right-8 bg-teal-500 hover:bg-teal-400 text-black p-3  rounded-full shadow-lg"
  >
  <img class=" w-4 h-4" src="https://img.icons8.com/?size=100&id=100000&format=png&color=1A1A1A" alt="arraw">
  </a>
  <footer class="bg-gray-800 py-8">
    <div class="max-w-7xl mx-auto text-center text-gray-400">
      <p>&copy; 2025 Fernando Orellana. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>
