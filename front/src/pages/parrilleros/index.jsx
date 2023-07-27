import Calculadora from "components/Calculadora"
import Pagination from "components/Pagination"

import useQueryFetcher from 'src/utils/useQueryFetcher'
import Card from './Card'
import { useEffect, useState } from "react"
import Layer from "../../components/Layer"


const MyApp = () => {


    const [page, setPage] = useState(1)
    const [url, setUrl] = useState(`api/posts/trucos/?limit=4${page && `&page=${page}`}`)
    // console.log(page.length == true);


    const usequery = useQueryFetcher(["trucos", "parrilleros"], url)

    useEffect(() => {
        setUrl(`api/posts/trucos/?limit=4${page && `&page=${page}`}`)
    }, [page])
    useEffect(() => {
        usequery.refetch()
    }, [url])


    const pagecont = 4
    const { data:pageCont } = useQueryFetcher(["page", pagecont], `api/page/pag/${pagecont}/`)
    console.log(pageCont);
    return (
        <Layer
            meta={{ title: "Consejos para parrilleros UPISA", description: "Descubre nuestros consejos y secretos para lograr el asado perfecto." }}
            header={{ title: pageCont.titulo, text: pageCont.text}}
            
         >
            <Calculadora />

            <div className="cont  my-20">
                <div className="text-center">
                    <h3>{pageCont.seccion[0].titulo}</h3>

                </div>


                <div className="grid grid-cols-1 mt-6 gap-6 md:grid-cols-2  my-10">
                    {usequery.data?.results.map((v, k) => (
                        <Card data={v} />
                    ))}
                </div>

                {usequery?.data && <Pagination data={usequery.data} set={setPage} current={page} />}




            </div>

        </Layer>

    )
}

export default MyApp