import React, { useState } from 'react'
import { SaveInStorage } from '../helpers/SaveInStorage'

export const Crear = () => {
  const titleComponent = "Añadir película"

  const [peli, setPeli] = useState({
    title: '',
    description: ''
  })

  const {title, description} = peli

  const getFormData = (e) => {
    e.preventDefault();
    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;
    let peliInfo = {
      id: new Date().getTime(),
      title,
      description
    }
    setPeli(peliInfo);
    SaveInStorage("pelis", peliInfo)
    SaveInStorage("copias", peliInfo)
  }

  return (
    <div className="add">
        <h3 className="title">{titleComponent}</h3>
        <strong>{(title && description) && "Has creado la película: " + title}</strong>
        <form onSubmit={getFormData}>
          <input type="text" id='title' name='title' aria-placeholder="Título"/>
          <textarea id='description' name='description' placeholder="Descripción"></textarea>
          <input type="submit" id='save' value="Guardar"/>
        </form> 
    </div>
  )
}
