import React from 'react'
import './reservaciones.css';
import logo from './images/logo-dried.png'
import { useState, useEffect, useCallback } from 'react'
import { db } from './firebase';
import {
  onSnapshot,
  collection,
  addDoc
} from 'firebase/firestore'

function Reservaciones() {
  const [register, setregister] = useState([]);
  const [form, setform] = useState(null);
  
  const getData = useCallback(() => {
    let arrData=[];
    onSnapshot(collection(db,'reservaciones'), (snapshot) => {
      snapshot.docs.forEach((item) =>{
        console.log(item.data())
        arrData.push({
          ...item.data(),
          id:item.id
        })
        setregister(arrData)
      })
    })
  },[]);

  const createReg = (() =>{
    if(form){
    addDoc(collection(db,'reservaciones'), form)}
    else{
      alert('Formulario vacío!')
    }
    getData()
  })

  const handleChange = (ev) =>{
    setform({
      ...form,
      [ev.name]: ev.value
    })
    console.log(form)
  }
  useEffect(() => {
   getData()
  }, []);
  

  return (
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
          <h1>Reservaciones</h1>
          <h2>Ingrese sus datos para realizar una reservación</h2>
          <h3>Cuenta con 15 minutos de tolerancia, después de los cuales se cancelará su reservación</h3>
          <label className='etiquetas' >Nombre:</label>
          <input type="text" name="Nombre" onChange={(e) => handleChange(e.target)} placeholder='Nombre'/><br />
          <label className='etiquetas'  >Apellido:</label>
          <input type="text" name="Apellido" onChange={(e) => handleChange(e.target)} placeholder='Apellido'/><br />
          <label className='etiquetas' >Fecha y hora:</label>
          <input type="datetime-local" name="Fecha" onChange={(e) => handleChange(e.target)} placeholder='Fecha'/><br />
          <label className='etiquetas' >Número de personas:</label>
          <input type="number" name="Personas" onChange={(e) => handleChange(e.target)} placeholder='No. de personas'/><br/>
          <button onClick={() => createReg()}> Guardar </button>
          
        </div>
      </section>
    </div>
  );
}

export default Reservaciones