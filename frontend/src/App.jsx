import React from 'react'
import Home from './pages/Home'
import { AppProvider } from './context/AppContext'
import './App.css'
function App() {
  return (
    <>
    <AppProvider>
    <Home/>
    </AppProvider>
    </>
  )
}

export default App