import "../NavBarMobile/navBarMobile.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Link } from "react-router-dom";
import ModalInicioSesion from "../ModalInicioSesion/ModalInicioSesion";
import UserLogin from "../UserLogin/UserLogin";
import { useContext, useState } from "react";
import { CartContext } from "../../../../Context/CartContext";
import Enlaces from "../Enlaces/Enlaces";
import Carrito from "../Carrito/Carrito";

const NavBarMobile = () => {
  const { usuarioOn, setUsuarioOn, user, setUser } = useContext(CartContext);
  const [burguerOn, setBurguerOn] = useState(true)

  return (
    <div className="container__navBarMobile">
    
    <div className="navBarMobile">
      <div className="navBar__logo__mobile">
        <img onClick={()=>setBurguerOn(!burguerOn)}  style={{width:"30px", cursor:"pointer",padding:"5px"}} src="https://res.cloudinary.com/dcf9eqqgt/image/upload/v1693347152/CASCANUCES%20SALUDABLE/menu_xat1up.png"></img>
      </div>

      <div className="navBar__enlaces">
     
      <div className="navBar__enlaces__icons">
          <div className="navBar__enlaces__icons__corazon">
            <Link className="link__corazon" to={"/favorito"}>
              <FavoriteBorderIcon fontSize="medium" />
            </Link>
          </div>
          <div className="navBar__enlaces__icons__login">
            {usuarioOn ? (
              <UserLogin
                user={user}
                usuarioOn={usuarioOn}
                setUsuarioOn={setUsuarioOn}
              />
            ) : (
              <ModalInicioSesion
                setUser={setUser}
                usuarioOn={usuarioOn}
                setUsuarioOn={setUsuarioOn}
              />
            )}
          </div>
          <Carrito />
        </div>
      </div>
      </div>
      <div  className={burguerOn ? "contenedor__enlaces__mobile" : "contenedor__enlaces__mobileOff"  }>
       <div className="container__enlaces">
      <Enlaces />
      </div>
      </div>
    </div>
  );
};

export default NavBarMobile;
