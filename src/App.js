import React from 'react'
import './App.scss'
import MainRoutes from './routes'
import { Components } from './components'

function App() {
  return (
    <div>
      <Components.Navbar />
      <MainRoutes />
    </div>
  )
}

export default App