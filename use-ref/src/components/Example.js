import React, { useState, useEffect, useRef } from 'react'

export const Example = () => {
    const [numberGreets, setNumberGreets] = useState(0);
    const greetsInQueue = useRef(numberGreets);
    useEffect(() => {
        greetsInQueue.current = numberGreets;
        setTimeout(() => {  
            console.log('Mensajes en fila ' + greetsInQueue.current);
        }, 2000);
    }, [numberGreets]);
    const sendGreets = e => {
        setNumberGreets(numberGreets + 1);
    }
  return (
    <div>
        <h1>Ejemplo</h1>
        <h2>Saludos enviados: {numberGreets}</h2>
        <button onClick={sendGreets}>Enviar saludo</button>
        <hr/>
    </div>
  )
}
