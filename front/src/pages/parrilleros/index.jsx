import Calculadora from "components/Calculadora"
import Pagination from "components/Pagination"

import useQueryFetcher from 'src/utils/useQueryFetcher'
import Card from './Card'


const MyApp =()=>{

    const usequery = useQueryFetcher(["trucos"],'api/posts/trucos/')

 
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

                <Pagination/>



            </div>

        </div>
    )
}

export default MyApp