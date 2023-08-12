
import BotonFondoFijo from '../SectionHome/FondoFijo/BotonFondoFijo/BotonFondoFijo'
import TarjetaCart from './TarjetaCart/TarjetaCart'
import SelectorPago from './TarjetaSelectorPago/TarjetaSelectorPago'
import '../SectionCart/cart.css'
import { Modal } from '@mui/material'
import ModalCart from './Modal/Modal'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom'


const Cart = () => {
  return (
    <div className='cart' >
    <div >
    <div className="container-general-cart">
    <div className="container-retroceso">
      <h1 className="titulo-retroceso">Carrito de compras</h1>
      <div className='container-retroceso__modal'>
      <Link to={"/"}><KeyboardBackspaceIcon /></Link>
      <ModalCart />
      </div>

      
    </div>
      
    </div>
    </div>
    <TarjetaCart imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691549823/CASCANUCES%20SALUDABLE/prod4_ukcwyo.png"} nombre={"hamburguesa Not Vegan"} stock={5} cantidad={5} />
    <TarjetaCart imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691549822/CASCANUCES%20SALUDABLE/prod6_sakyxp.png"} nombre={"Semillas hebra vegan"} stock={5} cantidad={5} />
    <TarjetaCart imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691548972/CASCANUCES%20SALUDABLE/prod3_qxcwbm.png"} nombre={"Pan rallado bdambo cereal"} stock={5} cantidad={5} />
    <TarjetaCart imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691548972/CASCANUCES%20SALUDABLE/prod1_f2xung.png"} nombre={"Jugo de naranjas proteico"} stock={5} cantidad={5} />
    <SelectorPago total={25500} />
    <div className='cart__boton'>
    <BotonFondoFijo text={"FINALIZAR COMPRA"} />
    </div>
   
    </div>
  )
}


export default Cart