import { useEffect, useState } from "react";
import "../SectionCategory/categoria.css";
import EnlacesCategoria from "./EnlacesCategoria/EnlacesCategoria";
import TarjetaHoverCategoria from "./TarjetaCategory/TarjetaCategory";
import { db } from "../../../FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
import Filtros from "./Filtros/Filtros";
import EnlacesResponsive from "./EnlacesResponsive/EnlacesResponsive";
import AgregarImagen from "../AgregarImagen/AgregarImagen";

const Categoria = () => {
  const [data, setData] = useState([]);
  const { categoria } = useParams();

  const filtro = [...data];

  useEffect(() => {
    let productsColecction = collection(db, "products");
    let consulta;
    if (categoria) {
      consulta = query(productsColecction, where("categoria", "==", categoria));
    } else {
      consulta = productsColecction;
    }
    getDocs(consulta).then((res) => {
      let productos = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setData(productos);
    });
  }, [categoria]);

  const newData = [...data];
  const mayorMenor = (data) => {
    setData(data.sort((a, b) => a.precio - b.precio));
  };
  const menorMayor = (data) => {
    setData(data.sort((a, b) => b.precio - a.precio));
  };

  const filtrarEstado = (valor) => {
    const filtrado = data.filter((producto) => valor === data.nombre);
    setData(filtrado);
  };
  return (
    <div className="categoria">
      <div className="categoria__enalcesCategoria">
      <EnlacesResponsive />
        <EnlacesCategoria
        
          filtro={filtro}
          filtrarEstado={filtrarEstado}
          data={data}
          setData={setData}
        />
        
      </div>
      <div className="categoria__tarjetaProductos">
        <h1>{categoria}</h1>
        <div className="categoria__tarjetaProductos__filtros">
          <h2>Mostrar resultados: {data.length}</h2>
          <Filtros
            mayorMenor={mayorMenor}
            menorMayor={menorMayor}
            newData={newData}
          />
        </div>

        <div className="categoria__tarjetaProductos__tarjetas">
          {data.length > 0 ? (
            data.map((producto) => (
              <TarjetaHoverCategoria key={producto.id} producto={producto} />
            ))
          ) : (
            <>
              <Skeleton variant="rectangular" width={220} height={350} />
              <Skeleton variant="rectangular" width={220} height={350} />
              <Skeleton variant="rectangular" width={220} height={350} />
              <Skeleton variant="rectangular" width={220} height={350} />
              <Skeleton variant="rectangular" width={220} height={350} />
              <Skeleton variant="rectangular" width={220} height={350} />
              <Skeleton variant="rectangular" width={220} height={350} />
              <Skeleton variant="rectangular" width={220} height={350} />
              <Skeleton variant="rectangular" width={220} height={350} />
              <Skeleton variant="rectangular" width={220} height={350} />
              <Skeleton variant="rectangular" width={220} height={350} />
              <Skeleton variant="rectangular" width={220} height={350} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categoria;
