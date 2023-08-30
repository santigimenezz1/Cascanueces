import "../FondoFijo/fondoFijo.css";
import BotonFondoFijo from "./BotonFondoFijo/BotonFondoFijo";

const FondoFijo = () => {
  return (
    <div className="fondoFijo">
      <div className="fondoFijo__containerText">
        <h3>Novedad</h3>
        <div>
          <h3 className="text__nuestraSucursal" >Nuestra sucursal</h3>
        </div>
        <div className="fondoFijo__containerText__direcciones">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "40px" }}
          >
            <h3 style={{ fontSize: "30px" }}>Oroño 1161</h3>
            <h3 className="text__somosCascanuces" >Somos Cascanueces</h3>
          </div>
          <div>
            <h3 style={{ fontSize: "25px" }}>
              {" "}
              fruto de mucho amor y trabajo.
            </h3>
            <h3>Desde hace ya casi 4 años!</h3>
            <h3>Envíos a todo Rosario, VGG y Fisherton</h3>
          </div>
          <BotonFondoFijo text={"Sobre nosotross"} />
        </div>
      </div>
    </div>
  );
};

export default FondoFijo;
