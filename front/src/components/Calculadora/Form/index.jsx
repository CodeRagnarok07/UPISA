import useCarrusel from "src/utils/useCarrusel";

import Personas from './Personas'
import ListCheckbox from "./ListCheckbox";
import { useRef, useState } from "react";
import Result from "./Result";



const MyApp = () => {
    const [CarruselRef, arrowControler, current, dotControlerRef] = useCarrusel()




    const carnes = ["Bondiola", "tapa cuadril", "costilla", "asado americano", "bife de chorizo", "matambrito",]
    const embutidos = ["toscana tradicional", "toscana con finas hierbas", "toscana con ajo", "toscana picante", "chorizo de viena", "parrillero con y sin picante",]


    const [formData, setFormData] = useState({
        personas: {
            Adultos: {
                cantidad: 5,
                porcion: 500
            },
            Niños: {
                cantidad: 5,
                porcion: 500
            },
        },
        carnes: [],
        embutidos: []

    })

    const formRef = useRef()

    const handleSubmit = (e) => {
        arrowControler(true)
    }

    console.log(
        CarruselRef.current?.children?.length
        
        )


    return (

        <form
            ref={formRef}
            method="POST" action="" className="text-black">

            <div class="progres-bar mb-4 lg:mb-8">
                <div class="progres-items">
                    <div class="progres-item active"> PERSONAS</div>
                    <div className={`progres-item ${current.state > 0 && "active"}`}> CARNES</div>
                    <div className={`progres-item ${current.state > 1 && "active"}`}> EMBUTIDOS</div>
                    <div className={`progres-item ${current.state > 2 && "active"}`}> RESULTADO</div>


                   
                </div>
                <progress class="lg:flex hidden " max="100" value={current.state*25}></progress>
                {console.log(current.state*25)}
            </div>

            <div className="carrusel-slider">

                <div ref={CarruselRef} className="slider slider-grid " style={{ "--grid": "1", "--grid-md": "1" }}>
                    <Personas state={formData} setState={setFormData} />
                    <ListCheckbox data={carnes} dataName={"carnes"} cols={1} state={formData} setState={setFormData} />
                    <ListCheckbox data={embutidos} dataName={"embutidos"} cols={2} state={formData} setState={setFormData} />
                    <Result data={formData}/>
                </div>



            </div>





            <div class=" gap-4 flex flex-row justify-between items-center py-6 border-t border-t-[#FDF2E8]">

                {current?.state != 0 &&
                    < div onClick={() => arrowControler(false)} class="btn bg-primary white w-auto mr-auto ">ATRÁS</div>
                }

                {current?.state != CarruselRef.current?.children.length - 1 ?
                    <div onClick={(e) => handleSubmit(e)} id="next_step" class="btn bg-primary w-auto ml-auto">SIGUIENTE</div>
                    :
                    ""
                }

            </div>

        </form >
    )
}

export default MyApp