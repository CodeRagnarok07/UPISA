
import useCarrusel from "src/utils/useCarrusel";

const Carrusel = ({ data }) => {
    const [CarruselRef, arrowControler, current, dotControlerRef] = useCarrusel()

    return (data &&

        <div class="carrusel-slider xl:row-span-2">

            {/* <div class="main h-[200px] md:h-[553px] "> */}
            <div ref={CarruselRef} className="slider slider-grid " style={{ "--grid": "1", "--grid-md": "1" }}>
                {data.map((v, k) => (
                    <img className="rounded-[3rem] item-grid 
                    h-[11.25rem] 
                    sm:h-[30rem] 
                    md:h-[35rem] 
                    lg:h-[40rem] 
                    xl:h-[50rem] 
                    
                    w-full object-cover" key={k} src={v.imagen} alt="" />
                ))}
            </div>

            <div ref={dotControlerRef} className="dot-control mt-5 ">
                    <div></div>
                </div>
        </div>

    )
}

export default Carrusel