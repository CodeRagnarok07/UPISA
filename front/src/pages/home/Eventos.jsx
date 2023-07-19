
import { NavLink } from 'react-router-dom'
import useQueryFetcher from 'src/utils/useQueryFetcher'

const LaCocina = () => {
    const usequery = useQueryFetcher(["novedades-home"],'api/posts/novedades/?limit=2')


    return (
        <div className="bg-primary bg-texture z-0 mt-[76px] mb-16 py-12 lg:py-20">
            <div className="cont">
                <div className="title">
                    <h2>EVENTOS Y NOTICIAS</h2>

                </div>


                <div className="flex justify-around flex-col lg:flex-row gap-5 my-10">

                    {usequery.data?.results.map((v, k) => (

                        <NavLink className="bg-white flex flex-col  rounded-lg text-black w-auto lg:w-[40rem] "
                            to={"/novedades/"+v.url}>
                            <div className="">
                                <img className="rounded-t-xl max-h-80  h-full w-full object-cover" src={v.portada} alt="" />
                            </div>

                            <div className="p-5 md:p-9 mt-auto">

                                <h3 className="uppercase">{v.titulo}</h3>
                                <div className="flex gap-6 mt-5 ">

                                    <div className="flex items-center gap-3">
                                        <i>
                                            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.25 2.1875H12.6875V1.5625C12.6875 1.31386 12.5887 1.0754 12.4129 0.899587C12.2371 0.723772 11.9986 0.625 11.75 0.625C11.5014 0.625 11.2629 0.723772 11.0871 0.899587C10.9113 1.0754 10.8125 1.31386 10.8125 1.5625V2.1875H5.1875V1.5625C5.1875 1.31386 5.08873 1.0754 4.91291 0.899587C4.7371 0.723772 4.49864 0.625 4.25 0.625C4.00136 0.625 3.7629 0.723772 3.58709 0.899587C3.41127 1.0754 3.3125 1.31386 3.3125 1.5625V2.1875H1.75C1.33623 2.18955 0.939996 2.35483 0.647415 2.64741C0.354833 2.94 0.189553 3.33623 0.1875 3.75V16.25C0.189553 16.6638 0.354833 17.06 0.647415 17.3526C0.939996 17.6452 1.33623 17.8104 1.75 17.8125H14.25C14.6638 17.8104 15.06 17.6452 15.3526 17.3526C15.6452 17.06 15.8104 16.6638 15.8125 16.25V3.75C15.8104 3.33623 15.6452 2.94 15.3526 2.64741C15.06 2.35483 14.6638 2.18955 14.25 2.1875ZM13.9375 4.0625V5.9375H2.0625V4.0625H13.9375ZM2.0625 15.9375V7.8125H13.9375V15.9375H2.0625Z" fill="#0B9839"></path>
                                            </svg>
                                        </i>
                                        <p className="">{v.publicar}</p>
                                    </div>

                                </div>

                            </div>

                        </NavLink>
                    ))}



                </div>




            <div className="lg:mx-auto lg:flex justify-center">
                <NavLink to={"novedades/"} className="btn bg-success" href="#">
                    TODAS LAS RECETAS
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.999889 11.7501C0.801057 11.7492 0.610427 11.6707 0.468638 11.5313C0.398718 11.4617 0.343241 11.3789 0.305387 11.2877C0.267533 11.1965 0.248047 11.0988 0.248047 11.0001C0.248047 10.9014 0.267533 10.8036 0.305387 10.7125C0.343241 10.6213 0.398718 10.5385 0.468638 10.4688L4.93739 6.00008L0.468638 1.53133C0.327742 1.39043 0.248588 1.19934 0.248588 1.00008C0.248588 0.901418 0.268021 0.803722 0.305777 0.71257C0.343533 0.621418 0.398874 0.538595 0.468638 0.46883C0.538403 0.399066 0.621226 0.343725 0.712378 0.305969C0.80353 0.268212 0.901226 0.248779 0.999889 0.248779C1.19915 0.248779 1.39024 0.327934 1.53114 0.46883L6.53114 5.46883C6.60106 5.53851 6.65654 5.6213 6.69439 5.71247C6.73224 5.80363 6.75173 5.90137 6.75173 6.00008C6.75173 6.09879 6.73224 6.19653 6.69439 6.28769C6.65654 6.37886 6.60106 6.46165 6.53114 6.53133L1.53114 11.5313C1.38935 11.6707 1.19872 11.7492 0.999889 11.7501Z"
                            fill="white" />
                    </svg>
                </NavLink>
            </div>

            </div>

        </div>

    )
}

export default LaCocina