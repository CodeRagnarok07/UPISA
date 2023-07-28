import { NavLink } from "react-router-dom"

import Pagination from 'components/Pagination'
import Item from './Item'


import useQueryFetcher from 'src/utils/useQueryFetcher'
import { useEffect, useState } from 'react'
import BanerContact from "./BannerContact"
import Layer from "../../components/Layer"

const Products = () => {
    const pageLimit = 16

    const [filter, setFilter] = useState()
    const [subFilter, setSubFilter] = useState([])
    const [page, setPage] = useState(1)
    const [url, setUrl] = useState(`api/posts/products/producto/?limit=${pageLimit}${page && `&page=${page}`}`)
    // console.log(page.length == true);


    const usequery = useQueryFetcher(["products"], url)


    useEffect(() => {
        setUrl(`api/posts/products/producto/?limit=${pageLimit}${filter !== undefined ? `&filter=${filter.url}` : ""}${page && `&page=${page}`}`)
    }, [page])
    useEffect(() => {
        usequery.refetch(["products"])
    }, [url])

    // Filter

    useEffect(() => {
        if (filter !== undefined) {
            setUrl(`api/posts/products/producto/?limit=${pageLimit}${filter !== undefined ? `&filter=${filter.url}` : ""}`)
        }
    }, [filter])
    useEffect(() => {

        if (subFilter?.length !== 0) {
            setUrl(`api/posts/products/producto/?limit=${pageLimit}${`&filter=${filter.url}`}${`&Subfilter=${subFilter.map(v => `${v}`)}`}`)
        } else {
            setUrl(`api/posts/products/producto/?limit=${pageLimit}${filter !== undefined ? `&filter=${filter.url}` : ""}`)
        }
    }, [subFilter])

    const pagecont = 3
    const { data:pageCont } = useQueryFetcher(["page", pagecont], `api/page/pag/${pagecont}/`)

    const usequeryFilters = useQueryFetcher(["products-filters"], "api/posts/products/categorias/")
    // console.log(usequeryFilters.data);



    return (
        <Layer
            meta={{ title: "Productos UPISA", description: "Explora nuestro completo catálogo de productos de primera calidad, elaborados con dedicación y tradición desde Paraguay." }}
            header={{ title: pageCont?.titulo, text: pageCont?.text}}
        >
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
                    <li
                        onClick={() => {
                            setPage(1)
                            setFilter(undefined)
                            setSubFilter([])

                        }}
                        className="hover:bg-[var(--primary)] hover:text-white" >
                        Todos
                    </li>
                    {usequeryFilters.data?.map((v, k) => (

                        <li
                            onClick={() => {
                                setPage(1)
                                setFilter(v)
                                setSubFilter([])

                            }}
                            className="hover:bg-[var(--primary)] hover:text-white" >
                            {v.nombre}
                        </li>
                    ))}
                </ul>

                {filter &&
                    <div class="flex flex-start relative z-[1000] mt-10">


                        <div
                            onClick={(e) => {
                                e.currentTarget.nextElementSibling.classList.toggle("hidden")
                                e.currentTarget.children[0].classList.toggle("rotate-180")
                            }}
                            className="cursor-pointer bg-[#FAE0C9] gap-4 px-4 py-3 text-[var(--primary)] flex items-center">
                            FILTRAR
                            <div className="svg">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.25 13.4376C16.0014 13.4365 15.7632 13.3384 15.5859 13.1642L9.99998 7.57823L4.41404 13.1642C4.23792 13.3403 3.99905 13.4392 3.74998 13.4392C3.50091 13.4392 3.26204 13.3403 3.08592 13.1642C2.9098 12.988 2.81085 12.7492 2.81085 12.5001C2.81085 12.251 2.9098 12.0122 3.08592 11.836L9.33592 5.58604C9.42301 5.49864 9.52651 5.42929 9.64046 5.38198C9.75442 5.33466 9.87659 5.3103 9.99998 5.3103C10.1234 5.3103 10.2455 5.33466 10.3595 5.38198C10.4735 5.42929 10.5769 5.49864 10.664 5.58604L16.914 11.836C17.0014 11.9231 17.0708 12.0266 17.1181 12.1406C17.1654 12.2545 17.1898 12.3767 17.1898 12.5001C17.1898 12.6235 17.1654 12.7457 17.1181 12.8596C17.0708 12.9736 17.0014 13.0771 16.914 13.1642C16.7368 13.3384 16.4985 13.4365 16.25 13.4376Z" fill="#EA8215" />
                                </svg>

                            </div>
                        </div>

                        <form

                            className="hidden absolute top-[100%] py-3 z-100 rounded-lg border bg-white border-[var(--primary-gray)]">
                            {filter.sub_categorias.map((v, k) => (
                                <label class="flex items-center p-3 gap-3" >
                                    <input

                                        onClick={() =>
                                            !subFilter.includes(v.url) ? setSubFilter([...subFilter, v.url]) : setSubFilter((oldarray) => oldarray.filter((e) => e !== v.url))

                                        }
                                        checked={subFilter.includes(v.url)}
                                        type="checkbox" name="filter" value={v.nombre} />
                                    {v.nombre}

                                </label>
                            ))}
                        </form>

                    </div>
                }

                <div class="grid grid-cols-2 md:grid-cols-4 mt-9 gap-6">
                    {usequery.data?.results?.map((v, k) => (
                        <Item key={k} data={v} />
                    ))}
                </div>


                {usequery?.data && <Pagination data={usequery.data} set={setPage} current={page} />}


                <BanerContact />

            </div>
        </Layer>

    )
}

export default Products