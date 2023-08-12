
import { Link } from 'react-router-dom'
import BotonInicioSesion from '../BotonInicioSesion/BotonInicioSesion'
import Buscador from '../Buscador/Buscador'
import Carrito from '../Carrito/Carrito'
import '../Enlaces/enlaces.css'

const Enlaces = () => {
  return (
    <div className='enlaces'>
    <ul>
    <Link className='enlaces__link' to={"/"}>Home</Link>
    <Link className='enlaces__link' to={"/categoria"}>productos</Link>
    <Link className='enlaces__link' to={"/nosotros"}>nosotros</Link>
    <Link className='enlaces__link' to={"/ayuda"}>ayuda</Link>
    </ul>
    </div>
  )
}

export default Enlaces