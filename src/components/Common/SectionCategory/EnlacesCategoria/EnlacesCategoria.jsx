import { Link } from 'react-router-dom'
import '../EnlacesCategoria/enlacesCategoria.css'
import { useFormik } from 'formik'
import { useState } from 'react'
const EnlacesCategoria = ( {filtro, filtrarEstado, data, setData} ) => {

 const [valor, setValor] = useState("")
 const newData = [...data]
  
  const {handleChange,handleSubmit} = useFormik({
    initialValues:{
      nombre:""
  
    },
    validateOnChange:false,
    onSubmit: (data)=>{
    console.log(data)
       
    },
  })

 console.log(newData)
 console.log(valor)
  
  return (
    <div className="enlacesCategoria">
    <div className='enalcesCategoria__buscador'>
      <form onSubmit={handleSubmit} className='enalcesCategoria__form'>
        <input onChange={handleChange } name='nombre' className='enalcesCategoria__form__input' type='text' placeholder='Buscar Productos'></input>
        <button type='submit' className='enalces__form__button'>BUSCAR</button>
      </form>
      <div className='enlacesCategoria__enlaces'>
        <h1>Categorías de productos</h1>
        <div>
          <h1>Congelados</h1>
            <ul>
             <Link className='link' to={"/categoria/caldito"}><li>Caldito</li></Link> 
              <Link className='link' to={"/categoria/caldito"} >Chicken Fit Protein</Link >
              <Link className='link' to={"/categoria/caldito"} >Frutos congelados</Link >
              <Link className='link' to={"/categoria/caldito"} >Helados</Link >
              <Link className='link' to={"/categoria/caldito"} >Medallones</Link >

            </ul>
        </div>

        <div>
        <h1>Dulce</h1>
        <ul>
              <Link className='link' to={"/categoria/caldito"} >Alfajores</Link >
              <Link className='link' to={"/categoria/caldito"} >Barritas</Link >
              <Link className='link' to={"/categoria/caldito"} >Bombones</Link >
              <Link className='link' to={"/categoria/caldito"} >Budines</Link >
              <Link className='link' to={"/categoria/caldito"} >Chocolates</Link >
              <Link className='link' to={"/categoria/caldito"} >Dulce de leche</Link >
              <Link className='link' to={"/categoria/caldito"} >Dulces y mermeladas</Link >
              <Link className='link' to={"/categoria/caldito"} >Galletitas</Link >
              <Link className='link' to={"/categoria/caldito"} >Gio</Link >
              <Link className='link' to={"/categoria/caldito"} >Medialunas integrales</Link >
              <Link className='link' to={"/categoria/caldito"} >Pepas</Link >
              <Link className='link' to={"/categoria/caldito"} >Pochoclo</Link >
              <Link className='link' to={"/categoria/caldito"} >Postre</Link >
              <Link className='link' to={"/categoria/caldito"} >Tortitas Healthy</Link >
              <Link className='link' to={"/categoria/caldito"} >Wafles</Link >
            </ul>
        </div>
        <div>
        <h1>Infaltable</h1>
        <ul>
            <Link className='link' to={"/categoria/caldito"} >Aceite de Chia</Link >
            <Link className='link' to={"/categoria/caldito"} >Aceite de coco</Link >
            <Link className='link' to={"/categoria/caldito"} >Aceite de Oliva</Link >
            <Link className='link' to={"/categoria/caldito"} >Aderezos</Link >
            <Link className='link' to={"/categoria/caldito"} >Algas</Link >
            <Link className='link' to={"/categoria/caldito"} >Azúcar</Link >
            <Link className='link' to={"/categoria/caldito"} >Bebidas</Link >
            <Link className='link' to={"/categoria/caldito"} >Bebidas Probioticas</Link >
            <Link className='link' to={"/categoria/caldito"} >Bebidas Vegetales</Link >
            <Link className='link' to={"/categoria/caldito"} >Cacao en polvo</Link >
            <Link className='link' to={"/categoria/caldito"} >Café</Link >
            <Link className='link' to={"/categoria/caldito"} >Coco</Link >
            <Link className='link' to={"/categoria/caldito"} >Conservas</Link >
            <Link className='link' to={"/categoria/caldito"} >Especias</Link >
            <Link className='link' to={"/categoria/caldito"} >Frutos Secos</Link >
          </ul>
      </div>
      <h1>Salado</h1>
      <ul>
        <Link className='link' to={"/categoria/caldito"} >Chipá</Link >
        <Link className='link' to={"/categoria/caldito"} >Chips</Link >
        <Link className='link' to={"/categoria/caldito"} >Galletitas saldas</Link >
        <Link className='link' to={"/categoria/caldito"} >Panes</Link >
        <Link className='link' to={"/categoria/caldito"} >Pizzetas</Link >
        <Link className='link' to={"/categoria/caldito"} >Tartas y empanadas</Link >
        <Link className='link' to={"/categoria/caldito"} >Tortillas</Link >
      
      </ul>
  </div>
      </div>
    </div>

   
  )
}

export default EnlacesCategoria