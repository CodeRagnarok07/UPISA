import useCarrusel from "src/utils/useCarrusel";

import Step1 from './step1'



const MyApp = () => {
    const [CarruselRef, arrowControler, current, dotControlerRef] = useCarrusel()

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

            <div className="carrusel-slider mb-40">

                <div ref={CarruselRef} className="slider slider-grid " style={{ "--grid": "1", "--grid-md": "1" }}>
                   <Step1/>
                  <div></div>
                </div>



            </div>





            <div class=" gap-4 flex flex-row justify-between items-center py-6 border-t border-t-[#FDF2E8]">
                <div onClick={() => arrowControler(false)} class="btn bg-primary white w-auto  ">ATRÁS</div>
                <div onClick={() => arrowControler(true)} id="next_step" class="btn bg-primary w-auto">SIGUIENTE</div>

            </div>

        </form>
    )
}

export default MyApp