import '../SectionNosotros/nosotros.css'

const Nosotros = () => {
  return (
    <div className='nosotros'>
      <div className='nosotros__imagenFija'>
      <h1>Sobre Nosotros</h1> 
      </div>
      <div className='nosotros__info'>
       <div className='nosotros__info__text'>
       <h1 className='nostros__info__text__titulo'>Hola, somos Nacho y Lucho</h1>
       <p className='nosotros__info__texto'>Santé Cocina Consciente surgió a raíz de alimentar a nuestra hija Amelia. Así empezamos con recetas propias, siempre priorizando la materia prima agroecológica y local. Con el tiempo, sumamos más productos, realizados por productores locales, con la misma mirada de la cocina y salud que nosotrxs.
       De esta manera nos ocupamos de acercar productos elaborados con materia prima agroecologica, realizados con amor, por emprendedores que eligen esto como filosofía de vida, garantizando la menor cantidad posible de intermediarios.</p>
       </div>
       <div className='nosotros__info__imagen'>
       <img className='imagen__nosotros' src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691782335/CASCANUCES%20SALUDABLE/captura_casca_e30cve.png'></img>
       </div>
      </div>
      
    </div>
  )
}

export default Nosotros