import Layer from 'src/components/Layer'
import { NavLink, useParams } from 'react-router-dom';
import useQueryFetcher from 'src/utils/useQueryFetcher'
import Table from './Table';
import Carrusel from './Carrusel';

import Destacados from '../Destacados'

const ProductDetail = ({ params }) => {

    const { urlProduct } = useParams()
    // console.log(urlProduct);


    const usequery = useQueryFetcher(["product", urlProduct], "api/posts/products/producto/" + urlProduct)

    // console.log(usequery.data);
    return (
        !usequery.isLoading && usequery.data &&
        <Layer
            header={{ title: `${usequery.data.nombre}`, text: "" }}

        >

            <section className='cont mt-10 mb-32'>
                <div class="grid md:grid-cols-2 mt-9 gap-x-[140px] gap-y-6 ">

                    <div>
                        <h2 class="text-left capitalize">{usequery.data.nombre}</h2>
                        <div class="flex justify-start items-center gap-3 mt-3 mb-5">
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.5 3.49992V0.99992C2.5 0.801008 2.57902 0.610242 2.71967 0.46959C2.86032 0.328938 3.05109 0.24992 3.25 0.24992C3.44891 0.24992 3.63968 0.328938 3.78033 0.46959C3.92098 0.610242 4 0.801008 4 0.99992V3.49992C4 3.69883 3.92098 3.8896 3.78033 4.03025C3.63968 4.1709 3.44891 4.24992 3.25 4.24992C3.05109 4.24992 2.86032 4.1709 2.71967 4.03025C2.57902 3.8896 2.5 3.69883 2.5 3.49992ZM5.5 0.24992C5.30109 0.24992 5.11032 0.328938 4.96967 0.46959C4.82902 0.610242 4.75 0.801008 4.75 0.99992V3.99992C4.75 4.39775 4.59197 4.77928 4.31066 5.06058C4.02936 5.34189 3.64783 5.49992 3.25 5.49992C2.85218 5.49992 2.47064 5.34189 2.18934 5.06058C1.90804 4.77928 1.75 4.39775 1.75 3.99992V0.99992C1.75 0.801008 1.67098 0.610242 1.53033 0.46959C1.38968 0.328938 1.19891 0.24992 1 0.24992C0.801088 0.24992 0.610322 0.328938 0.46967 0.46959C0.329018 0.610242 0.25 0.801008 0.25 0.99992V3.99992C0.2518 4.66472 0.473458 5.31026 0.880434 5.83594C1.28741 6.36161 1.85684 6.7379 2.5 6.90617V12.9999C2.5 13.1988 2.57902 13.3896 2.71967 13.5303C2.86032 13.6709 3.05109 13.7499 3.25 13.7499C3.44891 13.7499 3.63968 13.6709 3.78033 13.5303C3.92098 13.3896 4 13.1988 4 12.9999V6.90617C4.64316 6.7379 5.21259 6.36161 5.61957 5.83594C6.02654 5.31026 6.2482 4.66472 6.25 3.99992V0.99992C6.25 0.801008 6.17098 0.610242 6.03033 0.46959C5.88968 0.328938 5.69891 0.24992 5.5 0.24992ZM11.5 0.99992V12.9999C11.5 13.1988 11.421 13.3896 11.2803 13.5303C11.1397 13.6709 10.9489 13.7499 10.75 13.7499C10.5511 13.7499 10.3603 13.6709 10.2197 13.5303C10.079 13.3896 10 13.1988 10 12.9999V9.74992H7.25C7.14481 9.74966 7.04085 9.72728 6.94487 9.68423C6.84889 9.64117 6.76305 9.57841 6.69291 9.50002C6.62276 9.42163 6.5699 9.32936 6.53774 9.2292C6.50558 9.12904 6.49485 9.02324 6.50625 8.91867C6.6576 7.65144 6.90625 6.39774 7.25 5.16867C8.01875 2.43742 9.1125 0.79992 10.4938 0.29367C10.6072 0.252443 10.7288 0.239186 10.8484 0.255025C10.9681 0.270863 11.0821 0.31533 11.1809 0.384649C11.2796 0.453969 11.3602 0.546095 11.4158 0.653208C11.4713 0.76032 11.5002 0.879256 11.5 0.99992ZM10 2.56242C9.5125 3.23742 9.0625 4.26242 8.6875 5.58117C8.44548 6.45916 8.25351 7.35017 8.1125 8.24992H10V2.56242Z"
                                    fill="#0B9839" />
                            </svg>
                            <p class="font-bold uppercase">Porción {usequery.data.porcion} g (1 {usequery.data.unidad})</p>
                        </div>

                        <p dangerouslySetInnerHTML={{ __html: usequery.data.descripcion }} />

                    </div>

                    {usequery.data.galeria.length &&
                        <Carrusel data={usequery.data.galeria} />
                    }

                    <Table data={usequery.data.valores_nutricionales} />






                </div>

                <div class="flex flex-col w-full rounded-xl mt-20 mb-10 bg-white md:flex-row-reverse md:justify-between ">

                    <img class="md:w-1/2 rounded-t-xl md:rounded-t-none md:rounded-r-xl"

                        src="assets/contact_link.png" alt="" />

                    <div class="md:w-1/2 m-5 md:m-12 md:flex md:flex-col md:items-start md:justify-center">

                        <h3 class="font-bold">
                            ¿NO ENCONTRÁS LO QUE BUSCÁS? ESTAMOS PARA AYUDARTE
                        </h3>

                        <NavLink to={"/contacto"} className="btn bg-primary flex justify-center items-center mt-6 gap-4 md:mr-auto w-full md:w-auto" href="#">
                            CONTACTÁ CON NOSOTROS
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.50025 11.75C1.30142 11.7491 1.11079 11.6706 0.969005 11.5312C0.899085 11.4615 0.843607 11.3787 0.805753 11.2876C0.767899 11.1964 0.748413 11.0987 0.748413 11C0.748413 10.9012 0.767899 10.8035 0.805753 10.7123C0.843607 10.6212 0.899085 10.5384 0.969005 10.4687L5.43775 5.99996L0.969005 1.53121C0.828108 1.39031 0.748954 1.19922 0.748954 0.999958C0.748954 0.901296 0.768387 0.8036 0.806143 0.712448C0.8439 0.621296 0.89924 0.538473 0.969005 0.468708C1.03877 0.398944 1.12159 0.343603 1.21274 0.305847C1.3039 0.26809 1.40159 0.248657 1.50025 0.248657C1.69951 0.248657 1.89061 0.327812 2.0315 0.468708L7.0315 5.46871C7.10142 5.53839 7.1569 5.62118 7.19476 5.71234C7.23261 5.80351 7.2521 5.90125 7.2521 5.99996C7.2521 6.09867 7.23261 6.19641 7.19476 6.28757C7.1569 6.37874 7.10142 6.46153 7.0315 6.53121L2.0315 11.5312C1.88972 11.6706 1.69909 11.7491 1.50025 11.75Z"
                                    fill="white" />
                            </svg>
                        </NavLink>
                    </div>
                </div>

                <Destacados />

            </section>
        </Layer>
    )
}

export default ProductDetail