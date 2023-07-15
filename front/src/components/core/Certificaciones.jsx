

const VideCont = () => {

    const list = [
        {
            name: "ASPAGRAN",
            text: "Es una asociación científica/gremial conformada por licenciados graduados en nutrición. Su función es avalar aquellos productos necesarios para una dieta balanceada.",
            img: "assets/certificaciones/0.png"
        },
        {
            name: "HACCP",
            text: "Es un sistema de seguridad alimentaria global para evaluar, prevenir y mitigar los riesgos en todas las etapas de la producción de alimentos garantizando la inocuidad de los mismos.",
            img: "assets/certificaciones/1.png"
        },
        {
            name: "MARCA PAÍS",
            text: "Es un sello que obtienen las empresas a través de la calidad y que ayuda al país a posicionarse en el mundo con el objetivo de incrementar la inversión extranjera.",
            img: "assets/certificaciones/2.png"
        }
    ]

    return (

        <section className="cont  pb-12">
            
            <div className="text-center mb-8">
                <h2>CERTIFICACIONES</h2>
                <p>Tenemos un compromiso real con la seguridad alimentaria a través de la excelencia en los procesos, la implementación de tecnología de punta y la trazabilidad verificable, siendo una empresa con máximo control del proceso sobre el análisis del producto final.</p>
            </div>

            <div className="certificaciones flex flex-col md:flex-row  justify-between gap-4">


                {list.map((v, k) => (

                    <div className="bg-white rounded-xl p-5 flex flex-col justify-center items-center text-black">

                        <div className="img-cont">
                            <img className="" src={v.img} alt="" />

                        </div>

                        <div className="text-center">
                            <h4 className="mb-4">{v.name}</h4>
                            <p className="">{v.text}</p>
                        </div>
                    </div>

                ))}



            </div>



        </section>
    )
}

export default VideCont