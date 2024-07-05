import React, { useRef } from 'react'

export const Form = () => {

    const nameRef = useRef();
    const surnameRef = useRef();
    const emailRef = useRef();
    const myBox = useRef();
    const show = e => {
        e.preventDefault();
        console.log(myBox);
        let {current: box} = myBox;
        box.classList.add("new-text")
        box.innerHTML = "Formulario enviado!"
    }
    

  return (
    <div>
        <h1>Formulario</h1>
        <div ref={myBox}>

        </div>
        <form onSubmit={show}>
            <input type='text' placeholder='Nombre' ref={nameRef}/><br/>
            <input type='text' placeholder='Apellidos' ref={surnameRef}/><br/>
            <input type='email' placeholder='Correo electrónico' ref={emailRef}/><br/>
            <input type='submit' placeholder='Enviar'/>
        </form>
    </div>
    
  )
}
