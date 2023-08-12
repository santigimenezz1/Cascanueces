import '../NavBar/navBar.css'
import Enlaces from './Enlaces/Enlaces'
import Carrito from './Carrito/Carrito'
import Logo from './Logo/Logo'

const NavBar = () => {
  return (
    <div className='navBar'>
    <div className='navBar__logo'>
    <Logo />
    </div>
     
      <div className='navBar__enlaces'>
      <Enlaces />
      <Carrito />
      </div>
    </div>
  )
}

export default NavBar