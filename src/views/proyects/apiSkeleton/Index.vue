<script setup>
const workshopCustomerData = [
  {
    src: inicioImage,
    alt: "Vista pantalla inicial",
    description:
      "En la vista inicial, usando scroll anclado, para que pueda acceder a secciones de una misma pestaña para un rápido manejo ej: servicios y reservas, también una flecha para volver al principio de la pestaña.",
  },
];
</script>
<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <LayoutProyects />
    <section class="py-20">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold text-teal-400 mb-6">A&M Service</h2>
        <div class="text-lg text-gray-300 leading-relaxed mb-10 mx-3">
          <p>
            Proyecto personal de una plataforma de Gestión Automotriz. Muestra los
            servicios que realiza el taller, con manejo de usuarios, con registro, perfil
            y lado administrativo para manejo de reservas o citas (la administración aún
            no implementada), el usuario puede reservar una cita para revisión del
            vehículo y tener seguimiento del mismo, por estados, notificaciones personales
            y por correo (el seguimiento aún no está implementado).
          </p>
          <p>
            El desarrollo tiene un enfoque general, o sea que sirva para distintos
            talleres con los servicios que implemente, ya sea de autos o motos. Está
            desarrollada en Laravel implementando Breeze para manejo de inicio de sesión,
            registro y perfil, Tailwind para los estilos y MySql para la base de datos. El
            proyecto aún está en desarrollo.
          </p>
          <div class="mt-5 border-t">
            <p>
              Si quieres ver el repositorio del proyecto:
              <a
                class="hover:text-teal-400"
                href="https://github.com/FernandoAriel80/proyecto-taller"
                >Acá</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="max-w-5xl m-7 mx-auto">
        <h1 class="text-3xl font-bold text-teal-400">Vista del usuario</h1>
        <CarouselView :data="workshopCustomerData" />
      </div>
    </section>
  </div>
</template>
