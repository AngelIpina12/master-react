import { useState } from 'react'
import { Home } from './components/pages/Home'
import { Articles } from './components/pages/Articles'
import { Create } from './components/pages/Create'

function App() {

  return (
    <div className='App'>
      <h1>Blog con React</h1>
      <Home />
      <Articles />
      <Create />
    </div>
  )
}

export default App
