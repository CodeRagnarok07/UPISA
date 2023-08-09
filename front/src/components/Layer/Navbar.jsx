import { useEffect, useRef, useState } from "react"
import { NavLink, useNavigate,useLocation } from "react-router-dom"

import logo from 'src/assets/Logo.png'

import LangList from 'src/locale/lang.json'
import navTextList from 'src/locale/navbar.json'
import queryClient from 'src/queryClient'

const Navbar = () => {
    const liRef = useRef()
    const handleClick = () => {
        liRef.current.classList.toggle("[&>a]:hidden")
        liRef.current.parentElement.classList.toggle("bg-primary-movil")
    }

    const [userLang, setUserLang] = useState(localStorage.userlang)

    // redirect
    const navigate = useNavigate();
    const currentRoute = useLocation()
    const en_routes = ["/", "/empresa", "/contacto"]

    useEffect(() => {

        if(userLang !== "es"){

            if(!en_routes.includes(currentRoute.pathname)){
                navigate("/")
            }
           
        }
        

    }, [userLang])

    const setStoreUserLang = (v) => {
        setUserLang(v)
        localStorage.userlang = v

        queryClient.refetchQueries()
    }



    return (
        <nav className=" z-30 pt-4  text-white  ">




            <ul ref={liRef}
                className="cont relative
             flex w-full 
             justify-between
            items-center flex-col xl:flex-row  xl:gap-0  
              
             [&>a]:whitespace-nowrap
             [&>a]:rounded-lg
             [&>a]:cursor-pointer
             [&>a]:w-full
             [&>a]:xl:w-auto
             [&>a]:text-center
             [&>a]:xl:flex
             [&>a]:text-[12px]
             [&>a]:2xl:text-[16px]
             [&>a]:hidden
             [&>a]:border   
          
             
             pt-24
             xl:pt-0

                uppercase

             ">

                {/* absolute inset-x-0 mx-0 z-50 */}
                <div
                    onClick={handleClick}
                    className="flex xl:hidden items-center border p-2 rounded-lg cursor-pointer absolute 
                    top-4 left-4"
                >


                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12ZM3.75 7.125H20.25C20.5484 7.125 20.8345 7.00647 21.0455 6.7955C21.2565 6.58452 21.375 6.29837 21.375 6C21.375 5.70163 21.2565 5.41548 21.0455 5.2045C20.8345 4.99353 20.5484 4.875 20.25 4.875H3.75C3.45163 4.875 3.16548 4.99353 2.9545 5.2045C2.74353 5.41548 2.625 5.70163 2.625 6C2.625 6.29837 2.74353 6.58452 2.9545 6.7955C3.16548 7.00647 3.45163 7.125 3.75 7.125ZM20.25 16.875H3.75C3.45163 16.875 3.16548 16.9935 2.9545 17.2045C2.74353 17.4155 2.625 17.7016 2.625 18C2.625 18.2984 2.74353 18.5845 2.9545 18.7955C3.16548 19.0065 3.45163 19.125 3.75 19.125H20.25C20.5484 19.125 20.8345 19.0065 21.0455 18.7955C21.2565 18.5845 21.375 18.2984 21.375 18C21.375 17.7016 21.2565 17.4155 21.0455 17.2045C20.8345 16.9935 20.5484 16.875 20.25 16.875Z" fill="white" />
                    </svg>
                </div>




                {navTextList.map((v, k) => (

                    v.path == "/#"
                        ?
                        <div key={k}  className={"absolute xl:relative -top-1 mx-auto xl:mx-0 "} >
                            <NavLink to={"/"} className={"flex w-28 pt-2 h-auto md:w-32 xl:w-44  md:pt-0"}>
                                <img className="w-full h-full" src={logo} alt="logo upisa" />
                            </NavLink>
                        </div>
                        :
                        v[userLang] &&
                        <NavLink key={k} className={`hover:border-white p-2 border-transparent `} to={v.path}>

                            <li >
                                {v[userLang]}
                            </li>
                        </NavLink>

                ))}



                <li style={{ display: "flex", width: "auto" }}
                    className="order-10 border xl:border-transparent hover:border-white ml-2 flex 
                    items-center rounded-lg cursor-pointer xl:relative absolute p-3 xl:p-2 top-5 right-4 xl:top-0 
                    
                    ">

                    <div
                        className="flex gap-1 items-center "
                        onClick={(e) => {
                            e.currentTarget.nextElementSibling.classList.toggle("hidden")
                            e.currentTarget.children[1].classList.toggle("rotate-180")
                        }}
                    >
                        <div className="uppercase text-[12px] 2xl:text-[16px] mt-[2px] xl:mt-0">

                            <span className="flex xl:hidden">{userLang}</span>

                            <span className="xl:flex hidden">{LangList[userLang]?.filter(v => v.code == userLang)[0].name}</span>
                        </div>

                        <svg className="h-full rotate-180" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.25 13.4376C16.0014 13.4365 15.7632 13.3384 15.5859 13.1642L9.99998 7.57823L4.41404 13.1642C4.23792 13.3403 3.99905 13.4392 3.74998 13.4392C3.50091 13.4392 3.26204 13.3403 3.08592 13.1642C2.9098 12.988 2.81085 12.7492 2.81085 12.5001C2.81085 12.251 2.9098 12.0122 3.08592 11.836L9.33592 5.58604C9.42301 5.49864 9.52651 5.42929 9.64046 5.38198C9.75442 5.33466 9.87659 5.3103 9.99998 5.3103C10.1234 5.3103 10.2455 5.33466 10.3595 5.38198C10.4735 5.42929 10.5769 5.49864 10.664 5.58604L16.914 11.836C17.0014 11.9231 17.0708 12.0266 17.1181 12.1406C17.1654 12.2545 17.1898 12.3767 17.1898 12.5001C17.1898 12.6235 17.1654 12.7457 17.1181 12.8596C17.0708 12.9736 17.0014 13.0771 16.914 13.1642C16.7368 13.3384 16.4985 13.4365 16.25 13.4376Z" fill="#fff" />
                        </svg>


                    </div>



                    <div className="text-black hidden absolute right-0 top-[100%] py-3 z-100 rounded-lg border bg-white border-[var(--primary-gray)]">

                        {LangList[userLang]?.map((v, k) => (
                            <div

                                onClick={() => setStoreUserLang(v.code)}
                                className="px-4 py-2 hover:bg-[var(--primary)]">
                                <span className="flex md:hidden">{v.code}</span>
                                <span className="md:flex hidden">{v.name}</span>
                            </div>
                        ))}
                    </div>


                </li>



            </ul>


        </nav >
    )
}

export default Navbar