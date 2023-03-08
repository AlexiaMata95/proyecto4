import React from 'react'
import './menu.css';
import logo from './images/logo-dried.png'
import { useState } from 'react'
import Menuselection from './Menuselection'


const Menu = () => {
    const [selection, setselection] = useState('nada ');
    const handleChange = (ev) =>{
        setselection(ev.value)
        console.log(selection)
      }
return(
    <div className="App">
      <header className="App-header">
        <div className='center-header'>
          <a href='/menu'className='link'>
            Menú
          </a>
          <a href='/'><img src={logo} alt='Logo' className='logo'></img></a>
          <a href='/reservaciones'className='link'>
            Reservaciones
            </a>
        </div>
      </header>
      <section className='jumbotron'>
        <div className='nosotros '>
          <h1>Menú</h1>
          <h2>Seleccione la carta que desea a continuación: </h2>
          <select id="menu" name="menu" onChange={(e) => handleChange(e.target)}>
            <option value="Nada" selected>Seleccione una opción</option>
            <option value="Entradas">Entradas</option>
            <option value="Platos fuertes">Platos fuertes</option>
            <option value="Postres">Postres</option>
            <option value="Bebidas">Bebidas</option>
        </select>
        <Menuselection name={selection}/>
        </div>
      </section>
    </div>
  );
}
         

export default Menu