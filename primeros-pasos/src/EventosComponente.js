import React from 'react'

export const EventosComponente = () => {
    const hasDadoClick = (e, nombre) => {
        alert(`Has dado click al boton!!! ${nombre}`);
    }
    const hasDadoDobleClick = (e) => {
        alert('Has dado doble click!!!');
    }
    const hasEntrado = (e, accion) => {
        console.log(`Has ${accion} a la caja con el mouse!!!`);
    }
    const estasDentro = e => { console.log("Estas dentro del input, mete tu nombre!!!") }
    const estasFuera = e => { console.log("Estas fuera del input!!!") }

  return (
    <div>
        <p>
            {/* Evento click */}
            <button onClick={(e) => hasDadoClick(e, "Boton 1")}>Dame click!!!</button>
        </p>
        <p>
            {/* Evento doble click */}
            <button onDoubleClick={ hasDadoDobleClick }>Dame dobe click!!!</button>
        </p>
        {/* Evento onMouseEnter onMouseLeave */}
        <div id='caja' onMouseEnter={(e) => hasEntrado(e, "entrado")} onMouseLeave={(e) => hasEntrado(e, "salido")}>Pasa por encima!!!</div>
        <p>
            {/* Evento onFocus onBlur */}
            <input type='text' onFocus={estasDentro} onBlur={estasFuera} placeholder='Introduce tu nombre'/>
        </p>
    </div>
  )
}
