import "../ContadorUnidades/contadorUnidades.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

const ContadorUnidades = ({initial, stock}) => {
  const [pantalla, setPantalla] = useState(initial);

  const incrementarValor = () => {
    pantalla === stock
      ? setPantalla(pantalla(stock))
      : setPantalla(pantalla + 1);
    setPantalla(stock > 0 ? pantalla + 1 : 0);
  };
  const decrementarValor = () => {
    pantalla > 1 && setPantalla(pantalla - 1);
  };
 
  return (
    <section className="container-agregandoProductoCarrito">
      <div className="container-contadorBoton">
        <button onClick={()=>decrementarValor()} className="botones">
          <RemoveIcon />
        </button>
        <h1 className="pantalla">{pantalla}</h1>
        <button onClick={()=>incrementarValor()}  className="botones">
          <AddIcon />
        </button>
      </div>
      {pantalla === stock ? (
        <h4 style={{ fontSize: "13px", color: " rgb(119, 160, 142)", margin:"3px" }}>Maximo alcanzado</h4>
      ) : (
        <h4 className="maximoAlcanzado">Maximo alcanzado</h4>
      )}
      {location.pathname !== "/Cart" && (
        <div>
        <button className="contadorUnidades__button">Agregar al carrito</button>
        </div>
      )}
      <div></div>
    </section>
  );
};
export default ContadorUnidades;
