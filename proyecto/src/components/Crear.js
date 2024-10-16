import React from 'react'

export const Crear = () => {
  return (
    <div className="add">
        <h3 className="title">Añadir película</h3>
        <form>
        <input type="text" aria-placeholder="Título"/>
        <textarea placeholder="Desccripción"></textarea>
        <input type="submit" value="Guardar"/>
        </form>
    </div>
  )
}
