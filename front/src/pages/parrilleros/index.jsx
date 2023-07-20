import Calculadora from "components/Calculadora"
import Pagination from "components/Pagination"

import useQueryFetcher from 'src/utils/useQueryFetcher'
import Card from './Card'
import { useEffect, useState } from "react"


const MyApp =()=>{


    const [page, setPage] = useState(1)
    const [url, setUrl] = useState(`api/posts/trucos/?limit=4${page && `&page=${page}`}`)
    // console.log(page.length == true);


    const usequery = useQueryFetcher(["trucos"], url)

    useEffect(() => {
        setUrl(`api/posts/trucos/?limit=4${page && `&page=${page}`}`)
    }, [page])
    useEffect(() => {
        usequery.refetch()
    }, [url])
    return (
        <div>
            <Calculadora/>

            <div className="cont  my-20">
                <div className="text-center">
                    <h3>TRUCOS Y CONSEJOS</h3>

                </div>


                <div className="grid grid-cols-1 mt-6 gap-6 md:grid-cols-2  my-10">
                    {usequery.data?.results.map((v, k) => (
                       <Card data={v}/>
                    ))}
                </div>

                {usequery?.data && <Pagination data={usequery.data} set={setPage} current={page} />}




            </div>

        </div>
    )
}

export default MyApp