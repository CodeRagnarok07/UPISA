import { NavLink } from "react-router-dom"
import Card from "../Card";


const More = ({ data }) => {

    console.log(data);
    return ( 


        <div class="grid grid-cols-1 gap-6  md:grid-cols-3 mt-12">
            {data.length &&

                data.map((v, k) => (
                    <Card data={v}/>

                ))

            }

        </div>

    )
}

export default More