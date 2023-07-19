import { NavLink } from "react-router-dom"


const Card = ({ data }) => {
    return (
        <NavLink className="bg-white flex flex-col  rounded-lg text-black w-auto  "
            to={data.url}>
                <img className="rounded-t-xl max-h-80  h-full w-full object-cover" src={data.portada} alt="" />

            <div className="p-5 md:p-9 mt-auto">

                <h3 className="uppercase">{data.titulo}</h3>
                <div className="flex gap-6 mt-5 ">

                    <div className="flex items-center gap-3">
                        <i>
                            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.25 2.1875H12.6875V1.5625C12.6875 1.31386 12.5887 1.0754 12.4129 0.899587C12.2371 0.723772 11.9986 0.625 11.75 0.625C11.5014 0.625 11.2629 0.723772 11.0871 0.899587C10.9113 1.0754 10.8125 1.31386 10.8125 1.5625V2.1875H5.1875V1.5625C5.1875 1.31386 5.08873 1.0754 4.91291 0.899587C4.7371 0.723772 4.49864 0.625 4.25 0.625C4.00136 0.625 3.7629 0.723772 3.58709 0.899587C3.41127 1.0754 3.3125 1.31386 3.3125 1.5625V2.1875H1.75C1.33623 2.18955 0.939996 2.35483 0.647415 2.64741C0.354833 2.94 0.189553 3.33623 0.1875 3.75V16.25C0.189553 16.6638 0.354833 17.06 0.647415 17.3526C0.939996 17.6452 1.33623 17.8104 1.75 17.8125H14.25C14.6638 17.8104 15.06 17.6452 15.3526 17.3526C15.6452 17.06 15.8104 16.6638 15.8125 16.25V3.75C15.8104 3.33623 15.6452 2.94 15.3526 2.64741C15.06 2.35483 14.6638 2.18955 14.25 2.1875ZM13.9375 4.0625V5.9375H2.0625V4.0625H13.9375ZM2.0625 15.9375V7.8125H13.9375V15.9375H2.0625Z" fill="#0B9839"></path>
                            </svg>
                        </i>
                        <p className="">{data.publicar}</p>
                    </div>

                </div>

            </div>

        </NavLink>
    )
}

export default Card