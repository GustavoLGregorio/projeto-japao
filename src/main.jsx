import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import '/fonts/Poppins-Regular.ttf'
import '/fonts/Poppins-SemiBold.ttf'
import "https://kit.fontawesome.com/c9e475ae7e.js"

import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Culinaria from './pages/CulinariaPage.jsx'
import TurismoPage from './pages/TurismoPage.jsx'
import CulturaPop from './pages/CulturaPopPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/culinaria',
    element: <Culinaria />
  },
  {
    path: '/turismo',
    element: <TurismoPage />
  },
  {
    path: '/cultura-pop',
    element: <CulturaPop />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)