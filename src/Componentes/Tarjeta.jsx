import React from 'react'
import Card from './Card'
function Tarjeta(props) {
    const informacion = props.informacion
  return (
    <section className='tarj'>
        {informacion.map(info => {
            return (
                <Card informacion ={info}/>
            )
        })}
    </section>
  )
}

export default Tarjeta
