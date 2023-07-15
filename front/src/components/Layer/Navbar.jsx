import { useRef } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {

    const liRef = useRef()
    const handleClick = () => {
        const botones = liRef.current.getElementsByTagName("li")
        liRef.current.classList.toggle("[&>li]:hidden")
        // for (const achor of botones) {
        //     console.log(achor);
        // }

    }


    return (
        <nav className=" z-30  text-white  ">




            <ul ref={liRef}
                className="cont relative
             flex w-full justify-between items-center flex-col lg:flex-row gap-4 lg:gap-0  
             [&>li]:whitespace-nowrap
             [&>li]:rounded-lg
             [&>li]:cursor-pointer
             [&>li]:w-full
             [&>li]:lg:w-auto
             [&>li]:text-center
             [&>li]:lg:flex
             [&>li]:text-[12px]
             [&>li]:p-2
             [&>li]:xl:p-3
             [&>li]:xl:text-[16px]
             [&>li]:hidden
             [&>li]:border
             [&>li]:border-transparent
             [&>lang]:flex
             pt-16
             lg:pt-0
             ">

                 {/* absolute inset-x-0 mx-0 z-50 */}
                <div
                    onClick={handleClick}
                    className="flex lg:hidden items-center border p-2 rounded-lg cursor-pointer absolute top-0 left-4" >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12ZM3.75 7.125H20.25C20.5484 7.125 20.8345 7.00647 21.0455 6.7955C21.2565 6.58452 21.375 6.29837 21.375 6C21.375 5.70163 21.2565 5.41548 21.0455 5.2045C20.8345 4.99353 20.5484 4.875 20.25 4.875H3.75C3.45163 4.875 3.16548 4.99353 2.9545 5.2045C2.74353 5.41548 2.625 5.70163 2.625 6C2.625 6.29837 2.74353 6.58452 2.9545 6.7955C3.16548 7.00647 3.45163 7.125 3.75 7.125ZM20.25 16.875H3.75C3.45163 16.875 3.16548 16.9935 2.9545 17.2045C2.74353 17.4155 2.625 17.7016 2.625 18C2.625 18.2984 2.74353 18.5845 2.9545 18.7955C3.16548 19.0065 3.45163 19.125 3.75 19.125H20.25C20.5484 19.125 20.8345 19.0065 21.0455 18.7955C21.2565 18.5845 21.375 18.2984 21.375 18C21.375 17.7016 21.2565 17.4155 21.0455 17.2045C20.8345 16.9935 20.5484 16.875 20.25 16.875Z" fill="white" />
                    </svg>
                </div>


                <li className="hover:border-white"><NavLink to={"/"}>INICIO</NavLink></li>
                <li className="hover:border-white"><NavLink to={"/empresa"}>LA EMPRESA</NavLink></li>
                <li className="hover:border-white"><NavLink to={"/productos"}>PRODUCTOS</NavLink></li>
                <li className="hover:border-white"><NavLink to={"/parrilleros"}>PARRILLEROS</NavLink></li>

                <NavLink className={"absolute lg:relative -top-1 mx-auto lg:mx-0"} to={"/"}>
                    <img className="w-auto h-14 lg:h-24 " src="assets/Logo.png" alt="logo upisa" />
                    </NavLink>
                <li className="hover:border-white"><NavLink to={"/novedades"}>NOVEDADES</NavLink></li>
                <li className="hover:border-white"><NavLink to={"/recetas"}>RECETAS</NavLink></li>
                <li className="hover:border-white"><NavLink to={"/contacto"}>CONTACTO</NavLink></li>

                <li style={{ display: "flex", width: "auto" }}

                    className="
                
                border border-transparent hover:border-white
                ml-2 flex lg:relative items-center  p-2 rounded-lg cursor-pointer absolute top-0 right-4
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