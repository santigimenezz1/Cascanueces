import "../TarjetaModal/tarjetaModal.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";

const TarjetaModal = ({ producto }) => {
  const mostrarPrecioConFormato = (precio, cantidad) => {
    //cambiar formato del precio
    let total = precio * cantidad;
    return total.toLocaleString("es-ES");
  };

  return (
    <div className="container-terminarCompra">
      <div className="container-tituloImage">
        <span className="span"></span>
        <Link to={`/detalle/${producto.id}`}>
          <img
            className="terminarCompra-image"
            src={producto.imagenPrincipal}
          ></img>
        </Link>
        <h1 className="terminarCompra-title">{producto.nombre}</h1>
        <div className="cart-mobile">
          <DeleteForeverIcon fontSize="small" className="icon-trash" />
        </div>
      </div>

      <div className="container-contador">
        <h2 className="precio-tarjetaCart">
          ${mostrarPrecioConFormato(producto.precio, producto.cantidad)}
        </h2>
      </div>
    </div>
  );
};
export default TarjetaModal;
