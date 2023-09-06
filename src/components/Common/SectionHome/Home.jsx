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


console.log(filtradoAlmendras)



  return (
    <div className="home">
    
      <Carrusel /> 
      <div className="home__tarjetaMiniCategoria">
        <Link to={"/categoria"}>
          <TarjetaMiniCategoria
            titulo={"Frutos secos "}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788016/CASCANUCES%20SALUDABLE/KoRo-Naturbelassene-Nu_CC_88sse-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen-onlineshop-ohne-Zucker-ohne-Salz-ohne-Gewu_CC_88rz_q7wze2.jpg"
            }
          />
        </Link>
        <Link to={"/categoria"}>
          <TarjetaMiniCategoria
            titulo={"Cereales"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788033/CASCANUCES%20SALUDABLE/KoRo-Nussmuse-Nusscreme-Bio-Qualita_CC_88t-gesund-vegan-ohne-Zuckerzusatz-gu_CC_88nstig-online-kaufen-bestellen-1kg-5kg_bbkhmw.jpg"
            }
          />
        </Link>
        <Link to={"/categoria"}>
          <TarjetaMiniCategoria
            titulo={"Granola"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788114/CASCANUCES%20SALUDABLE/KoRo-gewu_CC_88rzte-Nu_CC_88sse-pikant-gero_CC_88stet-gesalzen-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_iexbmb.jpg"
            }
          />
        </Link>
        <Link to={"/categoria"}>
          <TarjetaMiniCategoria
            titulo={"Reposteria"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788191/CASCANUCES%20SALUDABLE/KoRo-Nussmischung-Nussmix-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_id334u.jpg"
            }
          />
        </Link>
        <Link to={"/categoria"}>
          <TarjetaMiniCategoria
            titulo={"Salados"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788211/CASCANUCES%20SALUDABLE/KoRo-Schokonu_CC_88sse-schokolierte-Nu_CC_88sse-mit-Schokoladenu_CC_88berzug-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_ipjsnu.jpg"
            }
          />
        </Link>
        <Link to={"/categoria"}>
          <TarjetaMiniCategoria
            titulo={"Semillas"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788219/CASCANUCES%20SALUDABLE/KoRo-Samen-Kerne-Bio-Qualita_CC_88t-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_f9wpa4.jpg"
            }
          />
        </Link>
        <Link className="tarjetaMiniCategoriaDisplayOff" to={"/categoria"}>
        <TarjetaMiniCategoria
          titulo={"Semillas"}
          imagen={
            "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788219/CASCANUCES%20SALUDABLE/KoRo-Samen-Kerne-Bio-Qualita_CC_88t-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_f9wpa4.jpg"
          }
        />
      </Link>
      <Link className="tarjetaMiniCategoriaDisplayOff" to={"/categoria"}>
      <TarjetaMiniCategoria
        titulo={"Semillas"}
        imagen={
          "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788219/CASCANUCES%20SALUDABLE/KoRo-Samen-Kerne-Bio-Qualita_CC_88t-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_f9wpa4.jpg"
        }
      />
    </Link>
      </div>

      <div className="home__tarjetaCategoria">
        <TarjetaCategoria
          imagen={
            "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691520563/CASCANUCES%20SALUDABLE/alfajor-nutriraw-nuevo_juzfoy.jpg"
          }
          titulo={"Dulce"}
        />
        <TarjetaCategoria
          imagen={
            "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691522883/CASCANUCES%20SALUDABLE/60e1557a-23ca-4eaf-9f8c-77a9892e17b7-300x300_g88q76.jpg"
          }
          titulo={"Salado"}
        />
        <div className={"tarjetaCategoriaDisplay"}>
        <TarjetaCategoria 
          imagen={
            "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691523142/CASCANUCES%20SALUDABLE/producto-8-adicional-300x300_msratv.jpg"
          }
          titulo={"Infaltable"}
        />
        </div>
      </div>
      <h1 className="home__titulo">Los más elegidos</h1>
      <div className="home__tarjetaProducto">
        {Object.keys(data).length > 0 ? (
          filtradoHelados.map((producto) => (
            <TarjetaHover key={producto.id} producto={producto} />
          ))
        ) : (
          <div className={"tarjetaHome__esqueleton"}>
            <Skeleton variant="rectangular" width={290} height={400} />
            <Skeleton variant="rectangular" width={290} height={400} />
            <Skeleton variant="rectangular" width={290} height={400} />
            <Skeleton variant="rectangular" width={290} height={400} />
          </div>
        )}
        
        

        {Object.keys(data).length > 0 ? (
          filtradoCaldito.map((producto) => (
            <TarjetaHover key={producto.id} producto={producto} />
          ))
        ) : (
          <div className={"tarjetaHome__esqueleton"}>
            <Skeleton variant="rectangular" width={290} height={400} />
            <Skeleton variant="rectangular" width={290} height={400} />
            <Skeleton variant="rectangular" width={290} height={400} />
            <Skeleton variant="rectangular" width={290} height={400} />
          </div>
        )}

        </div>
        <div className="container__tarjeta__carrusel__mobile"  >
        {
          filtradoCaldito.length > 0 &&
            <MyCarousel filtradoAlmendras={filtradoCaldito}  />
        }
        </div>
        <div className="container__tarjeta__carrusel__mobile"  >
        {
          filtradoHelados.length > 0 &&
            <MyCarousel filtradoAlmendras={filtradoHelados}  />
        }
        </div>
      <FondoFijo />
      <div className="home__tarjetasGrid">
        <Link to={"/categoria"}>
          <TarjetaGrid
            titulo={"Frutos secos "}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788016/CASCANUCES%20SALUDABLE/KoRo-Naturbelassene-Nu_CC_88sse-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen-onlineshop-ohne-Zucker-ohne-Salz-ohne-Gewu_CC_88rz_q7wze2.jpg"
            }
          />
        </Link>
        <Link to={"/categoria"}>
          <TarjetaGrid
            titulo={"Hierbas"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788033/CASCANUCES%20SALUDABLE/KoRo-Nussmuse-Nusscreme-Bio-Qualita_CC_88t-gesund-vegan-ohne-Zuckerzusatz-gu_CC_88nstig-online-kaufen-bestellen-1kg-5kg_bbkhmw.jpg"
            }
          />
        </Link>
        <Link to={"/categoria"}>
          <TarjetaGrid
            titulo={"Frutas desecadas"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788114/CASCANUCES%20SALUDABLE/KoRo-gewu_CC_88rzte-Nu_CC_88sse-pikant-gero_CC_88stet-gesalzen-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_iexbmb.jpg"
            }
          />
        </Link>
        <Link to={"/categoria"}>
          <TarjetaGrid
            titulo={"Cereales"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788191/CASCANUCES%20SALUDABLE/KoRo-Nussmischung-Nussmix-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_id334u.jpg"
            }
          />
        </Link>
        <Link to={"/categoria"}>
          <TarjetaGrid
            titulo={"Granola"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788211/CASCANUCES%20SALUDABLE/KoRo-Schokonu_CC_88sse-schokolierte-Nu_CC_88sse-mit-Schokoladenu_CC_88berzug-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_ipjsnu.jpg"
            }
          />
        </Link>
        <Link to={"/categoria"}>
          <TarjetaGrid
            titulo={"Legumbres y arroz"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788219/CASCANUCES%20SALUDABLE/KoRo-Samen-Kerne-Bio-Qualita_CC_88t-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_f9wpa4.jpg"
            }
          />
        </Link>
        <Link to={"/categoria"}>
          <TarjetaGrid
            titulo={"Salados"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804092/CASCANUCES%20SALUDABLE/BIO_Kokosmilch_01_icjeh7.jpg"
            }
          />
        </Link>
        <Link to={"/categoria"}>
          <TarjetaGrid
            titulo={"Sales"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804080/CASCANUCES%20SALUDABLE/MANG_003_NEU_03_hydzcx.jpg"
            }
          />
        </Link>
        <Link to={"/categoria"}>
          <TarjetaGrid
            titulo={"Pastas de mani"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788016/CASCANUCES%20SALUDABLE/KoRo-Naturbelassene-Nu_CC_88sse-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen-onlineshop-ohne-Zucker-ohne-Salz-ohne-Gewu_CC_88rz_q7wze2.jpg"
            }
          />
        </Link>
        <Link to={"/categoria"}>
          <TarjetaGrid
            titulo={"Harina y avenas"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804485/CASCANUCES%20SALUDABLE/CREME_001_01_AK_e76hgy.jpg"
            }
          />
        </Link>
        <Link to={"/categoria"}>
          <TarjetaGrid
            titulo={"Reposteria"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691807928/CASCANUCES%20SALUDABLE/RIEGEL_11_01_plmabt.jpg"
            }
          />
        </Link>
        <Link to={"/categoria"}>
          <TarjetaGrid
            titulo={"Galletitas"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691807991/CASCANUCES%20SALUDABLE/BLISS_021_04_la6aic.jpg"
            }
          />
        </Link>
      </div>
      <FondoFijoProducto />
      <h1 className="home__titulo">Productos en oferta</h1>
      <div className="home__tarjetaProducto"></div>
      <div className="home__tarjetaProducto">
         
        {Object.keys(data).length > 0 ? (
          filtradoNueces.map((producto) => (
            <TarjetaHover key={producto.id} producto={producto} />
          ))
        ) : (
          <div className={"tarjetaHome__esqueleton"}>
            <Skeleton variant="rectangular" width={290} height={400} />
            <Skeleton variant="rectangular" width={290} height={400} />
            <Skeleton variant="rectangular" width={290} height={400} />
            <Skeleton variant="rectangular" width={290} height={400} />
          </div> 
        )}
       

        {Object.keys(data).length > 0 ? (
          filtradoAlmendras.map((producto) => (
            <TarjetaHover key={producto.id} producto={producto} />
          ))
        ) : (
          <div className={"tarjetaHome__esqueleton"}>
            <Skeleton variant="rectangular" width={290} height={400} />
            <Skeleton variant="rectangular" width={290} height={400} />
            <Skeleton variant="rectangular" width={290} height={400} />
            <Skeleton variant="rectangular" width={290} height={400} />
          </div>
          
        )}
       
      </div>
      <div className="container__tarjeta__carrusel__mobile"  >
      {
        filtradoNueces.length > 0 &&
          <MyCarousel filtradoAlmendras={filtradoNueces}  />
      }
      
      </div>
      <div className="container__tarjeta__carrusel__mobile"  >
      {
        filtradoAlmendras.length > 0 &&
          <MyCarousel filtradoAlmendras={filtradoAlmendras}  />
      }
      </div>
      <div className="home__iconoWhatsapp">
        <IconoWhatsapp />
      </div>

      <FormasPago />
      
     
    
      <div>
      </div>
      
    </div>
  );
};

export default Home;
