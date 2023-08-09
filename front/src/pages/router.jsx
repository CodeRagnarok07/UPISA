
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



import ProductDetail from './productos/Detail'
import RecetaDetail from './recetas/Detail'


import { createBrowserRouter, Outlet, redirect } from "react-router-dom";
import Article from 'src/components/Article'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: "error",
    children: [
      {
        path: "/",
        element: <Home /> 
      },
      {
        path: "/empresa",
        element: <Empresa />  

       ,
      },
   
 
      {
        path: "/productos",
        element: <Productos/>
        
       ,       

      },
      {
        path: "/productos/:urlProduct",
        element: <ProductDetail />,
      },

 
      {
        path: "/parrilleros",        
        element: <Parrilleros />,
      },
      {
        path: "/parrilleros/:url",
        element: <Article 
        pathApi={"api/posts/trucos/"} name={"Trucos y consejos"}  internal_url="/parrilleros/"
        />,
      },
 
      {
        path: "/novedades",    
        element: <Layer
        meta={{title:"Novedades UPISA", description:"Mantente al día con las últimas novedades y noticias de nuestro frigorífico."}}
        header={{title:"novedades", text:`Redes Sociales / Facebook e Instagram` }}
        ><Novedades /> </Layer>,
      },
      {

        path: "/novedades/:url",
        element: <Article 
        pathApi={"api/posts/novedades/"} name={"novedades"}  internal_url="/novedades/"/>
        
      },
      {
        path: "/recetas",
        element: <Layer
        meta={{title:"Recetas UPISA", description:"Descubre una deliciosa variedad de recetas que destacan la versatilidad y el sabor excepcional de la carne de cerdo y los embutidos."}}
        header={{title:"RECETAS", text:`Prepara los platos más deliciosos y sabrosos con nuestra variedad de productos y disfruta en cada bocado.` }}
        
        ><Recetas /> </Layer>,
      },
      {
        path: "/recetas/:url",
        element: <RecetaDetail/>
        
      },

      {
        path: "/contacto",
        element: <Contacto /> 
        ,
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
        header={{title:"BENEFICIOS DE LA CARNE DE CERDO", text:`` }}> <Cerdo/> </Layer>,
      },
 
 


    ],
  }


]);


export default router
