import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import Donation from './Components/Donation/Donation'
import Statistics from './Components/Statistics/Statistics'
import CardDetails from './Components/CardDetails/CardDetails'
import ErrorElement from './Components/ErrorElement/ErrorElement'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json")
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: '/card/:id',
        element: <CardDetails></CardDetails>, 
        loader: () => fetch('../data.json')
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
