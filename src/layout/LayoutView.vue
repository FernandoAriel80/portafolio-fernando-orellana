<template>
    <div class="bg-gray-900 text-white min-h-screen">
      <!-- Cabecera -->
      <header class="py-6 px-8 border-b border-gray-700">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <h1 class="text-3xl font-bold">Tu Nombre</h1>
          <nav class="space-x-6">
            <a href="#proyectos" class="hover:text-indigo-400">Proyectos</a>
            <a href="#habilidades" class="hover:text-indigo-400">Habilidades</a>
            <a href="#contacto" class="hover:text-indigo-400">Contacto</a>
          </nav>
        </div>
      </header>
  
      <!-- Sección Principal -->
      <section class="bg-gray-800 py-16">
        <div class="max-w-7xl mx-auto text-center px-4">
          <h2 class="text-4xl font-semibold mb-4">¡Hola! Soy [Tu Nombre]</h2>
          <p class="text-xl mb-8">
            Soy un desarrollador web con experiencia en tecnologías como Vue.js, PHP, MySQL
            y más. Aquí puedes ver algunos de mis proyectos y habilidades.
          </p>
  
          <!-- Habilidades -->
          <div
            id="habilidades"
            class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            <div class="text-center">
              <img
                src="https://img.icons8.com/ios/50/ffffff/vuejs.png"
                alt="Vue.js"
                class="mx-auto mb-4 w-12 h-12"
              />
              <p>Vue.js</p>
            </div>
            <div class="text-center">
              <img
                src="https://img.icons8.com/ios/50/ffffff/php.png"
                alt="PHP"
                class="mx-auto mb-4 w-12 h-12"
              />
              <p>PHP</p>
            </div>
            <div class="text-center">
              <img
                src="https://img.icons8.com/ios/50/ffffff/mysql.png"
                alt="MySQL"
                class="mx-auto mb-4 w-12 h-12"
              />
              <p>MySQL</p>
            </div>
            <div class="text-center">
              <img
                src="https://img.icons8.com/ios/50/ffffff/javascript.png"
                alt="JavaScript"
                class="mx-auto mb-4 w-12 h-12"
              />
              <p>JavaScript</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Proyectos -->
      <section id="proyectos" class="py-16">
        <div class="max-w-7xl mx-auto text-center px-4">
          <h2 class="text-3xl font-semibold mb-8">Proyectos Destacados</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <!-- Proyecto 1 -->
            <div
              class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              <h3 class="text-2xl font-semibold mb-4">Proyecto 1</h3>
              <p class="text-lg mb-4">
                Descripción breve del proyecto, destacando tecnologías y objetivos.
              </p>
              <a href="#" class="text-indigo-400 hover:underline">Ver más</a>
            </div>
            <!-- Proyecto 2 -->
            <div
              class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              <h3 class="text-2xl font-semibold mb-4">Proyecto 2</h3>
              <p class="text-lg mb-4">
                Descripción breve del proyecto, destacando tecnologías y objetivos.
              </p>
              <a href="#" class="text-indigo-400 hover:underline">Ver más</a>
            </div>
            <!-- Proyecto 3 -->
            <div
              class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              <h3 class="text-2xl font-semibold mb-4">Proyecto 3</h3>
              <p class="text-lg mb-4">
                Descripción breve del proyecto, destacando tecnologías y objetivos.
              </p>
              <a href="#" class="text-indigo-400 hover:underline">Ver más</a>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <footer id="contacto" class="bg-gray-800 py-8">
        <div class="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Tu Nombre - Todos los derechos reservados.</p>
          <p>
            <a href="https://github.com/tunombre" class="hover:text-indigo-400">GitHub</a> |
            <a href="mailto:tunombre@example.com" class="hover:text-indigo-400">Correo</a>
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
  /* Aquí puedes agregar algunos estilos específicos si lo deseas */
  </style>
  