import React from "react"
import { Route, Routes, BrowserRouter, NavLink, Navigate } from "react-router-dom"
import { Home } from "../components/Home"
import { Articles } from "../components/Articles"
import { Contact } from "../components/Contact"
import { Error } from "../components/Error"
import { Person } from "../components/Person"
import { ControlPanel } from "../components/ControlPanel"
import { HomePanel } from "../components/panel/HomePanel"
import { Create } from "../components/panel/Create"
import { Manage } from "../components/panel/Manage"
import { About } from "../components/panel/About"

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
                    <li>
                        <NavLink to="/panel" className={({isActive}) => isActive ? "activated" : ""}>Panel de control</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/articles" element={<Articles/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/person/:name/:surname" element={<Person/>}></Route>
                <Route path="/person/:name" element={<Person/>}></Route>
                <Route path="/person" element={<Person/>}></Route>
                <Route path="/redirect" element={<Navigate to="/person/Angel/Ipiña"/>}></Route>
                <Route path="/panel/*" element={<ControlPanel/>}>
                    <Route index element={<ControlPanel/>}/>
                    <Route path="home/" element={<HomePanel/>}/>
                    <Route path="create/" element={<Create/>}/>
                    <Route path="manage/" element={<Manage/>}/>
                    <Route path="about/" element={<About/>}/>
                </Route>
                <Route path="*" element={<Error/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}