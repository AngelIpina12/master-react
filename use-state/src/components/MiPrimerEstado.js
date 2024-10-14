import React, { useState } from 'react'

export const MiPrimerEstado = () => {
    const [nombre, setNombre] = useState("Angel Ipiña");
    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo);
        console.log(e.target);
    }

  return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong className='label'>
            {nombre}
        </strong>
        &nbsp;
        <button onClick={e => cambiarNombre(e, "Francisco")}>Cambiar nombre por Francisco</button>
        &nbsp;
        <input type='text' onChange={e => cambiarNombre(e, e.target.value)}></input>
    </div>
  )
}
