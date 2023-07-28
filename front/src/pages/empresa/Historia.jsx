


export default function({data}){

    
    return (
        <section class="">

        <div class="title mb-4">

            <h2 class="uppercase">
                {data?.titulo}
            </h2>
        </div>

        <div class="flex-col gap-16">

        {data?.contenido.map((v,k)=>(

            <div className={k == 0 ? "mb-6 flex flex-col xl:flex-row gap-10": "mb-6 flex flex-col xl:flex-row-reverse gap-10"}>
                <div class="w-full">
                    <img class=" w-auto object-cover rounded-xl" src={v.imagen} alt=""/>
                </div>
                <div class="w-full justify-center ">
            
                    <p class="mt-4 mb-6 text-[19px] leading-5 " dangerouslySetInnerHTML={{__html: v.text}}>                    
                        

                    </p>
                </div>
            </div>
        ))}

            {/* <div class="mb-6 flex flex-col xl:flex-row-reverse  gap-10">
                <div class="w-full">
                    <img class=" w-auto object-cover rounded-xl" src="assets/about/empresa02.jpg" alt=""/>

                </div>
                <div class="w-full justify-center ">
                   
                    <p class="mt-4 mb-6  text-[19px] leading-5 ">
                        Desde allí, se procesan y envasan todos los productos para consumo nacional e
                        internacional. En sus inicios, la planta industrial contaba con una capacidad de faenar 90
                        cerdos/día, hoy se encuentra faenando 1500 cerdos/día con una capacidad de procesamiento de
                        embutidos embutidos de 160.000 kg/día.
                        <br/><br/>
                        UPISA es el único frigorífico del país habilitado para la exportación de cortes porcinos y
                        cuenta además con el reconocimiento de la <span class="font-bold">Marca País Paraguay</span>, porque es una empresa que representa al país en el mundo, por la calidad, transparencia,
                        sustentabilidad, innovación e integridad en sus operaciones comerciales.<br/><br/>
                        Todo esto, permite a UPISA entregar productos de calidad excepcional.<br/><br/>
                    </p>
                </div>
            </div> */}
        </div>
    </section>
    )
}