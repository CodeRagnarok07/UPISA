import VideCont from "components/core/VideCont"
import Historia from "./Historia"
import Carrusel from "./Carrusel"

import Certificaciones from "components/core/Certificaciones"


import useQueryFetcher from 'src/utils/useQueryFetcher'
import Layer from "src/components/Layer"

const Empresa = () => {
    const page = 2
    const { data } = useQueryFetcher(["page", page], `api/page/pag/${page}/`)
    console.log(data);

    return (
        <Layer
            meta={{ title: "Sobre UPISA", description: "Descubre nuestra pasión por la calidad y la tradición en el frigorífico líder en Paraguay." }}
            header={{ title: data.titulo, text: "" }}
        >
            {/* <VideCont /> */}
            <div className="cont my-20">
                <Historia data={data.seccion[0]}/>
                <img className="my-20" src="assets/banner/exports.png" alt="" />

                <div className="gap-12 flex flex-col ">

                    {data?.seccion[1].contenido.map((v, k) => (

                        <div key={k} className={k == 0 ? "flex-row-reverse lg:flex items-center" : " lg:flex items-center"}>

                            <div
                                className={k == 0 ? "w-full lg:w-[65%] -mb-8 lg:mb-0 lg:-ml-[15%]" : "w-full lg:w-[65%] -mb-8 lg:mb-0 lg:-mr-[15%]"}
                            >
                                <img className="rounded-xl" src={v.imagen} alt={v.titulo} />
                            </div>

                            <div className="bg-white rounded-lg w-5/6 mx-auto z-50 p-5 lg:mx-0 lg:w-[440px] relative">
                                <div className="flex items-center gap-4 mb-3">
                                    <svg width="38" height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M28.2657 35.375C27.6624 35.3713 27.0722 35.198 26.5626 34.875L19.0001 30.0781L11.9845 34.5313C11.4081 34.8987 10.7342 35.0834 10.0511 35.0611C9.36792 35.0388 8.70747 34.8105 8.15633 34.4063C7.58654 33.9952 7.15366 33.4222 6.914 32.7617C6.67434 32.1012 6.639 31.384 6.81258 30.7031L8.85946 22.7031L2.03133 17.0313C1.53609 16.613 1.17653 16.0568 0.998451 15.4335C0.820367 14.8102 0.831813 14.148 1.03133 13.5313C1.22671 12.921 1.60065 12.3833 2.10482 11.9878C2.60899 11.5922 3.2202 11.357 3.85946 11.3125L12.7345 10.75L16.047 2.39064C16.2797 1.79694 16.6859 1.28716 17.2127 0.927824C17.7395 0.568489 18.3624 0.376282 19.0001 0.376282C19.6378 0.376282 20.2606 0.568489 20.7874 0.927824C21.3142 1.28716 21.7205 1.79694 21.9532 2.39064L25.2657 10.75L34.1407 11.3125C34.78 11.357 35.3912 11.5922 35.8953 11.9878C36.3995 12.3833 36.7734 12.921 36.9688 13.5313C37.1684 14.148 37.1798 14.8102 37.0017 15.4335C36.8236 16.0568 36.4641 16.613 35.9688 17.0313L29.1407 22.7031L31.3438 31.3438C31.5072 31.9721 31.4767 32.6351 31.2564 33.2458C31.0361 33.8565 30.6363 34.3863 30.1095 34.7656C29.5757 35.1604 28.9296 35.3739 28.2657 35.375ZM19.0001 26.2344C19.5974 26.2304 20.1833 26.3986 20.6876 26.7188L27.3751 30.9531L25.4376 23.3125C25.2877 22.7186 25.3078 22.0946 25.4957 21.5116C25.6836 20.9286 26.0316 20.4102 26.5001 20.0156L32.5626 14.9688L24.672 14.4688C24.0703 14.4258 23.493 14.2138 23.0065 13.8573C22.52 13.5007 22.144 13.014 21.922 12.4531L19.0001 5.10939L16.0782 12.4531C15.8561 13.014 15.4802 13.5007 14.9937 13.8573C14.5072 14.2138 13.9299 14.4258 13.3282 14.4688L5.43758 14.9688L11.5001 20.0156C11.9685 20.4102 12.3166 20.9286 12.5045 21.5116C12.6923 22.0946 12.7125 22.7186 12.5626 23.3125L10.6251 30.9531L17.3126 26.7188C17.8169 26.3986 18.4027 26.2304 19.0001 26.2344Z" fill="#EA8215"></path>
                                    </svg>

                                    <h3 className="uppercase">{v.titulo}</h3>
                                </div>

                                <p>
                                    {v.text}
                                </p>
                            </div>
                        </div>
                    ))}



                </div>

            </div>

            <Certificaciones />


            <Carrusel />

        </Layer>

    )
}

export default Empresa