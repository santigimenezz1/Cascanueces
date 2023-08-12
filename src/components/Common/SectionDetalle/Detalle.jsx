import '../SectionDetalle/detalle.css'
import FormasPago from '../SectionHome/FormasPago/FormasPago'
import TarjetaFormaPago from '../SectionHome/FormasPago/TarjetaFormaPago/TarjetaFormaPago'
import TarjetaProducto from '../SectionHome/TarjetaProducto/TarjetaProducto'
import TarjetaHover from '../SectionHome/TarjetasHover/TarjetaHover'
import ContadorUnidades from './ContadorUnidades/ContadorUnidades'
const Detalle = () => {

  return (
    <>
   
    <div className='detalle'>
    <div className='detalle__containerTarjetaDetalle'>
    <div className='detalle__imagen'>
    <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691548972/CASCANUCES%20SALUDABLE/prod1_f2xung.png'></img>
    </div>
    <div className='detalle__info'>
    <h1 className='detalle__info__titulo'>Yerba mate Metodo Barbacua 500 grs ORIGEN</h1>
    <h1 className='detalle__info__precio'>$2.800</h1>
    <div className='detalle__info__caracteristicas'>
    <h2 className='detalle__info__caracteristicas'>Yerba mate Metodo Barbacua 500 grs ORIGEN</h2>
    <h2 className='detalle__info__caracteristicas'>Calidad Premium, seleccion especial.</h2>
    </div>
    <div className='detalle__info__contadorUnidades'>
    <h2 className='detalle__info__stock'>disponibilidad: 6 disponibles</h2>
    <ContadorUnidades initial={1} stock={6}/>
    </div>
    </div>
    </div>
    
   
    </div>
    <div className='detalle__tarjetaProductos'>
    <TarjetaHover imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691798477/CASCANUCES%20SALUDABLE/MUS_005_NEU_01_AK_20_282_29_mlwxfj.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691798501/CASCANUCES%20SALUDABLE/MUS_005_NEU_05_AK_20_282_29_o5bvoy.jpg"} />   
    <TarjetaHover imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804037/CASCANUCES%20SALUDABLE/Koro-Erdbeerscheiben-01esmbq3dvTrQVc_v6ap0c.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804046/CASCANUCES%20SALUDABLE/Koro-Erdbeerscheiben-056mNMcA62hyAg2_ybecuc.jpg"} />   
    <TarjetaHover imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804066/CASCANUCES%20SALUDABLE/MANG_003_NEU_01_aknuec.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804080/CASCANUCES%20SALUDABLE/MANG_003_NEU_03_hydzcx.jpg"} />   
    <TarjetaHover imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804092/CASCANUCES%20SALUDABLE/BIO_Kokosmilch_01_icjeh7.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804100/CASCANUCES%20SALUDABLE/BIO_Kokosmilch_07_b4dkgn.jpg"} />   
    <TarjetaHover imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804121/CASCANUCES%20SALUDABLE/KORO-HASELNUSSMUS-10_z7acjs.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804110/CASCANUCES%20SALUDABLE/KORO-HASELNUSSMUS-04_wiud38.jpg"} />   
    <TarjetaHover imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804200/CASCANUCES%20SALUDABLE/MAND_006-01_20_281_29_gddoxf.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804208/CASCANUCES%20SALUDABLE/MAND_006-03_20_282_29_i6wpse.jpg"} />   
    <TarjetaHover imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804225/CASCANUCES%20SALUDABLE/CRIS_005_01kntwv5bzajYt9_rfu7ey.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804230/CASCANUCES%20SALUDABLE/CRIS_005_04qCPfUp9s62Etr_b3jxiz.jpg"} />   
    <TarjetaHover imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804485/CASCANUCES%20SALUDABLE/CREME_001_01_AK_e76hgy.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804489/CASCANUCES%20SALUDABLE/CREME_001_04_AK_zca6wm.jpg"} />   
    </div>
    <div style={{display:"flex", justifyContent:"center"}}>
    <FormasPago />
    </div>
    </>
  )
}

export default Detalle