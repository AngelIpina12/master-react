import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../components/pages/Home'
import { Articles } from '../components/pages/Articles'
import { Header } from '../components/layout/Header'
import { Nav } from '../components/layout/Nav'
import { Sidedbar } from '../components/layout/Sidedbar'
import { Footer } from '../components/layout/Footer'
import { Create } from '../components/pages/Create'

export const Router = () => {
  return (
    <BrowserRouter>
        <Header />
        <Nav />
        <section id="content" className='content'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/articles' element={<Articles />} />
                <Route path='/create' element={<Create />} />
                <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
        </section>
        <Sidedbar />
        <Footer />
    </BrowserRouter>
  )
}
