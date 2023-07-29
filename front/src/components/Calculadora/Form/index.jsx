import useCarrusel from "src/utils/useCarrusel";

import Personas from './Personas'
import ListCheckbox from "./ListCheckbox";
import { useRef, useState } from "react";
import Result from "./Result";



const Form = ({ text }) => {
    const [CarruselRef, arrowControler, current, dotControlerRef] = useCarrusel()



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




    return (

        <form
            ref={formRef}
            method="POST" action="" className="text-black">

            <div class="progres-bar mb-4 lg:mb-8">
                <div class="progres-items">
                    {text.progres_bar.map((v,k)=>(
                        <div className={`progres-item ${current.state >= k && "active"}`}> {v}</div>
                    ))}

                    



                </div>
                <progress class="lg:flex hidden " max="100" value={current.state * 33   }></progress>
            </div>

            <div className="carrusel-slider">

                <div ref={CarruselRef} className="slider slider-grid " style={{ "--grid": "1", "--grid-md": "1" }}>
                    <Personas text={text.steps.personas} state={formData} setState={setFormData} />
                    <ListCheckbox text={text.steps.carnes}  dataName={"carnes"} cols={1} state={formData} setState={setFormData} />
                    <ListCheckbox  text={text.steps.embutidos} dataName={"embutidos"} cols={2} state={formData} setState={setFormData} />
                    <Result text={text.steps.result} data={formData} />
                </div>



            </div>





            <div class="uppercase gap-4 flex flex-row justify-between items-center py-6 border-t border-t-[#FDF2E8]">

                {current?.state != 0 &&
                    < div onClick={() => arrowControler(false)} class="btn bg-primary white w-auto mr-auto ">
                        {text.controls[0]}
                    </div>
                }

                {current?.state != CarruselRef.current?.children.length - 1 ?
                    <div onClick={(e) => handleSubmit(e)} id="next_step" class="btn bg-primary w-auto ml-auto">
                        {text.controls[1]}
                    </div>
                    :
                    ""
                }

            </div>

        </form >
    )
}

export default Form