import React from 'react'
import { PropTipes } from 'prop-types'

export const Props = ({nombre, apellidos, ficha}) => {
  return (
    <div>
        <h1>Comunicacion entre componentes</h1>    
        <ul>
            <li>{nombre}</li>
            <li>{apellidos}</li>
            <li>{ficha.altura}</li>
        </ul>
    </div>
  )
}

Props.propTipes = {
    nombre: PropTipes.string,
    apellidos: PropTipes.string,
    ficha: PropTipes.object,
}

Props.defaultProps = {
    nombre: 'No hay nombre',
    apellidos: 'No hay apellidos',
}