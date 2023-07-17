import FormContact from "./Form"
import Card from './Card'

import useQueryFetcher from 'src/utils/useQueryFetcher'

const MyApp = () => {

    const usequery = useQueryFetcher('api/core/sucursales/')

    const data = usequery.data?.filter(v => !v.es_central)
    console.log(data);

    return (
        <div className="cont mt-20 mb-28 ">

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

                <FormContact />


                <Card data={usequery.data?.filter(v => v.es_central)[0]} />


            </div>

            <div class="text-center mt-16 mb-6 lg:mt-28 lg:mb-16">
                <h2>CENTROS DE DISTRIBUCIÓN</h2>
                <p>Tenemos un compromiso real con la seguridad alimentaria a través de la calidad, la excelencia y tecnología.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {data?.map((v, k) => (
                    <Card data={v} />
                ))}

            </div>
        </div>
    )
}

export default MyApp