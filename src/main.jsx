import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx'
import Contact from './Pages/Contact.jsx'
import { RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },

  {
    path: "/about",
    element: <About/>
  },

  {
    path: "/services",
    element: <Services/>
  },

  {
    path: "/contact",
    element: <Contact/>
  },
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter>
    <App />
    </BrowserRouter> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
