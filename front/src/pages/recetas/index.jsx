import Banner from "./Banner"
import Pagination from "components/Pagination"
import useQueryFetcher from 'src/utils/useQueryFetcher'
import Card from './Card'

const MyApp = () => {
    const [page, setPage] = useState(1)
    const [url, setUrl] = useState(`api/posts/receta/?limit=9${page && `&page=${page}`}`)
    // console.log(page.length == true);


    const usequery = useQueryFetcher(["receta"], url)

    useEffect(() => {
        setUrl(`api/posts/receta/?limit=9${page && `&page=${page}`}`)
    }, [page])
    useEffect(() => {
        usequery.refetch()
    }, [url])
    return (
        <>
            <Banner />

            <div className="cont my-20">
                <div className="grid grid-cols-1 mt-6 gap-6 md:grid-cols-3  my-10">
                    {usequery.data?.results.map((v, k) => (
                      <Card data={v}/>
                    ))}
                </div>
                {usequery?.data && <Pagination data={usequery.data} set={setPage} current={page} />}

            </div>
        </>

    )
}

export default MyApp