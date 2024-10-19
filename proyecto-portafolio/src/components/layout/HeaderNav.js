import React from 'react'
import { NavLink } from 'react-router-dom'


export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <span>AI</span>
            <h3>Ángel Ipiña DEV</h3>
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/home">Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio">Portafolio</NavLink>
                </li>
                <li>
                    <NavLink to="/services">Servicios</NavLink>
                </li>
                <li>
                    <NavLink to="/curriculum">Curriculum</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contacto</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
