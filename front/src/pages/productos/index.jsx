import Pagination from 'components/Pagination'
import Item from './Item'


import useQueryFetcher from 'src/utils/useQueryFetcher'

const MyApp = () => {

    const usequery = useQueryFetcher('api/posts/products/?limit=16')

    return (
        <div className="cont  mb-20">

            <ul class="
            mt-20
                    flex justify-center gap-4 w-full
                    overflow-x-auto
                    h-10
                    [&>li]:px-4
                    [&>li]:py-2
                    [&>li]:flex
                    [&>li]:items-center
                    [&>li]:rounded-full
                    [&>li]:border
                    [&>li]:border-[var(--primary)]
                    [&>li]:whitespace-nowrap
                    [&>li]:transition-all
                    [&>li]:cursor-pointer


                    "


            >
                <li className="hover:bg-[var(--primary)] hover:text-white" >
                    TODOS
                </li>


                <li className="hover:bg-[var(--primary)] hover:text-white">
                    EMBUTIDOS
                </li>


                <li className="hover:bg-[var(--primary)] hover:text-white">
                    JAMONES Y FIAMBRES
                </li>


                <li className="hover:bg-[var(--primary)] hover:text-white">
                    CORTES DE CERDO
                </li>


                <li className="hover:bg-[var(--primary)] hover:text-white">
                    test
                </li>



            </ul>

            <div class="grid grid-cols-2 md:grid-cols-4 mt-9 gap-6">
                {usequery.data?.results.map((v,k)=>(

                     <Item data={v} />
                ))}
            </div>
            


            <Pagination />


            <div class="flex flex-col w-full rounded-xl mt-20 mb-40 bg-white md:flex-row-reverse md:justify-between ">

                <img class="md:w-1/2 rounded-t-xl md:rounded-t-none md:rounded-r-xl"

                    src="assets/contact_link.png" alt="" />

                <div class="md:w-1/2 m-5 md:m-12 md:flex md:flex-col md:items-start md:justify-center">

                    <h3 class="font-bold">
                        ¿NO ENCONTRÁS LO QUE BUSCÁS? ESTAMOS PARA AYUDARTE
                    </h3>

                    <a class="btn bg-primary flex justify-center items-center mt-6 gap-4 md:mr-auto w-full md:w-auto" href="#">
                        CONTACTÁ CON NOSOTROS
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.50025 11.75C1.30142 11.7491 1.11079 11.6706 0.969005 11.5312C0.899085 11.4615 0.843607 11.3787 0.805753 11.2876C0.767899 11.1964 0.748413 11.0987 0.748413 11C0.748413 10.9012 0.767899 10.8035 0.805753 10.7123C0.843607 10.6212 0.899085 10.5384 0.969005 10.4687L5.43775 5.99996L0.969005 1.53121C0.828108 1.39031 0.748954 1.19922 0.748954 0.999958C0.748954 0.901296 0.768387 0.8036 0.806143 0.712448C0.8439 0.621296 0.89924 0.538473 0.969005 0.468708C1.03877 0.398944 1.12159 0.343603 1.21274 0.305847C1.3039 0.26809 1.40159 0.248657 1.50025 0.248657C1.69951 0.248657 1.89061 0.327812 2.0315 0.468708L7.0315 5.46871C7.10142 5.53839 7.1569 5.62118 7.19476 5.71234C7.23261 5.80351 7.2521 5.90125 7.2521 5.99996C7.2521 6.09867 7.23261 6.19641 7.19476 6.28757C7.1569 6.37874 7.10142 6.46153 7.0315 6.53121L2.0315 11.5312C1.88972 11.6706 1.69909 11.7491 1.50025 11.75Z"
                                fill="white" />
                        </svg>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default MyApp