<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <!-- Cabecera -->
    <header class="py-8 px-8 border-b border-gray-700">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <h1 class="text-4xl font-bold text-teal-400 tracking-wider">Fernando Orellana</h1>
        <nav class="space-x-8 text-lg">
          <a href="#proyectos" class="hover:text-teal-300 transition-colors">Proyectos</a>
          <a href="#habilidades" class="hover:text-teal-300 transition-colors"
            >Habilidades</a
          >
          <a href="#contacto" class="hover:text-teal-300 transition-colors">Contacto</a>
        </nav>
      </div>
    </header>

    <!-- Sección Principal -->
    <section class="py-20 text-center">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-5xl font-extrabold text-teal-400 mb-4">¡Hola! Soy Fer</h2>
        <p class="text-xl text-gray-300 leading-relaxed mb-8">
          Programador web graduado en la Tecnicatura Universitaria en Programación. Cuento
          con experiencia en proyectos académicos y propios, mi objetivo es seguir creciendo 
          como desarrollador full-stack, y estoy buscando nuevos desafíos y oportunidades para 
          colaborar en proyectos innovadores.
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
          <div class="text-center">
            <img
              src="https://img.icons8.com/ios/50/ffffff/vuejs.png"
              alt="Vue.js"
              class="mx-auto mb-4 w-16 h-16"
            />
            <p class="text-lg text-gray-300">Vue.js</p>
          </div>
          <div class="text-center">
            <img
              src="https://img.icons8.com/ios/50/ffffff/php.png"
              alt="PHP"
              class="mx-auto mb-4 w-16 h-16"
            />
            <p class="text-lg text-gray-300">PHP</p>
          </div>
          <div class="text-center">
            <img
              src="https://img.icons8.com/ios/50/ffffff/mysql.png"
              alt="MySQL"
              class="mx-auto mb-4 w-16 h-16"
            />
            <p class="text-lg text-gray-300">MySQL</p>
          </div>
          <div class="text-center">
            <img
              src="https://img.icons8.com/ios/50/ffffff/laravel.png"
              alt="Laravel"
              class="mx-auto mb-4 w-16 h-16"
            />
            <p class="text-lg text-gray-300">Laravel</p>
          </div>
          <div class="text-center">
            <img
              src="https://img.icons8.com/ios/50/ffffff/javascript.png"
              alt="JavaScript"
              class="mx-auto mb-4 w-16 h-16"
            />
            <p class="text-lg text-gray-300">JavaScript</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de Proyectos -->
    <section id="proyectos" class="py-20">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-teal-400 mb-12">Proyectos Destacados</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <!-- Proyecto 1 -->
          <div
            class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
          >
            <h3 class="text-2xl font-bold text-teal-300 mb-4">Proyecto 1</h3>
            <p class="text-gray-300 mb-4">
              Descripción breve del proyecto, destacando las tecnologías utilizadas.
            </p>
            <a href="#" class="text-teal-400 hover:text-teal-300">Ver más</a>
          </div>
          <!-- Proyecto 2 -->
          <div
            class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
          >
            <h3 class="text-2xl font-bold text-teal-300 mb-4">Proyecto 2</h3>
            <p class="text-gray-300 mb-4">
              Descripción breve del proyecto, destacando las tecnologías utilizadas.
            </p>
            <a href="#" class="text-teal-400 hover:text-teal-300">Ver más</a>
          </div>
          <!-- Proyecto 3 -->
          <div
            class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
          >
            <h3 class="text-2xl font-bold text-teal-300 mb-4">Proyecto 3</h3>
            <p class="text-gray-300 mb-4">
              Descripción breve del proyecto, destacando las tecnologías utilizadas.
            </p>
            <a href="#" class="text-teal-400 hover:text-teal-300">Ver más</a>
          </div>
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
        <a
          href="mailto:tuemail@example.com"
          class="text-teal-400 hover:text-teal-300 text-lg font-medium transition-colors"
          >Enviar un correo</a
        >
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 py-8">
      <div class="max-w-7xl mx-auto text-center text-gray-400">
        <p>&copy; 2025 Tu Nombre. Todos los derechos reservados.</p>
        <p>
          <a href="https://github.com/tunombre" class="hover:text-teal-400">GitHub</a> |
          <a href="mailto:tuemail@example.com" class="hover:text-teal-400">Correo</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
/* Agregar aquí más personalización si es necesario */
</style>
