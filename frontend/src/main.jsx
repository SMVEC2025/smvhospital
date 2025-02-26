import React, { Suspense } from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LuLoaderCircle } from "react-icons/lu";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div  className="loader_main"><span><LuLoaderCircle/></span></div>}>

    <App />
    </Suspense>

  </StrictMode>,
)
