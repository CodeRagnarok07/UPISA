import FormContact from "./Form"
import Card from './Card'

import useQueryFetcher from 'src/utils/useQueryFetcher'
import Layer from "src/components/Layer"

const Contacto = () => {

    const usequery = useQueryFetcher(["contact"], 'api/core/sucursales/')

    const data = usequery.data?.filter(v => !v.es_central)

    const { data: text } = useQueryFetcher(["page", 7], 'api/page/pag/7/')

    console.log(text?.seccion[0].titulo);
    return (
        <Layer
            meta={{ title: "Contacto UPISA", description: "¡Ponte en contacto con nosotros en cualquier momento! Nuestra página de información de contacto te brinda todos los detalles necesarios para conectarte con nuestro frigorífico desde cualquier parte del mundo." }}
            header={{ title: text?.titulo, text: text?.text }}
        >

            <div className="cont mt-20 mb-28 ">

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    <FormContact />


                    <Card data={usequery.data?.filter(v => v.es_central)[0]} />


                </div>

                <div class="text-center mt-16 mb-6 lg:mt-28 lg:mb-16">
                    <h2>
                        {text?.seccion[0].titulo}
                    </h2>
                    <p>
                        {text?.seccion[0].text}
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {data?.map((v, k) => (
                        <Card key={k} data={v} />
                    ))}

                </div>
            </div>
        </Layer>

    )
}

export default Contacto