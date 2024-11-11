import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../components/pages/Home'
import { Articles } from '../components/pages/Articles'
import { Header } from '../components/layout/Header'
import { Nav } from '../components/layout/Nav'
import { Sidedbar } from '../components/layout/Sidebar'
import { Footer } from '../components/layout/Footer'
import { Create } from '../components/pages/Create'
import { Search } from '../components/pages/Search'

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
                <Route path='/search/:query' element={<Search />} />
                <Route path='*' element={<div className='jumbo'><h1>Error 404</h1></div>} />
            </Routes>
        </section>
        <Sidedbar />
        <Footer />
    </BrowserRouter>
  )
}
