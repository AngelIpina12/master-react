import React, { useRef } from 'react'

export const Form = () => {
    const nameInput = useRef();
    const surnameInput = useRef();
    const emailInput = useRef();
    const myBox = useRef();
    const show = e => {
        e.preventDefault();
        let {current: box} = myBox;
        box.classList.add('backgroundGreen');
        box.innerHTML = `Hola ${nameInput.current.value} ${surnameInput.current.value}`;
    }
  return (
    <div>
        <h1>Formulario</h1>
        <div ref={myBox} className='box'>
            <p>Hola</p>
        </div>
        <form onSubmit={show}>
            <input type="text" placeholder="Nombre" ref={nameInput} />
            <input type="text" placeholder="Apellidos" ref={surnameInput} />
            <input type="email" placeholder="Correo electrónico" ref={emailInput} />
            <button type="submit" value="Enviar">Enviar</button>
        </form>
        <button onClick={() => nameInput.current.select()}>Comenzar a escribir</button>
    </div>
  )
}
