
import useCarrusel from "src/utils/useCarrusel";

const Carrusel = ({ data }) => {
    const [CarruselRef, arrowControler, current, dotControlerRef] = useCarrusel()

    return (data &&

        <div class="carrusel-slider w-full">

            {/* <div class="main h-[200px] md:h-[553px] "> */}
            <div ref={CarruselRef} className="slider slider-grid " style={{ "--grid": "1", "--grid-md": "1" }}>
                {data.map((v, k) => (
                    <img className="rounded-xl item-grid h-[200px] md:h-[553px] w-full object-cover" key={k} src={v.imagen} alt="" />
                ))}
            </div>

            <div ref={dotControlerRef} className="dot-control mt-3 ">
                    <div></div>
                </div>
        </div>

    )
}

export default Carrusel