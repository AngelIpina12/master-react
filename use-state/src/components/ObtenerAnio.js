import React, { useState } from 'react'
import PropTypes from "prop-types" 

export const ObtenerAnio = (props) => {
    const [anio, setAnio] = useState(props.anio)
    const proximoAnio = e => { setAnio(anio + 1) }
    const anioAnterior = e => { setAnio(anio - 1) }
    const cambiarAnio = e => { 
        let dato = parseInt(e.target.value);
        if(Number.isInteger(dato)){
            setAnio(dato);    
        }else{
            setAnio(props.anio);
        }
        
    }
  return (
    <div>
        <h1>Obtener Anio</h1>
        <p>El anio es: {anio}</p>
        <button onClick={proximoAnio}>Proximo anio</button>
        <button onClick={anioAnterior}>Anio anterior</button>
        <input onChange={cambiarAnio} type='text' placeholder='Cambiar el año'/>
    </div>
  )
}

ObtenerAnio.propTypes = {
    anio: PropTypes.number.isRequired
}