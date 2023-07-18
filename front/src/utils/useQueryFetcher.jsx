import { useQuery } from '@tanstack/react-query'
import fetcher from './query/fetcher'

const useQueryFetcher = (key,path) => {

    const nameKey = path.split("/")[2]

    // const update = (page) => fetcher(page)


    const query = useQuery({ 
        queryKey: key, 
        queryFn: () => fetcher(path),
        keepPreviousData : true
    })

    // console.log(path);
    // console.log(query?.data?.links);
    return query
}

export default useQueryFetcher