import React from 'react'
import { Link } from 'react-router-dom'

// import './Home.css'

export const Home = () => {
  return (
    <div className='jumbo'>
      <h1>Bienvenido a mi Blog</h1>
<<<<<<< HEAD
      <p>Este es un blog personal donde comparto mis proyectos.</p>
=======
      <p>Este es un blog personal donde comparto mis experiencias.</p>
>>>>>>> 22710c67987250dffef96f1802716c739455f096
      <Link to="/articles" className='button'>Ver los artículos</Link>
    </div>
  )
}


