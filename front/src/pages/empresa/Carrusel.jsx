
import useCarrusel from "src/utils/useCarrusel";


export default function () {

    const [CarruselRef, arrowControler, current, dotControlerRef] = useCarrusel()

    const imgData = [ 
        "b05", "b04"
        , "b03"
        , "b01"
        , "31"
        , "33"
        , "32"
        , "30"
        , "29"
        , "21"
    ]

    return (
        <div className="cont">

            <div className="carrusel-slider mb-40">

                <div ref={CarruselRef} className="slider slider-grid " style={{ "--grid": "1", "--grid-md": "1" }}>

                    {imgData.map((v,k)=>(
                    <img 
                    key={k}
                    src={`assets/about/Carrusel/${v}.jpg`} alt="" 
                    class="item-grid 
                    max-h-[50rem]
                    h-[11.25rem]
                    sm:h-[20rem]
                    md:h-[28rem]
                    lg:h-[32rem]
                    xl:h-[50remrem]
                    w-full
                    " />
                    ))}

                    
                </div>


                <div ref={dotControlerRef} className="dot-control mt-3 ">
                    <div></div>
                </div>

            </div>


        </div>

    )
}