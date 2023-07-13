
import Layer from './components/Layer'

import Home from './home'
import Empresa from './empresa'
import { createBrowserRouter, Outlet } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: "error",
    children: [
      {
        path: "/",
        element: <Layer><Home /> </Layer>,
      },
      {
        path: "/empresa",
        element: <Layer><Empresa /> </Layer>,
      },


    ],
  }


]);


export default router
