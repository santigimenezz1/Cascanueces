import { useState } from 'react';
import '../TarjetasHover/tarjetaHover.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const TarjetaHover = ( {imagenPrincipal, imagenSecundaria} ) => {
    const [corazon, setCorazon] = useState(false)
    const [imagen, setImagen] = useState(imagenPrincipal)
    const fotoPrincipal = imagenPrincipal
    const fotoSecundaria = imagenSecundaria
  return (
    <div onMouseOver={()=>setImagen(fotoSecundaria)} className='tarjetaHover'>
    <img onMouseOut={()=>setImagen(fotoPrincipal)} className='tarjetaHover__imagen' src={imagen}></img>
    <div className='tarjetaHover__icono' >
    <AddShoppingCartIcon fontSize='medium'/>
    </div>
    <div onClick={()=>setCorazon(!corazon)}  className='tarjetaHover__corazon'>
    {

     corazon ? <div className='tarjetaHover__corazon true'><FavoriteIcon /></div>   : <div className='tarjetaHover__corazon '> <FavoriteBorderIcon /></div>  
    }
    </div>
    <div className='tarjetaHover__nombrePrecio'>
    <h3>Crema de almendras 500g</h3>
    <h3>$2.500</h3>

    </div>
    
    
    
    </div>
  )
}

export default TarjetaHover