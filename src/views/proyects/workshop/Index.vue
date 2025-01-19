<script setup>
import LayoutProyects from "../layout/LayoutProyects.vue";
import CarouselView from "../components/CarouselView.vue";
import inicioImage from "@/assets/images/taller/indice.png";
import inicioImage1 from "@/assets/images/taller/indice1.png";
import inicioImage2 from "@/assets/images/taller/indice2.png";
import inicioImage3 from "@/assets/images/taller/indice3.png";
import inicioImage4 from "@/assets/images/taller/indice4.png";
import cargaVehiculo from "@/assets/images/taller/carga-vehiculo.png";
import cargaVehiculo1 from "@/assets/images/taller/carga-vehiculo1.png";
import cargaReserva from "@/assets/images/taller/carga-reserva.png";
import cargaReserva1 from "@/assets/images/taller/carga-reserva1.png";

const workshopCustomerData = [
  {
    src: inicioImage,
    alt: "Vista pantalla inicial",
    description:
      "En la vista inicial, usando scroll anclado, para que pueda acceder a secciones de una misma pestaña para un rápido manejo ej: servicios y reservas, también una flecha para volver al principio de la pestaña.",
  },
  {
    src: inicioImage1,
    alt: "Vista pantalla inicial",
    description: "Descripción del taller.",
  },
  {
    src: inicioImage2,
    alt: "Vista pantalla inicial",
    description: "Sección de los servicios que realiza el taller.",
  },
  {
    src: inicioImage3,
    alt: "Vista pantalla inicial",
    description:
      "Sección de reservar una cita, para acceder a esta parte tenes que estar registrado.",
  },
  {
    src: inicioImage4,
    alt: "Vista pantalla inicial",
    description: "Vista de usuario con la sesión iniciada.",
  },
  {
    src: cargaVehiculo,
    alt: "Vista reserva/datos vehiculo",
    description:
      "Para reservar una cita, el usuario tiene que llenar los datos de su vehículo para que lo cargue al sistema, si anteriormente cargo un vehículo, el usuario no tiene que volver a hacerlo y puede pasar al siguiente paso.",
  },
  {
    src: cargaVehiculo1,
    alt: "Vista reserva/datos vehiculo",
    description:
      "El usuario puede agregar otro vehículo volviendo a llenar el formulario con los nuevos datos, podrá seleccionar los vehículos anteriormente cargados.",
  },
  {
    src: cargaReserva,
    alt: "Vista reserva/datos reserva",
    description:
      "Una vez seleccionado un vehículo, el usuario tiene que elegir el día de la cita y dar una breve descripción del motivo por el cual la solicita.",
  },
  {
    src: cargaReserva1,
    alt: "Vista reserva/datos reserva",
    description:
      "El usuario solo podrá elegir la fecha y el horario disponible, los horarios de las citas ya reservadas no se mostrar como opción a elegir.",
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
