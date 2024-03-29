
import { NavLink } from "react-router-dom"

export default function Banner() {

    return (
        <div class="relative z-20 bg-cover bg-[url('src/assets/banner/recetasBG.png')] py-12  ">
            <div class="cont bg-texture-rounded bg-white bg-opacity-90 flex flex-col md:flex-row rounded-xl ">
                <div class="w-full text-black text-upercase font-extrabold  flex flex-col justify-center items-center my-12 gap-6">
                    <h1 class="text-6xl ">conoce los beneficios de</h1>
                    <h1 class="text-6xl text-right">La Carne de Cerdo</h1>

                    <NavLink to={"/cerdo"} >
                        <div class="btn bg-primary z-50  flex items-center gap-2">

                            LEER
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5391 7.66398L9.91406 13.289C9.73715 13.4636 9.49858 13.5615 9.25 13.5615C9.00142 13.5615 8.76285 13.4636 8.58594 13.289C8.49854 13.2019 8.42919 13.0984 8.38187 12.9844C8.33456 12.8705 8.3102 12.7483 8.3102 12.6249C8.3102 12.5015 8.33456 12.3794 8.38187 12.2654C8.42919 12.1514 8.49854 12.0479 8.58594 11.9609L12.6094 7.93742H1.125C0.87636 7.93742 0.637903 7.83864 0.462087 7.66283C0.286272 7.48701 0.1875 7.24856 0.1875 6.99992C0.1875 6.75128 0.286272 6.51282 0.462087 6.337C0.637903 6.16119 0.87636 6.06242 1.125 6.06242H12.6094L8.58594 2.03898C8.40982 1.86286 8.31087 1.62399 8.31087 1.37492C8.31087 1.25159 8.33517 1.12947 8.38236 1.01553C8.42956 0.901589 8.49873 0.798061 8.58594 0.710855C8.67314 0.623649 8.77667 0.554473 8.89061 0.507278C9.00455 0.460082 9.12667 0.435791 9.25 0.435791C9.49907 0.435791 9.73794 0.534734 9.91406 0.710855L15.5391 6.33585C15.6265 6.42295 15.6958 6.52644 15.7431 6.6404C15.7904 6.75435 15.8148 6.87653 15.8148 6.99992C15.8148 7.1233 15.7904 7.24548 15.7431 7.35943C15.6958 7.47339 15.6265 7.57688 15.5391 7.66398Z" fill="white"></path>
                            </svg>
                        </div>

                    </NavLink>



                </div>


            </div>
        </div>
    )

}