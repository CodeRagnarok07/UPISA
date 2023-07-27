import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/tailwind.css'
import './styles/main.scss'

import router from './pages/router'

import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from "react-router-dom";
import queryClient from './queryClient'

ReactDOM.createRoot(document.getElementById('root')).render(

  <QueryClientProvider client={queryClient}>

      <RouterProvider router={router} />

  </QueryClientProvider>
)
