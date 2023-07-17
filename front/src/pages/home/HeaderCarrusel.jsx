
import useQueryFetcher from 'src/utils/useQueryFetcher'

const HeaderCarrusel = () => {

    const usequery = useQueryFetcher('api/core/banners/')
    console.log(usequery.data);



    return (
        <div className="relative z-0 -mb-10 -mt-24">

            <div className="carrusel-slider ">

                <div className="slider ">
                {usequery.data.map((v, k) => (

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