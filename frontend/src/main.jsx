import React, { Suspense } from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div  className="loader_main"><img src="/smvloader.svg" alt="" /></div>}>

    <App />
    </Suspense>

  </StrictMode>,
)
