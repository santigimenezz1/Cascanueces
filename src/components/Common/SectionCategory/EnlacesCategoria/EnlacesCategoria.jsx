import '../EnlacesCategoria/enlacesCategoria.css'
const EnlacesCategoria = () => {
  return (
    <div className="enlacesCategoria">
    <div className='enalcesCategoria__buscador'>
      <form className='enalcesCategoria__form'>
        <input className='enalcesCategoria__form__input' type='text' placeholder='Buscar Productos'></input>
        <button type='submit' className='enalces__form__button'>BUSCAR</button>
      </form>
      <div className='enlacesCategoria__enlaces'>
        <h1>Categorías de productos</h1>
        <div>
          <h1>Congelados</h1>
            <ul>
              <li>Caldito</li>
              <li>Chicken Fit Protein</li>
              <li>Frutos congelados</li>
              <li>Helados</li>
              <li>Medallones</li>

            </ul>
        </div>

        <div>
          <h1>Dulce</h1>
            <ul>
              <li>Alfajores</li>
              <li>Barritas</li>
              <li>Bombones</li>
              <li>Budines</li>
              <li>Chocolates</li>
              <li>Dulce de leche</li>
              <li>Dulces y mermeladas</li>
              <li>Galletitas</li>
              <li>Gio</li>
              <li>Medialunas integrales</li>
              <li>Pepas</li>
              <li>Pochoclo</li>
              <li>Postre</li>
              <li>Tortitas Healthy</li>
              <li>Wafles</li>
            </ul>
        </div>
        <div>
        <h1>Infaltables</h1>
          <ul>
            <li>Aceite de Chia</li>
            <li>Aceite de coco</li>
            <li>Aceite de Oliva</li>
            <li>Aderezos</li>
            <li>Algas</li>
            <li>Azúcar</li>
            <li>Bebidas</li>
            <li>Bebidas Probioticas</li>
            <li>Bebidas Vegetales</li>
            <li>Cacao en polvo</li>
            <li>Café</li>
            <li>Coco</li>
            <li>Conservas</li>
            <li>Especias</li>
            <li>Frutos Secos</li>
          </ul>
      </div>
      <h1>Salado</h1>
      <ul>
        <li>Chipá</li>
        <li>Chips</li>
        <li>Galletitas saldas</li>
        <li>Panes</li>
        <li>Pizzetas</li>
        <li>Tartas y empanadas</li>
        <li>Tortillas</li>
      
      </ul>
  </div>
      </div>
    </div>

   
  )
}

export default EnlacesCategoria