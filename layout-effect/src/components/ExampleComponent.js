import React, { useEffect, useLayoutEffect, useState, useRef } from 'react'

export const ExampleComponent = () => {
    const [show, setShow] = useState(false);
    const box = useRef(null);
    const button = useRef(null);

    useLayoutEffect(() => {
        console.log('useLayoutEffect');
    }, []);

    useEffect(() => {
        console.log('useEffect');
        if(box.current == null) return;
        const {bottom} = box.current.getBoundingClientRect();
        box.current.style.marginTop = `${bottom + 50}px`;
    }, [show]);
    
  return (
    <div>
        <h1>Ejemplo useEffect y useLayoutEffect</h1>
        <button ref={button} onClick={() => setShow(!show)}>Mostrar/Ocultar</button>
        {show && (
            <div ref={box} id='box'>
            </div>
        )}
    </div>
  )
}
