
import Layer from '../components/Layer'

import Home from './home'
import Empresa from './empresa'
import Contacto from './contacto'
import Productos from './productos'
import Parrilleros from './parrilleros'
import Novedades from './novedades'
import Recetas from './recetas'
import Cerdo from './cerdo'
import Promo from './promo'





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
        element: 
        <Layer 
        meta={{title:"la empresa", description:"asd"}}
        header={{title:"La empresa", text:"" }}
        >
          <Empresa />  
          </Layer>,
      },
      {
        path: "/contacto",
        element: <Layer><Contacto /> </Layer>,
      },
 
      {
        path: "/productos",
        element: <Layer
        meta={{title:"productos", description:"asd"}}
        header={{title:"PRODUCTOS", text:`Conocé la amplia línea de fiambres y embutidos frescos que tenemos para vos, con calidad y sabor único. ¡Tenés que probarlo! Elegí lo mejor, elegí sabor.` }}
        ><Productos /> </Layer>,
      },
 
      {
        path: "/parrilleros",        
        element: <Layer
        header={{title:"Parrilleros", text:`Conocé la amplia línea de fiambres y embutidos frescos que tenemos para vos, con calidad y sabor único. ¡Tenés que probarlo! Elegí lo mejor, elegí sabor.` }}
        
        ><Parrilleros /> </Layer>,
      },
 
      {
        path: "/novedades",    
        element: <Layer
        header={{title:"novedades", text:`Conocé la amplia línea de fiambres y embutidos frescos que tenemos para vos, con calidad y sabor único. ¡Tenés que probarlo! Elegí lo mejor, elegí sabor.` }}
        ><Novedades /> </Layer>,
      },
 
      {
        path: "/recetas",
        element: <Layer
        header={{title:"novedades", text:`Conocé la amplia línea de fiambres y embutidos frescos que tenemos para vos, con calidad y sabor único. ¡Tenés que probarlo! Elegí lo mejor, elegí sabor.` }}
        
        ><Recetas /> </Layer>,
      },
 
      {
        path: "/promo",
        element: <Layer
        header={{title:"novedades", text:`Conocé la amplia línea de fiambres y embutidos frescos que tenemos para vos, con calidad y sabor único. ¡Tenés que probarlo! Elegí lo mejor, elegí sabor.` }}
        ><Promo /> </Layer>,
      },
      {
        path: "/cerdo",
        element: <Layer
        header={{title:"novedades", text:`Conocé la amplia línea de fiambres y embutidos frescos que tenemos para vos, con calidad y sabor único. ¡Tenés que probarlo! Elegí lo mejor, elegí sabor.` }}
        
        ><Cerdo /> </Layer>,
      },
 
 


    ],
  }


]);


export default router
