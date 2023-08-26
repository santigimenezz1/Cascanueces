import { Button } from "@mui/material";
import "../TarjetaOferta/tarjetaOferta.css";

const TarjetaOferta = ({ producto, dcto, cuotas, image }) => {
  return (
    <div className="container-TarjetaOfertas">
      <div className="container-info">
        <h3 className="tarjetaOfertas-producto">{producto}</h3>
        <h2 className="titulo-tarjetaOfertas">
          HASTA {dcto}% OFF Y {cuotas} CUOTAS SIN INTERES
        </h2>
        <div className="boton-tarjetaIOfertas">
          <Button text={"Ver mas"} />
        </div>
      </div>
      <div className="conintainer-image">
        <img className="image" src={image}></img>
      </div>
    </div>
  );
};

export default TarjetaOferta;
