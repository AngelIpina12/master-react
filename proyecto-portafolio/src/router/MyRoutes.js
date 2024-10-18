import React from 'react'
import {Routes, Route, BrowserRouter, NavLink} from "react-router-dom"
import { Home } from '../components/Home'
import { Portfolio } from '../components/Portfolio'
import { Services } from '../components/Services'
import { Curriculum } from '../components/Curriculum'
import { Contact } from '../components/Contact'
import { HeaderNav } from '../components/layout/HeaderNav'
import { Footer } from '../components/layout/Footer'

export const MyRoutes = () => {
  return (
    <BrowserRouter>
        {/* {Header y navegación} */}
        <HeaderNav/>
        {/* Contenido central */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* Footer */}
        <Footer/>
    </BrowserRouter>
  )
}
