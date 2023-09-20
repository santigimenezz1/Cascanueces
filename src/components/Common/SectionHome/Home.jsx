import Carrusel from "./Carrusel/Carrusel";
import TarjetaCategoria from "./TarjetaCategoria/TarjetaCategoria";
import "../SectionHome/home.css";
import TarjetaProducto from "./TarjetaProducto/TarjetaProducto";
import FondoFijo from "./FondoFijo/FondoFijo";
import IconoWhatsapp from "../../Layout/Layout/IconoWhatsapp/IconoWhatsapp";
import ImagenesGrid from "./ImagenesGrid/ImagenesGrid";
import FormasPago from "./FormasPago/FormasPago";
import TarjetaFormaPago from "./FormasPago/TarjetaFormaPago/TarjetaFormaPago";
import FondoFijoProducto from "./FondoFijoProducto/FondoFijoProducto";
import { Link } from "react-router-dom";
import TarjetaMiniCategoria from "./TarjetaMiniCategoria/TarjetaMiniCategoria";
import TarjetaHover from "./TarjetasHover/TarjetaHover";
import TarjetaGrid from "./TarjetaGrid/TarjetaGrid";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../FirebaseConfig";
import { Skeleton } from "@mui/material";
import ModalFinalizarCompra from "../SectionCart/ModalFinalizarCompra/ModalFinalizarCompra";
import ModalInicioSesion from "../../Layout/NavBar/ModalInicioSesion/ModalInicioSesion";
import ModalCrearCuenta from "../../Layout/NavBar/ModalCrearCuenta/ModalCrearCuenta";
import UserLogin from "../../Layout/NavBar/UserLogin/UserLogin";
import TarjetaFavorito from "../SectionFavorito/TarjetaFavorito/TarjetaFavorito";
import TarjetaModal from "../SectionMiCuenta/ModalMiCuenta/TarjetaModal/TarjetaModal";
import NavBar from "../../Layout/NavBar/NavBarMobile/NavBarMobile";
import AgregarImagen from "../AgregarImagen/AgregarImagen";
import TarjetaCarrusel from "./TarjetaCarruselResponsive/TarjetaCarrusel";
import CarouselComponent from "./TarjetaCarruselResponsive/TarjetaCarrusel";
import MyCarousel from "./TarjetaCarruselResponsive/TarjetaCarrusel";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let consulta = query(productsCollection, where("home", "==", true));
    getDocs(consulta).then((res) => {
      let productos = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setData(productos);
    });
  }, []);

  const filtradoCaldito = data.filter(
    (notebook) => notebook.categoria === "caldito"
  );
  const filtradoAlmendras = data.filter(
    (monitor) => monitor.categoria === "almendras"
  );
  const filtradoHelados = data.filter(
    (fuente) => fuente.categoria === "helados"
  );
  const filtradoNueces = data.filter(
    (refrigeracion) => refrigeracion.categoria === "nueces"
  );

(filtradoAlmendras)





  return (
    <div style={{width:"100%"}}>
    <div className="home">
    

    
    
     
      <FormasPago />
      
     
    
      <div>
      </div>
       
    </div>
    </div>
  );
};

export default Home;
