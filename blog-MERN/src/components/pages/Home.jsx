import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='jumbo'>
      <h1>Bienvenido a mi Blog</h1>
      <p>Este es un blog personal donde comparto mis pensamientos y experiencias.</p>
      <Link to="/articles" className='button'>Ver los artículos</Link>
    </div>
  )
}
