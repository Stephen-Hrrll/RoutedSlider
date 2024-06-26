import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import {RouterProvider} from 'react-router-dom'
import {Router} from './Router'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router}>
    </RouterProvider>
  </React.StrictMode>,
)
