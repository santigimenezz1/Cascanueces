import '../FondoFijoProducto/fondoFijoProducto.css'

const FondoFijoProducto = () => {
  return (
    <div className='fondoFijoProducto'>
    <div className='fondoFijo__containerText'>
    <h3>Novedad</h3>
    <div>
    <h3 style={{fontSize:"60px"}}>Ahora dos sucursales</h3>
    </div>
    <div className='fondoFijo__containerText__direcciones'>
    <div style={{display:"flex",flexDirection:"column", gap:"40px"}}>
    <h3 style={{fontSize:"30px"}}>*Tribunales: Dorrego 1668</h3>
    <h3>*Abasto: Viamonte 1275 (Solo compras presenciales)</h3>
    </div>
    <div>
    <h3 style={{fontSize:"25px"}}>Un espacio fruto de mucho mucho mucho trabajo.</h3>
    <h3>Desde hace ya casi 6 años!</h3>
    </div>
    </div>
    </div>
   

    </div>
  )
}

export default FondoFijoProducto