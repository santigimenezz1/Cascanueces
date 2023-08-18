import { createContext, useState } from "react";

export const CartContext = createContext();
const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [ocultarBoton, setOcultarBoton] = useState(true);

  const addToCart = (item) => {
    const existe = existCart(item.id);
    if (existe) {
      let nuevoArray = cart.map((producto) => {
        //tener en cuenta que el map devuelve un nuevo array y en cada vuelta se an agregando los elementos ==> [ {1} {2} {3} ]
        if (producto.id === item.id) {
          return { ...item, cantidad: item.cantidad };
        } else {
          return producto;
        }
      });
      setCart(nuevoArray);
    } else {
      setCart([...cart, item]);
    }
  };
  const clearCart = ()=>{
    setCart([])
  }
  const existCart = (id) => {
    const exist = cart.some((producto) => producto.id === id);
    return exist;
  };
  const deleteCart = (id) => {
    const newArr = cart.filter((producto) => producto.id !== id);
    setCart(newArr);
  };
  const calcularFinal = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.precio * elemento.cantidad;
    }, 0);
    return total;
  };
  const calcularTotalProductos = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.cantidad;
    }, 0);
    return total;
  };

  let data = {
    cart,
    clearCart,
    deleteCart,
    addToCart,
    calcularFinal,
    calcularTotalProductos
    
    
  };
  
  return (
    <>
      <CartContext.Provider value={data}>{children}</CartContext.Provider>
    </>
  );
};

export default CartContextComponent;
