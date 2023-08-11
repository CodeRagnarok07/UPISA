
import useQueryFetcher from 'src/utils/useQueryFetcher'
import useCarrusel from "src/utils/useCarrusel";
import { useEffect } from 'react';

const HeaderCarrusel = () => {
    const [CarruselRef, arrowControler, current, dotControlerRef] = useCarrusel()

    const usequery = useQueryFetcher(["banners-home"], 'api/core/banners/')

    useEffect(() => {



        const interval = setInterval(() => {
            console.log("interval");
            arrowControler(true)
        }, 5000)

        return () => clearInterval(interval);
    }, [current])


    return (
        <div className="relative z-1 -mb-10 -mt-28 xl:-mt-36">

            <div className="carrusel-slider ">

                <div ref={CarruselRef} className="slider">
                    {usequery.data && usequery.data.map((v, k) => (
                        <picture onClick={()=>arrowControler(true)} key={k} className="item-slider relative ">

                            <div className="cont !h-full absolute inset-0 flex items-end justify-start pb-[1rem] pt-[6rem] md:pt-[8rem] lg:pt-[10rem]">
                                <div className='h-full w-auto md:w-1/3'>
                                    <img className='object-contain h-full  !bg-transparent' src={v.text_cont_img} alt="" />
                                </div>
                            </div>
                            <source srcSet={v.desktop} media="(min-width: 640px)" />
                            <img className="w-full object-cover h-[22.5rem] xl:h[849px] md:h-auto" src={v.movil} alt="" />


                        </picture>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default HeaderCarrusel