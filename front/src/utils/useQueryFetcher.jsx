import { useQuery } from '@tanstack/react-query'
import fetcher from './query/fetcher'

const useQueryFetcher = (path) => {

    const nameKey = path.split("/")[path.split("/").length-2]
    const query = useQuery({ queryKey: [nameKey], queryFn: () => fetcher(path)})

    return query
}

export default useQueryFetcher