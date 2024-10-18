import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const ControlPanel = () => {
  return (
    <div>
        <h1>Panel de control</h1>
        <p>Elige alguna de las opciones</p>
        <nav>
            <ul>
                <li>
                    <NavLink to="/panel/home" className={({isActive}) => isActive ? "activated" : ""}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/panel/create" className={({isActive}) => isActive ? "activated" : ""}>Crear artículos</NavLink>
                </li>
                <li>
                    <NavLink to="/panel/manage" className={({isActive}) => isActive ? "activated" : ""}>Gestión de usuarios</NavLink>
                </li>
                <li>
                    <NavLink to="/panel/about" className={({isActive}) => isActive ? "activated" : ""}>Acerca de </NavLink>
                </li>
            </ul>
        </nav>
        <div>
            {/* Cargar componentes de las subrutas */}
            <Outlet/>
        </div>
    </div>
  )
}
