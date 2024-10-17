import React from 'react'
import { useParams } from 'react-router-dom'

export const Person = () => {
    const {name, surname} = useParams();

  return (
    <div>
        <h1>Página de persona: {name} {surname}</h1>
        <p>Ésta es la página de persona</p>
    </div>
  )
}
