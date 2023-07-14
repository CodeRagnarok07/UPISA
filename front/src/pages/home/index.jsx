
import Calculadora from "../components/Calculadora"


import VideCont from "../components/core/VideCont"
import Certificaciones from "../components/core/Certificaciones"
import Destacados from "../components/core/Destacados"
import Contact from "./Contact"

import HeaderCarrusel from './HeaderCarrusel'
import LaCocina from './LaCocina'
import Eventos from './Eventos'



const MyApp = () => {
    return (
        <div>
            <HeaderCarrusel />

            <div className="bg-primary bg-texture">

                <VideCont />
                <Certificaciones />
                <Calculadora/>
                <Destacados/>
            </div>
                <LaCocina/>
                <Eventos/>
                <Contact/>

            
                <div className="container ">
    <img src="src/assets/cerdo.png" alt="" className="
    md:w-1/2 md:-mb-[1.7%] md:-mt-[25%]
    -mb-[3.4%]
    relative z-[100] 

    "/>
</div>

        </div>
    )
}

export default MyApp