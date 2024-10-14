import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {
    const [usuario, setUsuario] = useState("Angel Ipiña");
    const [fecha, setFecha] = useState("23-01-2002");
    const [contador, setContador] = useState(0)
    const modUsuario = e => {
        setUsuario(e.target.value)
    }
    const cambiarFecha = e => {
        setFecha(Date.now())
    }

    // Solo se ejecuta una vez, solo al cargar el componente
    useEffect(() => {
        console.log("Has cargado el componente PruebasComponent!!!")
    }, [])

    // Se ejecuta solo si cambio el usuario
    useEffect(() => {
        setContador(contador+1)
        console.log("Has cargado el componente PruebasComponent!!!")
    }, [usuario, fecha])

  return (
    <div>
        <h1>El efecto - Hook useEffect</h1>
        <strong>{usuario}</strong>
        <br/>
        <strong className={contador >= 10 ? 'label label-green' : 'label'}>{fecha}</strong>
        <br/>
        <input type='text' onChange={modUsuario} placeholder='Cambiar el nombre'/>
        <button onClick={cambiarFecha}>Cambiar fecha</button>
        {usuario === "ANGEL" && <AvisoComponent/>}
    </div>
  )
}
