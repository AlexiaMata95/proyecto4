import React from 'react'

const Menuselection = ({name}) => {
  if(name==='Entradas'){
    return(
        <div className='menu'>
            <h1>Entradas</h1>
            <ul>
                <li>Tacos de cecina con cebolla, cilantro y limón</li>
                <li>Ensalada de nopales con cecina deshebrada y vinagreta de limón</li>
                <li>Queso fundido con cecina y tortillas hechas a mano</li>
            </ul>
        </div>
    )
  }else if(name==='Platos fuertes'){
    return(
        <div className='menu'>
            <h1>Platos fuertes</h1>
            <ul>
                <li>Tacos de cecina con frijoles charros y guacamole</li>
                <li>Arrachera de cecina a la parrilla con papas al romero y ensalada mixta</li>
                <li>Torta de cecina con aguacate, jitomate y mayonesa chipotle</li>
                <li>Huachinango a la talla con cecina y arroz rojo</li>
            </ul>
        </div>
    )
  } else if(name==='Postres'){
    return(
        <div className='menu'>
            <h1>Postres</h1>
            <ul>
                <li>Flan napolitano con cajeta y nueces</li>
                <li>Pay de queso con salsa de zarzamora</li>
                <li>Crepas con cajeta y nuez</li>
            </ul>
        </div>
    )
  } else if(name==='Bebidas'){
    return(
        <div className='menu'>
            <h1>Bebidas</h1>
            <ul>
                <li>Agua de jamaica</li>
                <li>Margarita de tamarindo</li>
                <li>Cerveza artesanal de la región</li>
            </ul>
        </div>
    )
  }
}

export default Menuselection