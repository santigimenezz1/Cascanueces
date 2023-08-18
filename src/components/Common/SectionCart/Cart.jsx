
import BotonFondoFijo from '../SectionHome/FondoFijo/BotonFondoFijo/BotonFondoFijo'
import TarjetaCart from './TarjetaCart/TarjetaCart'
import SelectorPago from './TarjetaSelectorPago/TarjetaSelectorPago'
import '../SectionCart/cart.css'
import { Modal } from '@mui/material'
import ModalCart from './Modal/Modal'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../../Context/CartContext'
import ModalFinalizarCompra from './ModalFinalizarCompra/ModalFinalizarCompra'


const Cart = () => {
  const {cart, calcularFinal} = useContext(CartContext)
  return (
    <div className='cart' >
    <div >
    <div className="container-general-cart">
    <div className="container-retroceso">
      <h1 className="titulo-retroceso">Carrito de compras</h1>
      <div className='container-retroceso__modal'>
      <Link to={"/"}><KeyboardBackspaceIcon fontSize='large' /></Link>
      {
        cart.length > 0 &&
        <ModalCart nombreBoton={"Borrar el carrito"} titulo={"Borrar el carrito"} subtitulo={"¿Seguro que quieres eliminar todos los productos?"}  />
      }
      </div>   
    </div>  
    </div>
    </div>
    {
        cart.map((producto)=>(
          <TarjetaCart key={producto.id} producto={producto} />
        ))
    } 
    {
      cart.length > 0
      ?  
      <>
      <SelectorPago total={calcularFinal()} />
      <div className='cart__boton'>
      <ModalFinalizarCompra />

      </div> 
      </>
      : 
      <div className={"container__cartVacion"}>
      <h1>No hay productos en el carrito</h1>
      <Link to={"/categoria"}>
      <BotonFondoFijo text={"Seguir comprando"} />
      </Link>
      </div>
      
    }
         
       
        
    </div> 
  )
}


export default Cart