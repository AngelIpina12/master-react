import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Person = () => {
    const {name, surname} = useParams();
    const navigate = useNavigate()

    const send = (e) => {
      e.preventDefault();
      let name = e.target.name.value;
      let surname = e.target.surname.value;
      let url = `/person/${name}/${surname}`;
      if(name.length <= 0 && surname.length <= 0){
        navigate("/home");
      }else if(name === "contact"){
        navigate("/contact");
      }else{
        navigate(url);
      }
    }

  return (
    <div>
      {!name && <h1>No hay ninguna persona que mostrar</h1>}
      {name && <h1>Página de persona: {name} {surname}</h1>}
      <p>Ésta es la página de persona</p>
      <form onSubmit={send}>
        <input type='text' name='name'/>
        <input type='text' name='surname'/>
        <input type='submit' name='send' value="enviar"/>
      </form>
    </div>
  )
}
