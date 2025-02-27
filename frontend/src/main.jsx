import React, { Suspense } from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LuLoaderCircle } from "react-icons/lu";
import './index.css'
import App from './App.jsx'
import axios from 'axios';

const api = axios.create({
  baseURL: 'smvhospital-3p78.vercel.app/api',
});

// Export the Axios instance
export { api };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div  className="loader_main"><span><LuLoaderCircle/></span></div>}>

    <App />
    </Suspense>

  </StrictMode>,
)
