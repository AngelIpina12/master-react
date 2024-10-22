import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Home } from '../components/Home'
import { Login } from '../components/Login'
import { Articles } from '../components/Articles'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { TestContext } from '../context/TestContext'

export const AppRouter = () => {
  const {user, setUser} = useContext(TestContext);
  return (
    <BrowserRouter>
      <header className='header'>
        <nav>
          <div className='header-title'>
            <h2>Aprendiendo el useContext</h2>
          </div>
          <ul>
            <li><NavLink to="/home">Inicio</NavLink></li>
            <li><NavLink to="/articles">Articulos</NavLink></li>
            <li><NavLink to="/about">Acerca de</NavLink></li>
            <li><NavLink to="/contact">Contacto</NavLink></li>
            {user.hasOwnProperty("nick") && user.nick !== null ? (
              <>
                <li><NavLink to="/login">{user.name}</NavLink></li>
                <li><a href="#" onClick={(e) => {
                  e.preventDefault();
                  setUser({})
                }}>Cerrar sesión</a></li>
              </>
            ) : (
              <li><NavLink to="/login">Identificarse</NavLink></li>
            )}
          </ul>
        </nav>
      </header>
      <section className='content'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={(<div>
              <h1>404</h1>
              <p>No se encontró la página</p>
          </div>)} />
        </Routes>
      </section>
    </BrowserRouter>
  )
}
