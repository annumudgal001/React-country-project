import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Contact } from './pages/Contact.jsx'
import { Country } from './pages/Country.jsx'
import { AppLayout } from './components/layout/AppLayout.jsx'
import { ErrorPage } from './ErrorPage.jsx'
import CountryDetails from './components/layout/CountryDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "country",
        element: <Country />
      },
      {
        path: "country/:id",
        element: <CountryDetails />
      }
    ]
  }
])
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App