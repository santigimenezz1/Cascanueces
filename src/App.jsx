import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Carrusel from "./components/Common/SectionHome/Carrusel/Carrusel";
import FondoFijo from "./components/Common/SectionHome/FondoFijo/FondoFijo";
import TarjetaCategoria from "./components/Common/SectionHome/TarjetaCategoria/TarjetaCategoria";
import TarjetaOferta from "./components/Common/SectionHome/TarjetaOferta/TarjetaOferta";
import TarjetaProducto from "./components/Common/SectionHome/TarjetaProducto/TarjetaProducto";
import NavBar from "./components/Layout/NavBar/NavBar";
import AppRouter from "./Routes/AppRouter";
import CartContextComponent, { CartContext } from "./Context/CartContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextComponent>
          <favoritoContextComponent>
            <AppRouter />
          </favoritoContextComponent>
        </CartContextComponent>
      </BrowserRouter>
    </>
  );
}

export default App;
