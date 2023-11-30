import React from 'react'
import Encabezado from './Encabezado'
import Ejercicios from './Ejercicios'


function Card(props) {
    const informacion = props.informacion
  return (
    <div className='card'>
        <Encabezado/>
        <Ejercicios informacion = {informacion}/>
    </div>
  )
}

export default Card