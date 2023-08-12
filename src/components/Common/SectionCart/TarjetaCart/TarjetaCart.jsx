import "../TarjetaCart/tarjetaCart.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ContadorUnidades from "../../SectionDetalle/ContadorUnidades/ContadorUnidades";
import { Link } from "react-router-dom";

const TarjetaCart = ({imagen, nombre, stock, cantidad}) => {


  return (
    <div className="container-terminarCompra">
      <div className="container-tituloImage">
        <span className="span"></span>
        <Link>
          <img className="terminarCompra-image" src={imagen}></img>
        </Link>
        <h1 className="terminarCompra-title">{nombre}</h1>
        <div className="cart-mobile" >
          <DeleteForeverIcon fontSize="small" className="icon-trash" />
        </div>
      </div>

      <div className="container-contador">
        <ContadorUnidades
          stock={stock}
          initial={cantidad}
        />
        <h2 className="precio-tarjetaCart">
          ${2500}
        </h2>
        <div className="icon-delete">
          <DeleteForeverIcon className="icon-trash" />
        </div>
      </div>
    </div>
  );
};
export default TarjetaCart;
