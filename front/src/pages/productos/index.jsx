import { NavLink } from "react-router-dom"

import Pagination from 'components/Pagination'
import Item from './Item'


import useQueryFetcher from 'src/utils/useQueryFetcher'
import { useEffect, useState } from 'react'
import BanerContact from "./BannerContact"

const MyApp = () => {

    const [filter, setFilter] = useState()
    const [page, setPage] = useState(1)
    const [url, setUrl] = useState(`api/posts/products/producto/?limit=16${page && `&page=${page}`}`)
    // console.log(page.length == true);


    const usequery = useQueryFetcher(["products"], url)

    useEffect(() => {
        setUrl(`api/posts/products/producto/?limit=16${page && `&page=${page}`}`)
    }, [page])
    useEffect(() => {
        usequery.refetch()
    }, [url])

    // Filter

    const handleSet = (v) => {
        setPage(v)
    }


    const usequeryFilters = useQueryFetcher(["products-filters"], "api/posts/products/categorias/")
    // console.log(usequeryFilters.data);



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
                {usequeryFilters.data?.map((v, k) => (

                    <li className="hover:bg-[var(--primary)] hover:text-white" >
                        {v.nombre}
                    </li>
                ))}






            </ul>

            <div class="grid grid-cols-2 md:grid-cols-4 mt-9 gap-6">
                {usequery.data?.results?.map((v, k) => (
                    <Item key={k} data={v} />
                ))}
            </div>


            {usequery?.data &&

                <Pagination data={usequery.data} set={handleSet} current={page} />
            }


           <BanerContact/>

        </div>
    )
}

export default MyApp