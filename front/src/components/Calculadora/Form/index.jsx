import useCarrusel from "src/utils/useCarrusel";

import Personas from './Personas'
import ListCheckbox from "./ListCheckbox";



const MyApp = () => {
    const [CarruselRef, arrowControler, current, dotControlerRef] = useCarrusel()




    const carnes = ["Bondiola", "tapa cuadril", "costilla", "asado americano", "bife de chorizo", "matambrito",]
    const embutidos = ["toscana tradicional", "toscana con finas hierbas", "toscana con ajo", "toscana picante", "chorizo de viena", "parrillero con y sin picante",]

    return (

        <form method="POST" action="" className="text-black">

            <div class="progres-bar mb-4 lg:mb-8">
                <div class="progres-items">
                    <div class="progres-item active  "> PERSONAS</div>
                    <div class="progres-item">CARNES</div>
                    <div class="progres-item">EMBUTIDOS</div>
                    <div class="progres-item">RESULTADO </div>
                </div>
                <progress class="lg:flex hidden " max="100" value="0"></progress>
            </div>

            <div className="carrusel-slider">

                <div ref={CarruselRef} className="slider slider-grid " style={{ "--grid": "1", "--grid-md": "1" }}>
                    <Personas />
                    <ListCheckbox data={carnes} cols={1} />
                    <ListCheckbox data={embutidos} cols={2} />
                </div>



            </div>





            <div class=" gap-4 flex flex-row justify-between items-center py-6 border-t border-t-[#FDF2E8]">

                {current?.state != 0 &&
                    < div onClick={() => arrowControler(false)} class="btn bg-primary white w-auto mr-auto ">ATRÁS</div>
                }

                {current?.state != CarruselRef.current?.children.length - 1 ?
                    <div onClick={() => arrowControler(true)} id="next_step" class="btn bg-primary w-auto ml-auto">SIGUIENTE</div>
                    :
                    ""
                }

            </div>

        </form >
    )
}

export default MyApp