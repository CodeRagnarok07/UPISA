import React from 'react'
import ReactDOM from 'react-dom/client'

import router from './pages/router'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from "react-router-dom";


const queryClient = new QueryClient()





import './styles/tailwind.css'
import './styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(

  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)
