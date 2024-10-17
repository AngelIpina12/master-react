import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div>
        <h1>Error 404</h1>
        <p>Ésta es la página de error</p>
        <Link to="/home">Volver al inicio</Link>
    </div>
  )
}
