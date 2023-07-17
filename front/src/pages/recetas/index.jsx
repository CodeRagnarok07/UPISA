import Banner from "./Banner"
import Pagination from "components/Pagination"
import useQueryFetcher from 'src/utils/useQueryFetcher'
import Card from './Card'

const MyApp = () => {
    const usequery = useQueryFetcher('api/posts/receta/')

    return (
        <>
            <Banner />

            <div className="cont my-20">
                <div className="grid grid-cols-1 mt-6 gap-6 md:grid-cols-3  my-10">
                    {usequery.data?.results.map((v, k) => (
                      <Card data={v}/>
                    ))}
                </div>
                <Pagination />
            </div>
        </>

    )
}

export default MyApp