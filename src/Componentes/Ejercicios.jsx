import React from 'react'

function Ejercicios(props) {
    const informacion = props.informacion
  return (
    <article className='Ejer'>
        <div className='imag'>
            <img src={informacion.imgurl} alt="" />
        </div>
        <div className='informac'>
            <h2>
                {informacion.title }
            </h2>
            <p className='desc'>
                {informacion.description}
            </p>
        </div>
        <div>
            <i className='icon'>
                <img src="./Icons.svg" alt="icon" />
            </i>
        </div>
    </article>
  )
}

export default Ejercicios