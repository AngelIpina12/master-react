import React from "react"
import { Route, Routes, Link, BrowserRouter, NavLink } from "react-router-dom"
import { Home } from "../components/Home"
import { Articles } from "../components/Articles"
import { Contact } from "../components/Contact"
import { Error } from "../components/Error"

export const MainRouter = () => {
    return (

        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/home" className={({isActive}) => isActive ? "activated" : ""}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/articles" className={({isActive}) => isActive ? "activated" : ""}>Artículos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({isActive}) => isActive ? "activated" : ""}>Contacto</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/articles" element={<Articles/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="*" element={<Error/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}