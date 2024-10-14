import React, { useEffect } from 'react'

export const AvisoComponent = () => {
    useEffect(() => {
        alert("EL componente AvisoComponent esta montado!!");
        return() => { alert("Componente desmontado!!!") }
    }, []);
  return (
    <div>
        <hr/>
        <h3>Hemos superado los 20 cambios</h3>
        <button onClick={e => { alert("Bienvenido!!!") }}>Mostrar alerta</button>
    </div>
  )
}
