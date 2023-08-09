
import useQueryFetcher from 'src/utils/useQueryFetcher'

const HeaderCarrusel = () => {

    const usequery = useQueryFetcher(["banners-home"], 'api/core/banners/')


    return (
        <div className="relative z-0 -mb-10 -mt-28 xl:-mt-36">

            <div className="carrusel-slider ">

                <div className="slider">
                    {usequery.data && usequery.data.map((v, k) => (
                        <picture key={k} className="item-slider relative ">
                            <div className="cont !h-full absolute inset-0 flex items-end pb-10 sm:p-0 sm:items-center justify-center sm:justify-start">
                                <img className='w-1/3 h-auto !bg-transparent' src={v.text_cont_img} alt="" />
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