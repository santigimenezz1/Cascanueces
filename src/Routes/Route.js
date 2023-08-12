import Ayuda from "../components/Common/SectionAyuda/Ayuda";
import Cart from "../components/Common/SectionCart/Cart";
import Categoria from "../components/Common/SectionCategory/Categoria";
import TarjetaSectonCategoria from "../components/Common/SectionCategory/TarjetaCategoria/TarjetaCategoria";
import Detalle from "../components/Common/SectionDetalle/Detalle";
import Carrusel from "../components/Common/SectionHome/Carrusel/Carrusel";
import Home from "../components/Common/SectionHome/Home";
import TarjetaProducto from "../components/Common/SectionHome/TarjetaProducto/TarjetaProducto";
import Nosotros from "../components/Common/SectionNosotros/Nosotros";
import Carrito from "../components/Layout/NavBar/Carrito/Carrito";
import Logo from "../components/Layout/NavBar/Logo/Logo";

export let routes = [
    {
        id:"Home",
        path:"/",
        Element: Home
    },
    {
        id:"categoria",
        path:"/categoria/:categoria",
        Element: Categoria
    },
    {
        id:"categoria",
        path:"/categoria/",
        Element: Categoria
    },
    {
        id:"cart",
        path:"/cart",
        Element: Cart
    },
    {
        id:"detalle",
        path:"/detalle/:id",
        Element: Detalle
    },
    {
        id:"nosotros",
        path:"/nosotros",
        Element: Nosotros
    },
    {
        id:"ayuda",
        path:"/ayuda",
        Element: Ayuda
    },
    


]