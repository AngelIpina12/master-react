import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../components/pages/Home'
import { Articles } from '../components/pages/Articles'

export const Router = () => {
  return (
    <BrowserRouter>
        <section id="content" className='content'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/articles' element={<Articles />} />
                <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
        </section>
    </BrowserRouter>
  )
}
