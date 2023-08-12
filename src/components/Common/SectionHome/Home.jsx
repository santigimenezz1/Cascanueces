import Carrusel from "./Carrusel/Carrusel"
import TarjetaCategoria from "./TarjetaCategoria/TarjetaCategoria"
import '../SectionHome/home.css'
import TarjetaProducto from "./TarjetaProducto/TarjetaProducto"
import FondoFijo from "./FondoFijo/FondoFijo"
import TarjetaOferta from "./TarjetaOferta/TarjetaOferta"
import IconoWhatsapp from "../../Layout/Layout/IconoWhatsapp/IconoWhatsapp"
import ImagenesGrid from "./ImagenesGrid/ImagenesGrid"
import FormasPago from "./FormasPago/FormasPago"
import TarjetaFormaPago from "./FormasPago/TarjetaFormaPago/TarjetaFormaPago"
import FondoFijoProducto from "./FondoFijoProducto/FondoFijoProducto"
import { Link } from "react-router-dom"
import TarjetaMiniCategoria from "./TarjetaMiniCategoria/TarjetaMiniCategoria"
import TarjetaHover from "./TarjetasHover/TarjetaHover"
import TarjetaGrid from "./TarjetaGrid/TarjetaGrid"

const Home = () => {
  return (
    <div className="home">
    <Carrusel />
    <div className="home__tarjetaMiniCategoria">
    <TarjetaMiniCategoria titulo={"Frutos secos naturales"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788016/CASCANUCES%20SALUDABLE/KoRo-Naturbelassene-Nu_CC_88sse-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen-onlineshop-ohne-Zucker-ohne-Salz-ohne-Gewu_CC_88rz_q7wze2.jpg"} />
    <TarjetaMiniCategoria titulo={"Cremas de frutos secos"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788033/CASCANUCES%20SALUDABLE/KoRo-Nussmuse-Nusscreme-Bio-Qualita_CC_88t-gesund-vegan-ohne-Zuckerzusatz-gu_CC_88nstig-online-kaufen-bestellen-1kg-5kg_bbkhmw.jpg"} />
    <TarjetaMiniCategoria titulo={"Frutos secos especiados"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788114/CASCANUCES%20SALUDABLE/KoRo-gewu_CC_88rzte-Nu_CC_88sse-pikant-gero_CC_88stet-gesalzen-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_iexbmb.jpg"} />
    <TarjetaMiniCategoria titulo={"Miz de frutas secas"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788191/CASCANUCES%20SALUDABLE/KoRo-Nussmischung-Nussmix-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_id334u.jpg"} />
    <TarjetaMiniCategoria titulo={"Frutos secos con chocolate"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788211/CASCANUCES%20SALUDABLE/KoRo-Schokonu_CC_88sse-schokolierte-Nu_CC_88sse-mit-Schokoladenu_CC_88berzug-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_ipjsnu.jpg"} />
    <TarjetaMiniCategoria titulo={"Semillas"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788219/CASCANUCES%20SALUDABLE/KoRo-Samen-Kerne-Bio-Qualita_CC_88t-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_f9wpa4.jpg"} />

    </div>

    <div className="home__tarjetaCategoria">
      <TarjetaCategoria imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691520563/CASCANUCES%20SALUDABLE/alfajor-nutriraw-nuevo_juzfoy.jpg"} titulo={"Dulce"} />
      <TarjetaCategoria imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691522883/CASCANUCES%20SALUDABLE/60e1557a-23ca-4eaf-9f8c-77a9892e17b7-300x300_g88q76.jpg"} titulo={"Salado"} />
      <TarjetaCategoria imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691523142/CASCANUCES%20SALUDABLE/producto-8-adicional-300x300_msratv.jpg"} titulo={"Infaltable"} />
    </div>
    <h1 className="home__titulo">Los más elegidos</h1>
    <div className="home__tarjetaProducto">
    <TarjetaHover imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691798477/CASCANUCES%20SALUDABLE/MUS_005_NEU_01_AK_20_282_29_mlwxfj.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691798501/CASCANUCES%20SALUDABLE/MUS_005_NEU_05_AK_20_282_29_o5bvoy.jpg"} />   
    <TarjetaHover imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804037/CASCANUCES%20SALUDABLE/Koro-Erdbeerscheiben-01esmbq3dvTrQVc_v6ap0c.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804046/CASCANUCES%20SALUDABLE/Koro-Erdbeerscheiben-056mNMcA62hyAg2_ybecuc.jpg"} />   
    <TarjetaHover imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804066/CASCANUCES%20SALUDABLE/MANG_003_NEU_01_aknuec.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804080/CASCANUCES%20SALUDABLE/MANG_003_NEU_03_hydzcx.jpg"} />   
    <TarjetaHover imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804092/CASCANUCES%20SALUDABLE/BIO_Kokosmilch_01_icjeh7.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804100/CASCANUCES%20SALUDABLE/BIO_Kokosmilch_07_b4dkgn.jpg"} />   
    <TarjetaHover imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804121/CASCANUCES%20SALUDABLE/KORO-HASELNUSSMUS-10_z7acjs.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804110/CASCANUCES%20SALUDABLE/KORO-HASELNUSSMUS-04_wiud38.jpg"} />   
    <TarjetaHover imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804200/CASCANUCES%20SALUDABLE/MAND_006-01_20_281_29_gddoxf.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804208/CASCANUCES%20SALUDABLE/MAND_006-03_20_282_29_i6wpse.jpg"} />   
    <TarjetaHover imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804225/CASCANUCES%20SALUDABLE/CRIS_005_01kntwv5bzajYt9_rfu7ey.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804230/CASCANUCES%20SALUDABLE/CRIS_005_04qCPfUp9s62Etr_b3jxiz.jpg"} />   
    <TarjetaHover imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804485/CASCANUCES%20SALUDABLE/CREME_001_01_AK_e76hgy.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804489/CASCANUCES%20SALUDABLE/CREME_001_04_AK_zca6wm.jpg"} />   

  
   

  
    </div>
    <FondoFijo />
    <div className="home__tarjetasGrid">
    <TarjetaGrid titulo={"Frutos secos naturales"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788016/CASCANUCES%20SALUDABLE/KoRo-Naturbelassene-Nu_CC_88sse-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen-onlineshop-ohne-Zucker-ohne-Salz-ohne-Gewu_CC_88rz_q7wze2.jpg"} />
    <TarjetaGrid titulo={"Cremas de frutos secos"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788033/CASCANUCES%20SALUDABLE/KoRo-Nussmuse-Nusscreme-Bio-Qualita_CC_88t-gesund-vegan-ohne-Zuckerzusatz-gu_CC_88nstig-online-kaufen-bestellen-1kg-5kg_bbkhmw.jpg"} />
    <TarjetaGrid titulo={"Frutos secos especiados"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788114/CASCANUCES%20SALUDABLE/KoRo-gewu_CC_88rzte-Nu_CC_88sse-pikant-gero_CC_88stet-gesalzen-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_iexbmb.jpg"} />
    <TarjetaGrid titulo={"Miz de frutas secas"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788191/CASCANUCES%20SALUDABLE/KoRo-Nussmischung-Nussmix-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_id334u.jpg"} />
    <TarjetaGrid titulo={"Frutos secos con chocolate"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788211/CASCANUCES%20SALUDABLE/KoRo-Schokonu_CC_88sse-schokolierte-Nu_CC_88sse-mit-Schokoladenu_CC_88berzug-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_ipjsnu.jpg"} />
    <TarjetaGrid titulo={"Semillas"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788219/CASCANUCES%20SALUDABLE/KoRo-Samen-Kerne-Bio-Qualita_CC_88t-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_f9wpa4.jpg"} />
    <TarjetaGrid titulo={"Frutos secos especiados"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788114/CASCANUCES%20SALUDABLE/KoRo-gewu_CC_88rzte-Nu_CC_88sse-pikant-gero_CC_88stet-gesalzen-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_iexbmb.jpg"} />
    <TarjetaGrid titulo={"Miz de frutas secas"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788191/CASCANUCES%20SALUDABLE/KoRo-Nussmischung-Nussmix-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_id334u.jpg"} />
    <TarjetaGrid titulo={"Frutos secos naturales"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788016/CASCANUCES%20SALUDABLE/KoRo-Naturbelassene-Nu_CC_88sse-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen-onlineshop-ohne-Zucker-ohne-Salz-ohne-Gewu_CC_88rz_q7wze2.jpg"} />
    <TarjetaGrid titulo={"Cremas de frutos secos"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788033/CASCANUCES%20SALUDABLE/KoRo-Nussmuse-Nusscreme-Bio-Qualita_CC_88t-gesund-vegan-ohne-Zuckerzusatz-gu_CC_88nstig-online-kaufen-bestellen-1kg-5kg_bbkhmw.jpg"} />
    <TarjetaGrid titulo={"Frutos secos especiados"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788114/CASCANUCES%20SALUDABLE/KoRo-gewu_CC_88rzte-Nu_CC_88sse-pikant-gero_CC_88stet-gesalzen-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_iexbmb.jpg"} />
    <TarjetaGrid titulo={"Miz de frutas secas"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788191/CASCANUCES%20SALUDABLE/KoRo-Nussmischung-Nussmix-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_id334u.jpg"} />
    </div>
    <FondoFijoProducto />
    <h1 className="home__titulo">Productos en oferta</h1>
    <div className="home__tarjetaProducto">
    <TarjetaHover imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691798477/CASCANUCES%20SALUDABLE/MUS_005_NEU_01_AK_20_282_29_mlwxfj.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691798501/CASCANUCES%20SALUDABLE/MUS_005_NEU_05_AK_20_282_29_o5bvoy.jpg"} />   
    <TarjetaHover imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804037/CASCANUCES%20SALUDABLE/Koro-Erdbeerscheiben-01esmbq3dvTrQVc_v6ap0c.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804046/CASCANUCES%20SALUDABLE/Koro-Erdbeerscheiben-056mNMcA62hyAg2_ybecuc.jpg"} />   
    <TarjetaHover imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804066/CASCANUCES%20SALUDABLE/MANG_003_NEU_01_aknuec.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804080/CASCANUCES%20SALUDABLE/MANG_003_NEU_03_hydzcx.jpg"} />   
    <TarjetaHover imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804092/CASCANUCES%20SALUDABLE/BIO_Kokosmilch_01_icjeh7.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804100/CASCANUCES%20SALUDABLE/BIO_Kokosmilch_07_b4dkgn.jpg"} />   
    <TarjetaHover imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804121/CASCANUCES%20SALUDABLE/KORO-HASELNUSSMUS-10_z7acjs.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804110/CASCANUCES%20SALUDABLE/KORO-HASELNUSSMUS-04_wiud38.jpg"} />   
    <TarjetaHover imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804200/CASCANUCES%20SALUDABLE/MAND_006-01_20_281_29_gddoxf.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804208/CASCANUCES%20SALUDABLE/MAND_006-03_20_282_29_i6wpse.jpg"} />   
    <TarjetaHover imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804225/CASCANUCES%20SALUDABLE/CRIS_005_01kntwv5bzajYt9_rfu7ey.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804230/CASCANUCES%20SALUDABLE/CRIS_005_04qCPfUp9s62Etr_b3jxiz.jpg"} />   
    <TarjetaHover imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804485/CASCANUCES%20SALUDABLE/CREME_001_01_AK_e76hgy.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804489/CASCANUCES%20SALUDABLE/CREME_001_04_AK_zca6wm.jpg"} />   

  
   

  
    </div>
    <div className="home__iconoWhatsapp">
    <IconoWhatsapp />
    </div>
    
  <FormasPago /> 
    </div>
  )
}

export default Home