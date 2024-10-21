import React, { useRef, useState } from 'react'
import { Employees } from './Employees'

export const Manage = () => {
    const [name, setName] = useState("")
    const [page, setPage] = useState(1)
    const manager = useRef();
    const asignManager = () => {
        setName(manager.current.value)
    }

  return (
    <div>
        <h1>Nombre del gestor: {name}</h1>
        <input type='text' ref={manager} onChange={asignManager} placeholder='Introduce el nombre del gestor'/>
        <h2>Listado de empleados</h2>
        <p>Los usuarios son gestionados por {name} vienen del jsonplaceholder...</p>
        <button onClick={() => setPage(1)}>Página 1</button>
        <button onClick={() => setPage(2)}>Página 2</button>
        <Employees page={page} />
    </div>
  )
}
