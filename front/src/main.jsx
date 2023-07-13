import React from 'react'
import ReactDOM from 'react-dom/client'

import { QueryClient, QueryClientProvider } from 'react-query'
import router from './pages/router'
import { RouterProvider } from "react-router-dom";
const queryClient = new QueryClient()


import './styles/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)
