import '../SectionCategory/categoria.css'
import EnlacesCategoria from './EnlacesCategoria/EnlacesCategoria'
import Filtros from './Filtros/Filtros'
import TarjetaHoverCategoria from './TarjetaCategory/TarjetaCategory'
import TarjetaProductoCategoria from './TarjetaProductoCategoria/TarjetaProductoCategoria'

const Categoria = () => {
  return (
    <div className='categoria'>
    <div className='categoria__enalcesCategoria'>
    <EnlacesCategoria/>
    </div>
    <div className='categoria__tarjetaProductos'>
     <h1>Chicken Fit Protein</h1>
     <div className='categoria__tarjetaProductos__filtros'>
     <h2>Mostrar resultados: 16</h2>
     <Filtros />
     </div>
     <div className='categoria__tarjetaProductos__tarjetas'>
    
     <TarjetaHoverCategoria imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691798477/CASCANUCES%20SALUDABLE/MUS_005_NEU_01_AK_20_282_29_mlwxfj.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691798501/CASCANUCES%20SALUDABLE/MUS_005_NEU_05_AK_20_282_29_o5bvoy.jpg"} />   
     <TarjetaHoverCategoria imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804037/CASCANUCES%20SALUDABLE/Koro-Erdbeerscheiben-01esmbq3dvTrQVc_v6ap0c.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804046/CASCANUCES%20SALUDABLE/Koro-Erdbeerscheiben-056mNMcA62hyAg2_ybecuc.jpg"} />   
     <TarjetaHoverCategoria imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804066/CASCANUCES%20SALUDABLE/MANG_003_NEU_01_aknuec.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804080/CASCANUCES%20SALUDABLE/MANG_003_NEU_03_hydzcx.jpg"} />   
     <TarjetaHoverCategoria imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804092/CASCANUCES%20SALUDABLE/BIO_Kokosmilch_01_icjeh7.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804100/CASCANUCES%20SALUDABLE/BIO_Kokosmilch_07_b4dkgn.jpg"} />   
     <TarjetaHoverCategoria imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804121/CASCANUCES%20SALUDABLE/KORO-HASELNUSSMUS-10_z7acjs.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804110/CASCANUCES%20SALUDABLE/KORO-HASELNUSSMUS-04_wiud38.jpg"} />   
     <TarjetaHoverCategoria imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804200/CASCANUCES%20SALUDABLE/MAND_006-01_20_281_29_gddoxf.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804208/CASCANUCES%20SALUDABLE/MAND_006-03_20_282_29_i6wpse.jpg"} />   
     <TarjetaHoverCategoria imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804225/CASCANUCES%20SALUDABLE/CRIS_005_01kntwv5bzajYt9_rfu7ey.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804230/CASCANUCES%20SALUDABLE/CRIS_005_04qCPfUp9s62Etr_b3jxiz.jpg"} />   
     <TarjetaHoverCategoria imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804485/CASCANUCES%20SALUDABLE/CREME_001_01_AK_e76hgy.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691804489/CASCANUCES%20SALUDABLE/CREME_001_04_AK_zca6wm.jpg"} />  
     <TarjetaHoverCategoria imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691807882/CASCANUCES%20SALUDABLE/BIO_Edamame_01-1_ls7xci.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691807903/CASCANUCES%20SALUDABLE/BIO_Edamame_03-1_lul04r.jpg"} />   
     <TarjetaHoverCategoria imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691807913/CASCANUCES%20SALUDABLE/CHI_001_01CxMxuSK4NNV70_xhyuep.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691807921/CASCANUCES%20SALUDABLE/CHI_001_03kNM7eeFE6mffk_ygdcj8.jpg"} />   
     <TarjetaHoverCategoria imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691807928/CASCANUCES%20SALUDABLE/RIEGEL_11_01_plmabt.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691807943/CASCANUCES%20SALUDABLE/RIEGEL_11_04_cbkfxq.jpg"} />   
     <TarjetaHoverCategoria imagenPrincipal={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691807975/CASCANUCES%20SALUDABLE/BLISS_021_02bQbhZ0cb6dCTE_s057lo.jpg"} imagenSecundaria={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691807991/CASCANUCES%20SALUDABLE/BLISS_021_04_la6aic.jpg"} />    
     </div>
    </div>
   
  
    
    </div>
  )
}

export default Categoria