
import Calculadora from "components/Calculadora"
import VideCont from "components/core/VideCont"
import Certificaciones from "components/core/Certificaciones"
import Destacados from "../productos/Destacados"


import Contact from "./Contact"

import HeaderCarrusel from './HeaderCarrusel'
import LaCocina from './LaCocina'
import Eventos from './Eventos'
import { NavLink } from "react-router-dom"




const MyApp = () => {
    return (
        <div>




            <HeaderCarrusel />

            <div className="bg-primary bg-texture">

                <VideCont />
                <Certificaciones />
                <Calculadora />
                <Destacados />

                <div className="cont  pb-8">
                    <div className="lg:mx-auto lg:flex justify-center ">
                        <NavLink to={"/productos"} className="btn bg-success w-auto" href="#">
                            TODOS LOS PRODUCTOS
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.999889 11.7501C0.801057 11.7492 0.610427 11.6707 0.468638 11.5313C0.398718 11.4617 0.343241 11.3789 0.305387 11.2877C0.267533 11.1965 0.248047 11.0988 0.248047 11.0001C0.248047 10.9014 0.267533 10.8036 0.305387 10.7125C0.343241 10.6213 0.398718 10.5385 0.468638 10.4688L4.93739 6.00008L0.468638 1.53133C0.327742 1.39043 0.248588 1.19934 0.248588 1.00008C0.248588 0.901418 0.268021 0.803722 0.305777 0.71257C0.343533 0.621418 0.398874 0.538595 0.468638 0.46883C0.538403 0.399066 0.621226 0.343725 0.712378 0.305969C0.80353 0.268212 0.901226 0.248779 0.999889 0.248779C1.19915 0.248779 1.39024 0.327934 1.53114 0.46883L6.53114 5.46883C6.60106 5.53851 6.65654 5.6213 6.69439 5.71247C6.73224 5.80363 6.75173 5.90137 6.75173 6.00008C6.75173 6.09879 6.73224 6.19653 6.69439 6.28769C6.65654 6.37886 6.60106 6.46165 6.53114 6.53133L1.53114 11.5313C1.38935 11.6707 1.19872 11.7492 0.999889 11.7501Z"
                                    fill="white" />
                            </svg>
                        </NavLink>
                    </div>
                </div>

            </div>
            <LaCocina />
            <Eventos />
            <Contact />


            <div className="container ">
                <img src="assets/cerdo.png" alt="" className="
    md:w-1/2 md:-mb-[1.7%] md:-mt-[25%]
    -mb-[3.4%]
    relative z-[100] 

    "/>
            </div>

        </div>
    )
}

export default MyApp