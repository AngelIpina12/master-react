import React from 'react'
import { useMayus } from '../hooks/useMayus';

export const TestsCustom = () => {
    const { mytext, mayus, minus, concat} = useMayus('Hola mundo');
  return (
    <>
        <div>Probando componentes personalizados {mytext}</div>
        <button onClick={mayus}>Mayus</button>
        <button onClick={minus}>Minus</button>
        <button onClick={() => concat("Adiooooos")}>Concat</button>
    </>
  )
}
