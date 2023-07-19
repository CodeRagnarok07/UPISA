import { NavLink } from "react-router-dom"


const Item = ({data}) => {
    // console.log(data);
    return (

        <NavLink to={`/productos/${data.url}`} className="z-50 rounded-xl w-full bg-white text-black flex flex-col justify-between" href="#">
            <figure class="
            flex justify-center
            mx-auto mt-4 lg:mt-12
            h-[90px] w-full  md:h-[150px]  lg:h-[200px]  " >
                <img class="h-full w-4/5  md:w-full object-contain" src={data.miniatura} alt="" />
            </figure>
            <h5 class="p-3 sm:p-4 lg:p-9  text-center font-semibold">
                {data.nombre}
            </h5>
        </NavLink>
    )
}

export default Item