<script setup>
import { ref } from "vue";
import LayoutProyects from "../layout/LayoutProyects.vue";
import CarouselView from "../components/CarouselView.vue";
import inicioImage from '@/assets/images/distribuidora/inicio.png';
import productosInicio from "@/assets/images/distribuidora/productos-inicio.png";
import inicioCategorias from "@/assets/images/distribuidora/inicio-categorias.png";
import vistaTodosLosProductos from "@/assets/images/distribuidora/vista-todos-los-productos.png";
import inicioBuscador from "@/assets/images/distribuidora/inicio-buscador.png";
import inicioMenu from "@/assets/images/distribuidora/inicio-menu.png";
import vistaCarrito from "@/assets/images/distribuidora/vista-carrito.png";
import vistaSelector from "@/assets/images/distribuidora/vista-selector.png";
import vistaPagoPresencial from "@/assets/images/distribuidora/pago-presencial.png";
import vistaPerfil from "@/assets/images/distribuidora/vista-perfil-datos.png";
import vistaPerfilPedidos from "@/assets/images/distribuidora/vista-perfil-pedidos.png";
import vistaPerfilActualizacion from "@/assets/images/distribuidora/vista-perfil-actualizacion.png"
import vistaPerfilActualizacion2 from "@/assets/images/distribuidora/vista-perfil-actualizacion2.png"

const DistributorCustomerData = [
  {
    src: inicioImage,
    alt: "Vista pantalla inicial",
    description:
      "Este es el inicio de la pagina, esta al acceso de todas las personas que entren y podrá acceder a la vista de todos los productos. La vista es de un usuario con la sesión iniciada, si el usuario no esta registrado o no ingreso a su cuenta en vez de mostrarse los logos de carrito y perfil, se mostrara las opciones típicas de Iniciar Sesión y Registrarse.",
  },
  {
    src: productosInicio,
    alt: "Vista pantalla inicial",
    description:
      "En la pantalla de inicio se puede ver un carrusel de algunos productos ej: Productos en oferta, que se podrá navegar con las flechas de dirección y mostrara 5 productos mas. Cuando el cliente quiera agregar al carrito, y no a iniciado sesión, se redirecciona a la vista del login, para que ingrese a su cuenta. Al seleccionar la imagen se abrirá una vista mas detallada del producto y sus datos.",
  },
  {
    src: inicioCategorias,
    alt: "Vista pantalla inicial",
    description:
      "Al seleccionar Categorías se desplegara opciones de categorías con sus sub categorías para filtrar productos por sus categorías. Al lado de Categorías, también esta la opción de ver todas las categorías.",
  },
  {
    src: vistaTodosLosProductos,
    alt: "Vista todos los productos",
    description:
      "Al seleccionar la opción de Todos los Productos, tendrá una vista de todos los productos cargados de la tienda. Se puede filtrar, por nombre o id del producto, o por las opciones de productos relevante (que serian los recién cargados), mas baratos y mas caros, mostrara hasta 20 productos y tendrá la opción de navegar entre paginas sin perder el estado de los filtro.",
  },
  {
    src: inicioBuscador,
    alt: "Vista pantalla inicial",
    description:
      "Buscar producto por nombre y al seleccionar el producto te da una vista mas detallada del producto.",
  },
  {
    src: inicioMenu,
    alt: "Vista pantalla inicial",
    description:
      "Al apretar perfil se abre un menú para poder acceder al perfil y cerrar sesión si tienes rol de cliente, si tienes rol de admin o super_admin, solo ellos van a poder ver la opción de administración.",
  },
  {
    src: vistaCarrito,
    alt: "Vista carrito",
    description:
      "Si en el usuario tiene productos en su carrito podrá ver el gasto total de todos estos, podrá agregar, restar y eliminar productos del carrito.",
  },
  {
    src: vistaSelector,
    alt: "Vista selección de medio de pago",
    description:
      "Para finalizar la compra y antes de esta pantalla, si no esta registrado, le va a pedir que ingrese datos personales mas importantes ej: numero de celular, dirección y DNI. Si el usuario tiene rol de admin no podrá acceder a este sección. La vista es un menú para seleccionar un medio de pago ya sea por mercado pago o presencial, en la vista de mercado pago se abre un model y pasos a seguir propio de mercado pago para realizar la compra de o los productos.",
  },
  {
    src: vistaPagoPresencial,
    alt: "Vista pago presencial",
    description:
      "Vista mas detallada de la compra y los datos del establecimiento, como horarios de atención y dirección del local, y te va a pedir una confirmación de la compra para hacer el pedido."
  },
  {
    src: vistaPerfil,
    alt: "Vista perfil",
    description:
      "Al finalizar su compra y hacer el pedido, se redirecciona al perfil del usuario, para poder ver la reserva que se realizo. El perfil dará una vista de tus datos y de los pedidos y el estado de tus pedidos."
  },
  {
    src: vistaPerfilPedidos,
    alt: "Vista perfil",
    description:
      "En el perfil también podrá ver los pedidos realizados y sus detalles en 'ver' podrá una lista de todos los productos del pedido, en 'estado' se vera el estado del pago del producto y en 'estado de entrega' podrás ver el estado de la entrega de tu pedido."
  },
  {
    src: vistaPerfilActualizacion,
    alt: "Vista perfil actualizar",
    description:
      "En perfil tambien tendra la opcion de que el usuario podra actualizar sus datos personales y la clave. El usuario con rol de admin no podra acceder a estas opciones de actualizacion."
  },
  {
    src: vistaPerfilActualizacion2,
    alt: "Vista perfil actualizacion",
    description:
      "El usuario demas de actualizar sus datos, podra eliminar su cuenta."
  },
];
</script>

<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <LayoutProyects />
    <section class="py-20">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-teal-400 mb-6">La viejita</h2>
        <div class="text-lg text-gray-300 leading-relaxed mb-10">
          <p>
            Es un proyecto que realicé como Trabajo Final para mi Tecnicatura
            Universitaria en Programación. Consiste en un E-commerce para una
            distribuidora de alimentos, donde los clientes podrán realizar pedidos de
            productos tanto por unidad como por bulto. Tiene la opción de pagar por
            Mercado Pago o hacer un pedido para retirar en el local (no maneja envíos a
            domicilio). También incluye un panel de gestión de productos, empleados,
            pedidos, seguimiento de acciones de empleados y estadísticas en pesos de lo
            vendido en el mes y productos más o menos vendidos.
          </p>
          <p>
            Desarrollado con Vue 3 para el frontend, Tailwind para el diseño y un API REST
            en Laravel 11 para el backend.
          </p>
        </div>
      </div>
      <div class="max-w-5xl m-4 mx-auto">
        <h1 class="text-3xl font-bold text-teal-400">Vista del cliente</h1>
        <CarouselView :data="DistributorCustomerData" />
      </div>
      <div class="max-w-5xl m-4 mx-auto">
        <h1 class="text-3xl font-bold text-teal-400">Vista administración</h1>
        <CarouselView :data="DistributorCustomerData" />
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Opcional para añadir estilos personalizados */
</style>
