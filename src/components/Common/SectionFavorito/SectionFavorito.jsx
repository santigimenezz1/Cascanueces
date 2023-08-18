import '../SectionFavorito/sectionFavorito.css'
const SectionFavorito = () => {
  return (
    <div className='favorito'>
      <img className='favorito__imagen' src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691959216/CASCANUCES%20SALUDABLE/1940308_cd30in.png'></img>
      <div>
      <h1 className='favorito__titulo'>Tu lista de deseos está vacía</h1>
      <h2 className='favorito__subtitulo'>Mantén un ojo en los productos que te gustan agregándolos a tu lista de deseos</h2>
      </div>
    </div>
  )
}

export default SectionFavorito