import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TarjetaHover from "../TarjetasHover/TarjetaHover";
import '../TarjetaCarruselResponsive/tarjetaCarrusel.css'

const MyCarousel = ( {data} ) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="tarjeta__carrusel" style={{ height:"auto", width:"340px"}}>
    <Carousel  responsive={responsive}>
    {
         Object.keys(data).length > 0 &&(
         data.map((producto)=>(
          <div style={{ border:"1px solid red"}} key={producto.id}>
          <TarjetaHover  producto={producto} />
          </div>
         ))
         )
    }
     
    </Carousel>
    </div>
  ); 
};

export default MyCarousel;
