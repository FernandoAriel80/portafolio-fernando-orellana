<script setup>
import LayoutProyects from "../layout/LayoutProyects.vue";
import CarouselView from "../components/CarouselView.vue";
import inicioImage from "@/assets/images/distribuidora/inicio.png";
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
import vistaPerfilActualizacion from "@/assets/images/distribuidora/vista-perfil-actualizacion.png";
import vistaPerfilActualizacion2 from "@/assets/images/distribuidora/vista-perfil-actualizacion2.png";

const DistributorCustomerData = [
  {
    src: inicioImage,
    alt: "Vista pantalla inicial",
    description:
      "Vista de la página principal al iniciar sesión.",
  },
  {
    src: productosInicio,
    alt: "Vista pantalla inicial",
    description:
      "En la pantalla de inicio se puede ver un carrusel de algunos productos. En necesario iniciar sesión para agregar un producto al carrito de compras.",
  },
  {
    src: inicioCategorias,
    alt: "Vista pantalla inicial",
    description:
      "Menú categorías y sub categorías.",
  },
  {
    src: vistaTodosLosProductos,
    alt: "Vista todos los productos",
    description:
      "Todo los productos. Se puede filtrar por nombre, id , se puede ordenar por productos relevantes, más baratos y más caros, carga hasta 20 productos por pagina.",
  },
  {
    src: inicioBuscador,
    alt: "Vista pantalla inicial",
    description:
      "Buscar productos por nombre.",
  },
  {
    src: inicioMenu,
    alt: "Vista pantalla inicial",
    description:
      "Si el usuario tienes rol de cliente, podrá acceder al perfil y a cerrar sesión, si tiene rol de admin o super_admin, solo ellos podrán ver la opción de administración.",
  },
  {
    src: vistaCarrito,
    alt: "Vista carrito",
    description:
      "Si en el usuario tiene productos en su carrito, tendrá detalles del gasto total y podrá agregar, restar y eliminar productos del carrito.",
  },
  {
    src: vistaSelector,
    alt: "Vista selección de medio de pago",
    description:
      "Para finalizar la compra, se pedirá datos personales. Si el usuario tiene rol de admin no podrá acceder a esta sección. Selección de medio de pago mercado pago o presencial.",
  },
  {
    src: vistaPagoPresencial,
    alt: "Vista pago presencial",
    description:
      "Vista detallada del pedido y datos del establecimiento y confirmación compra.",
  },
  {
    src: vistaPerfil,
    alt: "Vista perfil",
    description:
      "En el perfil están los datos del usuario y de los pedidos realizados.",
  },
  {
    src: vistaPerfilPedidos,
    alt: "Vista perfil",
    description:
      "Historial de pedidos.",
  },
  {
    src: vistaPerfilActualizacion,
    alt: "Vista perfil actualizar",
    description:
      "Opción de actualizar datos personales. Usuario con rol de admin no podrá acceder a estas opciones de actualización.",
  },
  {
    src: vistaPerfilActualizacion2,
    alt: "Vista perfil actualizacion",
    description: "El usuario también puede eliminar su cuenta.",
  },
];

import menu from "@/assets/images/distribuidora/menu.png";
import cargaProductos from "@/assets/images/distribuidora/carga-productos.png";
import vistaCliente from "@/assets/images/distribuidora/vista-cliente.png";
import vistaPedido from "@/assets/images/distribuidora/vista-pedidos.png";
import crearEmpleado from "@/assets/images/distribuidora/crear-empleado.png";
import vistaAccionesEmpleados from "@/assets/images/distribuidora/vista-acciones-empleado.png";
import vistaEstadisticas1 from "@/assets/images/distribuidora/vista-estadisticas1.png";
import vistaEstadisticas2 from "@/assets/images/distribuidora/vista-estadisticas2.png";

const DistributorEmployeeData = [
  {
    src: menu,
    alt: "Vista menu administración",
    description:
      "Menú administrativo.",
  },
  {
    src: cargaProductos,
    alt: "Vista productos",
    description:
      "Admin y el super_admin pueden entrar a esta sección, Pueden ver los detalles de los productos, buscar productos, cargar producto, actualizar productos y eliminar productos.",
  },
  {
    src: vistaCliente,
    alt: "Vista cliente",
    description:
      "Admin y el super_admin pueden entrar a esta sección. Datos de clientes, se puede buscar por nombre, apellido y dni.",
  },
  {
    src: vistaPedido,
    alt: "Vista pedidos",
    description:
      "Admin y el super_admin pueden entrar a esta sección. Ver y buscar pedidos. Actualización de pagos y estados de pedidos.",
  },
  {
    src: crearEmpleado,
    alt: "Vista empleados",
    description:
      "Solo el super_admin pueden entrar a esta sección. Puede buscar, crear, actualizar y eliminar a los empleados.",
  },
  {
    src: vistaAccionesEmpleados,
    alt: "Vista Acciones",
    description:
      "Solo el super_admin pueden entrar a esta sección. Ver las acciones realizadas por los empleados para seguimiento, corrección de errores y precaución.",
  },
  {
    src: vistaEstadisticas1,
    alt: "Vista estadisticas",
    description:
      "Solo el super_admin pueden entrar a esta sección. Seguimiento de ganancias mensuales, producto mas vendido del mes actual y el anterior, también del producto menos vendido de este mes y el anterior.",
  },
  {
    src: vistaEstadisticas2,
    alt: "Vista estadisticas",
    description:
      "También se puede ver los productos mas vendidos en todo el año, y de todos los años hasta la actualidad.",
  },
];
</script>

<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <LayoutProyects />
    <section class="py-20">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold text-teal-400 mb-6">La viejita</h2>
        <div class="text-lg text-gray-300 leading-relaxed mb-10 mx-3">
          <p>
            Proyecto Final para la Carrera. E-commerce para distribuidora de alimentos
            donde los clientes podrán realizar pedidos de productos tanto por unidad como
            por bulto, abonar a través de Mercado Pago y retirar pedidos por el local.
            También incluye un panel administrativo de gestión de productos, empleados,
            pedidos, seguimiento de acciones y estadísticas en pesos de lo vendido en el
            mes y productos más y menos vendidos.
          </p>
          <p>
            Desarrollado con Vue 3 para el frontend, Tailwind para los estilos, un API
            REST en Laravel 11 para el backend y MySql para la base de datos. Para el
            despliegue usé plataformas PaaS como Railway para el Backend y Render para el
            Frontend.
          </p>
          <div class="mt-5 border-t">
            <p>Podes ver los repositorios del proyecto:</p>
            <p>
              Frontend:
              <a
                class="hover:text-teal-400"
                href="https://github.com/FernandoAriel80/distribuidora-front"
                >Acá</a
              >
            </p>
            <p>
              Backend:
              <a
                class="hover:text-teal-400"
                href="https://github.com/FernandoAriel80/distribuidora-back"
                >Acá</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="max-w-5xl m-7 mx-auto">
        <h1 class="text-3xl font-bold text-teal-400">Vista del cliente</h1>
        <CarouselView :data="DistributorCustomerData" />
      </div>
      <div class="max-w-5xl m-7 mx-auto">
        <h1 class="text-3xl font-bold text-teal-400">Vista administración</h1>
        <CarouselView :data="DistributorEmployeeData" />
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Opcional para añadir estilos personalizados */
</style>
