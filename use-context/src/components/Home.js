import React, { useContext } from 'react'
import { TestContext } from '../context/TestContext';

export const Home = () => {
  const {user, setUser} = useContext(TestContext);
  return (
    <div>
      <h1>Bienvenido a la página de inicio</h1>
      <p>Esta es la página de inicio de la aplicación</p>
      <p>Nombre del usuario: {user.name}</p>
      <p>Web del usuario: {user.web}</p>
    </div>
  )
}
