import { useRef } from "react"
import { NavLink } from "react-router-dom"

import logo from 'src/assets/Logo.png'
const Navbar = () => {

    const liRef = useRef()
    const handleClick = () => {

        liRef.current.classList.toggle("[&>a]:hidden")
        liRef.current.parentElement.classList.toggle("bg-primary-movil")
        // liRef.current.parentElement.classList.toggle(" bg-texture")
        // document.getElementById().parentElement

        // for (const achor of botones) {
        //     console.log(achor);
        // }

    }


    return (
        <nav className=" z-30   text-white  ">




            <ul ref={liRef}
                className="cont relative
             flex w-full justify-between items-center flex-col lg:flex-row gap-4 lg:gap-0  
             [&>a]:whitespace-nowrap
             [&>a]:rounded-lg
             [&>a]:cursor-pointer
             [&>a]:w-full
             [&>a]:lg:w-auto
             [&>a]:text-center
             [&>a]:lg:flex
             [&>a]:text-[12px]
             [&>a]:xl:p-3
             [&>a]:xl:text-[16px]
             [&>a]:hidden
             [&>a]:border    
             [&>lang]:flex
             pt-24
             lg:pt-0


             ">

                {/* absolute inset-x-0 mx-0 z-50 */}
                <div
                    onClick={handleClick}
                    className="flex lg:hidden items-center border p-2 rounded-lg cursor-pointer absolute 
                    top-4 left-4"
                >


                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12ZM3.75 7.125H20.25C20.5484 7.125 20.8345 7.00647 21.0455 6.7955C21.2565 6.58452 21.375 6.29837 21.375 6C21.375 5.70163 21.2565 5.41548 21.0455 5.2045C20.8345 4.99353 20.5484 4.875 20.25 4.875H3.75C3.45163 4.875 3.16548 4.99353 2.9545 5.2045C2.74353 5.41548 2.625 5.70163 2.625 6C2.625 6.29837 2.74353 6.58452 2.9545 6.7955C3.16548 7.00647 3.45163 7.125 3.75 7.125ZM20.25 16.875H3.75C3.45163 16.875 3.16548 16.9935 2.9545 17.2045C2.74353 17.4155 2.625 17.7016 2.625 18C2.625 18.2984 2.74353 18.5845 2.9545 18.7955C3.16548 19.0065 3.45163 19.125 3.75 19.125H20.25C20.5484 19.125 20.8345 19.0065 21.0455 18.7955C21.2565 18.5845 21.375 18.2984 21.375 18C21.375 17.7016 21.2565 17.4155 21.0455 17.2045C20.8345 16.9935 20.5484 16.875 20.25 16.875Z" fill="white" />
                    </svg>
                </div>


                <NavLink className="hover:border-white p-2 border-transparent" to={"/"}><li >INICIO</li></NavLink>
                <NavLink className="hover:border-white p-2 border-transparent" to={"/empresa"}><li >LA EMPRESA</li></NavLink>
                <NavLink className="hover:border-white p-2 border-transparent" to={"/productos"}><li >PRODUCTOS</li></NavLink>
                <NavLink className="hover:border-white p-2 border-transparent" to={"/parrilleros"}><li >PARRILLEROS</li></NavLink>

                <div className={"absolute lg:relative -top-1 mx-auto lg:mx-0"} >

                <NavLink to={"/"}>
                    <img className="w-auto h-20 sm:h-24 " src={logo} alt="logo upisa" />
                </NavLink>
                </div>


                <NavLink className="hover:border-white p-2 border-transparent" to={"/novedades"}><li >NOVEDADES</li></NavLink>
                <NavLink className="hover:border-white p-2 border-transparent" to={"/recetas"}><li >RECETAS</li></NavLink>
                <NavLink className="hover:border-white p-2 border-transparent" to={"/contacto"}><li >CONTACTO</li></NavLink>

                <li style={{ display: "flex", width: "auto" }}

                    className="
                
                border lg:border-transparent hover:border-white 
                ml-2 flex 
                items-center  rounded-lg cursor-pointer 

                lg:relative 
                absolute
                p-3 
                lg:p-2
                top-5 right-4
                lg:top-0
                "
                >
                    <span className="flex xl:hidden">ES</span>
                    <span className="xl:flex hidden">ESPAÑOL</span>
                </li>
            </ul>


        </nav>
    )
}

export default Navbar