import "../TarjetaCart/tarjetaCart.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ContadorUnidades from "../../SectionDetalle/ContadorUnidades/ContadorUnidades";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../../../Context/CartContext";

const TarjetaCart = ({ producto }) => {
  const { cart, deleteCart, addToCart } = useContext(CartContext);
  let totalTarjeta = producto.cantidad * producto.precio;

  const mostrarPrecioConFormato = (precio, cantidad) => {
    //cambiar formato del precio
    let total = precio * cantidad;
    return total.toLocaleString("es-ES");
  };

  const onAdd = (valor) => {
    let productCart = { ...producto, cantidad: valor };
    addToCart(productCart);
  };

  const agregarUnidad = (valor) => {
    let nuevo = valor + 1;
    onAdd(nuevo);
  };
  const quitarUnidad = (valor) => {
    let nuevo = valor > 1 ? valor - 1 : 1;
    onAdd(nuevo);
  };
  return (
    
    <div className="container-terminarCompraCart">
    
      <div className="container-tituloImageCart">
        <span className="span"></span>
        <Link to={`/detalle/${producto.id}`}>
          <img
            className="terminarCompra-imageCart "
            src={producto.imagenPrincipal}
          ></img>
        </Link>
        <h1 className="terminarCompra-title">{producto.nombre}</h1>
        
        <div className="cart-mobile">
          <DeleteForeverIcon fontSize="small" className="icon-trash" />
        </div>
      </div>

      <div className="container-contadorCart">
        <ContadorUnidades
          stock={producto.stock}
          initial={producto.cantidad}
          agregarUnidad={agregarUnidad}
          quitarUnidad={quitarUnidad}
        />
             
      <h2 className="precio-tarjetaCart">
          ${mostrarPrecioConFormato(producto.precio, producto.cantidad)}
        </h2>
        <div onClick={() => deleteCart(producto.id)} >
          <DeleteForeverIcon className="icon-trashCart" />
        </div>
      </div>
    </div>
    
  );
};
export default TarjetaCart;
