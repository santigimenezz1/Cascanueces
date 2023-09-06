import "../FondoFijoProducto/fondoFijoProducto.css";

const FondoFijoProducto = () => {
  return (
    <div className="fondoFijoProducto">
      <div className="fondoFijo__containerText">
        <h3>Novedad</h3>
        <div>
          <h3 className="titulo__fondoFijoProducto" >Ahora dos sucursales</h3>
        </div>
        <div className="fondoFijo__containerText__direcciones">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "40px" }}
          >
            <h3 className="fondoFijoProducto__direccion" >*Tribunales: Dorrego 1668</h3>
            <h3 className="fondoFijoProducto__direccion2">*Abasto: Viamonte 1275 (Solo compras presenciales)</h3>
          </div>
          <div className="container__fondoFijoProducto__ultimoTexto">
            <h3 className="" style={{ fontSize: "18px" }}>
              Un espacio fruto de mucho mucho mucho trabajo.
            </h3>
            <h3>Desde hace ya casi 6 años!</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FondoFijoProducto;
