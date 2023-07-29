

const Result = ({ data, text }) => {




    let total = 0
    for (let index = 0; index < Object.entries(data.personas).length; index++) {
        const element = Object.entries(data.personas)[index];
        total += element[1].cantidad * element[1].porcion
    }

    console.log(text);

    return (
        <div className="p-6 flex flex-col whitespace-nowrap">

            <div className="flex gap-6 flex-wrap">
                {Object.entries(data.personas).map((persona, key) => (
                    <div key={key} className="flex  gap-2  justify-between">
                        <h4 className="uppercase">{persona[1].cantidad} {text.personas[key]}</h4>
                        <div className="px-3 py-2.5 bg-[#FDF2E8]  justify-center items-center gap-2 inline-flex">
                            <div className="text-center text-neutral-900">
                                {text.personas[2]}: <span className="font-semibold ">{persona[1].cantidad * persona[1].porcion} g</span>
                            </div>
                        </div>
                    </div>
                ))}


            </div>

            <div className="grid 
            grid-cols-2 
            md:grid-cols-1  
            xl:grid-cols-2  
            
            mt-16 gap-4 ">


                {/* carnes */}
                <div className="flex flex-col [&>div]:min-h-[3rem] whitespace-normal">
                    <div className="flex items-center gap-2 ">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3501 6.98501L12.9884 5.34584C12.7946 5.15207 12.6515 4.91349 12.5719 4.65123C12.4923 4.38897 12.4786 4.11113 12.5321 3.84231C12.5855 3.57349 12.7044 3.32199 12.8782 3.11009C13.052 2.89819 13.2754 2.73244 13.5286 2.6275C13.7818 2.52256 14.057 2.48168 14.3297 2.50848C14.6025 2.53528 14.8644 2.62893 15.0924 2.78114C15.3203 2.93335 15.5072 3.13942 15.6364 3.3811C15.7657 3.62278 15.8334 3.8926 15.8334 4.16668C16.1076 4.16648 16.3775 4.23391 16.6194 4.363C16.8612 4.49209 17.0675 4.67884 17.2199 4.9067C17.3724 5.13457 17.4662 5.39652 17.4932 5.66934C17.5202 5.94215 17.4794 6.21741 17.3746 6.47072C17.2698 6.72402 17.1041 6.94756 16.8922 7.12151C16.6803 7.29546 16.4288 7.41446 16.1599 7.46797C15.891 7.52147 15.6131 7.50782 15.3507 7.42822C15.0884 7.34863 14.8498 7.20556 14.6559 7.01168L13.1393 8.52918" stroke="#4688C3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.91982 15.4969C7.19788 17.775 9.83607 18.8303 10.8124 17.854C11.7887 16.8776 10.7334 14.2395 8.45536 11.9614C6.1773 9.68334 3.53911 8.62807 2.5628 9.60438C1.58649 10.5807 2.64176 13.2189 4.91982 15.4969Z" stroke="#4688C3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.25014 13.3334L7.08348 14.1667M10.8126 17.8542C14.0668 14.5992 14.8585 10.1142 12.5801 7.8367C10.3026 5.55837 5.81764 6.35003 2.56348 9.6042" stroke="#4688C3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>


                        {text.carnes}

                    </div>

                    {data.carnes.map((v, k) => (
                        <div className="flex items-center gap-2 ">
                            <div className="whitespace-nowrap text-center text-neutral-900 px-3 py-2.5 bg-[#FDF2E8]  justify-center items-center gap-2 inline-flex">
                                {total} g
                            </div>
                            <span>
                                {v}
                            </span>
                        </div>
                    ))}

                </div>


                <div className="flex flex-col [&>div]:min-h-[3rem] whitespace-normal">
                    <div className="flex items-center gap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M17.5 4.80834C17.375 4.70834 17.2666 4.625 17.1583 4.54167L17.1833 4.50834C17.8333 3.85834 17.8333 2.80834 17.1833 2.15834C16.5333 1.50834 15.4833 1.50834 14.825 2.15834L14.2083 2.775C13.6511 2.35298 12.9597 2.14742 12.2624 2.19646C11.5651 2.2455 10.9093 2.54581 10.4166 3.04167L3.04163 10.4167C2.54578 10.9093 2.24546 11.5652 2.19643 12.2624C2.14739 12.9597 2.35295 13.6511 2.77497 14.2083L2.1583 14.825C1.49997 15.4833 1.49997 16.5333 2.1583 17.1833C2.8083 17.8333 3.8583 17.8333 4.5083 17.1833L4.54163 17.1583C4.62497 17.2667 4.7083 17.375 4.8083 17.5C5.94163 18.6167 7.79163 18.6167 8.9333 17.5L17.475 8.93334C18.0209 8.38729 18.3297 7.6481 18.3344 6.87597C18.339 6.10383 18.0392 5.36096 17.5 4.80834ZM3.97497 13.0083C3.86271 12.775 3.82567 12.5126 3.86896 12.2574C3.91225 12.0021 4.03374 11.7666 4.21663 11.5833L11.5833 4.21667C11.7666 4.03377 12.0021 3.91229 12.2573 3.869C12.5126 3.82571 12.775 3.86275 13.0083 3.975L3.97497 13.0083ZM16.3 7.75L7.74997 16.3C7.26663 16.7917 6.47497 16.7917 5.9833 16.3C5.49997 15.8333 5.49997 15 5.9833 14.5333L14.5333 5.98334C15 5.5 15.8333 5.5 16.3 5.98334C16.7916 6.475 16.7916 7.26667 16.3 7.75Z" fill="#4688C3" />
                        </svg>
                        {text.embutidos}

                    </div>

                    {data.embutidos.map((v, k) => (
                        <div className="flex items-center gap-2 ">
                            <div className="whitespace-nowrap text-center text-neutral-900 px-3 py-2.5 bg-[#FDF2E8]  justify-center items-center gap-2 inline-flex">
                                {total} g
                            </div>
                            <span>
                                {v}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Result;