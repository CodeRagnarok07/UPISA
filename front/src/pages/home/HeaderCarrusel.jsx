
import useQueryFetcher from 'src/utils/useQueryFetcher'

const HeaderCarrusel = () => {

    const usequery = useQueryFetcher(["banners-home"],'api/core/banners/')


    return (
        <div className="relative z-0 -mb-10 -mt-28 lg:-mt-36">

            <div className="carrusel-slider ">

                <div className="slider ">
                {usequery.data && usequery.data.map((v, k) => (

                        <picture className="item-slider relative">
                            <source srcset={v.desktop} media="(min-width: 750px)" />
                            <img className="w-full object-cover h-[22.5rem] lg:h[849px] md:h-auto" src={v.movil} alt="" />
                        </picture>
                ))}
                </div>

            </div>
        </div>

    )
}

export default HeaderCarrusel