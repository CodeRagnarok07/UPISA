import React, { useRef } from 'react'
// import from './module.scss'
import HomeCarrusel from './HomeCarrusel'
import { useRouter } from 'next/router'
export default function Navbar({ content }) {

  const router = useRouter() 


  const baner = router.route == "/" ? true : false
 
  console.log(baner);


  const bar = useRef()
  const handleClick =(e) =>{
    const aList = bar.current.getElementsByTagName("a")
    for (let index = 0; index < aList.length; index++) {
      const element = aList[index];
      if (element.className !== "logo") {
        element.classList.toggle("hidden-movil") 
      }
    }
  }




  return (
    <div className={"navbar bg"}>
      <div className={"slider"} />
      <ul ref={bar}>

        <div className="btn" onClick={e=>handleClick(e)}>
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.375 8C19.375 8.29837 19.2565 8.58452 19.0455 8.79549C18.8345 9.00647 18.5484 9.125 18.25 9.125H1.75C1.45163 9.125 1.16548 9.00647 0.954505 8.79549C0.743526 8.58452 0.625 8.29837 0.625 8C0.625 7.70163 0.743526 7.41548 0.954505 7.2045C1.16548 6.99353 1.45163 6.875 1.75 6.875H18.25C18.5484 6.875 18.8345 6.99353 19.0455 7.2045C19.2565 7.41548 19.375 7.70163 19.375 8ZM1.75 3.125H18.25C18.5484 3.125 18.8345 3.00647 19.0455 2.7955C19.2565 2.58452 19.375 2.29837 19.375 2C19.375 1.70163 19.2565 1.41548 19.0455 1.2045C18.8345 0.993526 18.5484 0.875 18.25 0.875H1.75C1.45163 0.875 1.16548 0.993526 0.954505 1.2045C0.743526 1.41548 0.625 1.70163 0.625 2C0.625 2.29837 0.743526 2.58452 0.954505 2.7955C1.16548 3.00647 1.45163 3.125 1.75 3.125ZM18.25 12.875H1.75C1.45163 12.875 1.16548 12.9935 0.954505 13.2045C0.743526 13.4155 0.625 13.7016 0.625 14C0.625 14.2984 0.743526 14.5845 0.954505 14.7955C1.16548 15.0065 1.45163 15.125 1.75 15.125H18.25C18.5484 15.125 18.8345 15.0065 19.0455 14.7955C19.2565 14.5845 19.375 14.2984 19.375 14C19.375 13.7016 19.2565 13.4155 19.0455 13.2045C18.8345 12.9935 18.5484 12.875 18.25 12.875Z"
              fill="white" />
          </svg>
        </div>

        <a className="hidden-movil" href="{% url 'index' %}">INICIO</a>
        <a className="hidden-movil" href="{% url 'empresa' %}">LA EMPRESA</a>
        <a className="hidden-movil" href="{% url 'products' %}">PRODUCTOS</a>
        <a className="hidden-movil" href="{% url 'parrilleros' %}">PARRILLEROS</a>
        <a className={"logo"} href=""><img src='/static/img/Logo.png' alt="" /></a>
        <a className="hidden-movil" href="{% url 'novedades' %}">NOVEDADES</a>
        <a className="hidden-movil" href="{% url 'recetas' %}">RECETAS</a>
        <a className="hidden-movil" href="{% url 'contacto' %}">CONTACTO</a>


        <div className="lang" href="">
          <p className="name">Español</p>
          <p className="code">ES</p>
        </div>
      </ul>


      {baner ?

        <HomeCarrusel />

        :
        <>
          {content &&
            <div className={"content"}>
              <h1>{content.title}</h1>
              <p>{content.description}</p>
            </div>
          }
        </>
      }

    </div>
  )
}
