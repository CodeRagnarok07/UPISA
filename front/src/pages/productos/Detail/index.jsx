import Layer from 'src/components/Layer'
import {  useParams } from 'react-router-dom';
import useQueryFetcher from 'src/utils/useQueryFetcher'
import Table from './Table';
import Carrusel from './Carrusel';

import Destacados from '../Destacados'
import BanerContact from '../BannerContact';


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

                

                <Destacados />

                <BanerContact/>

            </section>
        </Layer>
    )
}

export default ProductDetail