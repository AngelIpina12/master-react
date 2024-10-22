import React, { useContext } from 'react'
import { TestContext } from '../context/TestContext';

export const Login = () => {
  const {user, setUser} = useContext(TestContext);
  const saveData = (e) => {
    e.preventDefault();
    let user = {
      nick: e.target.nick.value,
      name: e.target.name.value,
      web: e.target.web.value
    }
    setUser(user);
  }

  return (
    <div>
    <h1>Bienvenido a la página de login</h1>
    <p>Esta es la página de login de la aplicación</p>
    <form className='login' onSubmit={saveData}>
      <input type="nick" name="nick" placeholder="Nick del usuario" />
      <input type="text" name="name" placeholder="Nombre de usuario" />
      <input type="text" name="web" placeholder="Web del usuario" />
      <input type="submit" value="Enviar" />
    </form>
  </div>
  )
}
