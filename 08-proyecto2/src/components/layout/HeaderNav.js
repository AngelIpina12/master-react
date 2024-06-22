import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <span>AI</span>
        <h3>Angel Ipiña</h3>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to='/home' className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to='/portfolio' className={({isActive}) => isActive ? "active" : ""}>Portafolio</NavLink>
          </li>
          <li>
            <NavLink to='/services' className={({isActive}) => isActive ? "active" : ""}>Servicios</NavLink>
          </li>
          <li>
            <NavLink to='/curriculum' className={({isActive}) => isActive ? "active" : ""}>Currículum</NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={({isActive}) => isActive ? "active" : ""}>Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
