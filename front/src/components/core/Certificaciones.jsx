

import useQueryFetcher from 'src/utils/useQueryFetcher'


const VideCont = () => {
    const {data} = useQueryFetcher(["sec", 1],'api/page/sec/1/')
    // console.log(data);

    return (

        <section className="cont  pb-12">
            
            <div className="text-center mb-8">
                <h2>{data?.titulo}</h2>
                <p>{data?.text}</p>
            </div>

            <div className="certificaciones flex flex-col md:flex-row  justify-between gap-4">


                {data?.contenido.map((v, k) => (

                    <div className="bg-white rounded-xl p-5 flex flex-col justify-center items-center text-black">

                        <div className="img-cont">
                            <img className="" src={v.imagen} alt="" />

                        </div>

                        <div className="text-center">
                            <h4 className="mb-4 uppercase">{v.titulo}</h4>
                            <p className="">{v.text}</p>
                        </div>
                    </div>

                ))}



            </div>



        </section>
    )
}

export default VideCont