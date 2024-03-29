import Item from "./Item"
import useCarrusel from "src/utils/useCarrusel";
import useQueryFetcher from 'src/utils/useQueryFetcher'


const Destacados = () => {
    const [CarruselRef, arrowControler, current, dotControlerRef] = useCarrusel()

    const usequery = useQueryFetcher(["destacados"],'api/posts/products/producto/?limit=16&destacados=True')

    const {data} = useQueryFetcher(["sec", 2],'api/page/sec/2/')

    return (
        <div className="cont pb-4 pt-12">
            <div className="text-center">
                <h2 className="uppercase ">{data?.titulo}</h2>
                <p className="lg:text-xl">
                    {data?.text}
                </p>
            </div>

            <div className="carrusel-slider mt-12">

                <div ref={CarruselRef} className="slider slider-grid" style={{ "--grid": "2", "--grid-md": "4" }}>
                    {usequery?.data?.results.map((v,k)=>(
                        <div key={k} className="item-grid px-2  "><Item data={v} /></div>
                    ))}
                   
                </div>



                <div className="controls-side lg:pb-6">
                    <button onClick={() => arrowControler(false)} className="left-control">
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.375 8C19.375 8.29837 19.2565 8.58451 19.0455 8.79549C18.8345 9.00647 18.5484 9.125 18.25 9.125H4.46877L9.29689 13.9531C9.40177 14.0576 9.48499 14.1818 9.54177 14.3186C9.59855 14.4553 9.62778 14.6019 9.62778 14.75C9.62778 14.8981 9.59855 15.0447 9.54177 15.1814C9.48499 15.3182 9.40177 15.4424 9.29689 15.5469C9.0846 15.7564 8.79831 15.8739 8.50002 15.8739C8.20172 15.8739 7.91544 15.7564 7.70314 15.5469L0.953141 8.79687C0.848261 8.69236 0.765044 8.56816 0.708263 8.43142C0.651482 8.29467 0.622253 8.14806 0.622253 8C0.622253 7.85193 0.651482 7.70532 0.708263 7.56858C0.765044 7.43183 0.848261 7.30764 0.953141 7.20312L7.70314 0.453123C7.91448 0.241779 8.20113 0.123047 8.50002 0.123047C8.64801 0.123047 8.79455 0.152196 8.93128 0.208831C9.06801 0.265466 9.19224 0.348476 9.29689 0.453123C9.40154 0.557771 9.48455 0.682005 9.54118 0.818733C9.59782 0.955461 9.62697 1.10201 9.62697 1.25C9.62697 1.39799 9.59782 1.54454 9.54118 1.68126C9.48455 1.81799 9.40154 1.94223 9.29689 2.04687L4.46877 6.875H18.25C18.5484 6.875 18.8345 6.99353 19.0455 7.2045C19.2565 7.41548 19.375 7.70163 19.375 8Z"
                                fill="white" />
                        </svg>
                    </button>
                    <button onClick={() => arrowControler(true)} className="right-control">
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.0469 8.79687L12.2969 15.5469C12.0846 15.7564 11.7983 15.8739 11.5 15.8739C11.2017 15.8739 10.9154 15.7564 10.7031 15.5469C10.5982 15.4424 10.515 15.3182 10.4582 15.1814C10.4015 15.0447 10.3722 14.8981 10.3722 14.75C10.3722 14.6019 10.4015 14.4553 10.4582 14.3186C10.515 14.1818 10.5982 14.0576 10.7031 13.9531L15.5312 9.125H1.75C1.45163 9.125 1.16548 9.00647 0.954505 8.79549C0.743526 8.58451 0.625 8.29837 0.625 8C0.625 7.70163 0.743526 7.41548 0.954505 7.2045C1.16548 6.99352 1.45163 6.875 1.75 6.875H15.5312L10.7031 2.04687C10.4918 1.83553 10.373 1.54888 10.373 1.25C10.373 1.10201 10.4022 0.955461 10.4588 0.818733C10.5155 0.682005 10.5985 0.557771 10.7031 0.453123C10.8078 0.348476 10.932 0.265466 11.0687 0.208831C11.2055 0.152196 11.352 0.123047 11.5 0.123047C11.7989 0.123047 12.0855 0.241779 12.2969 0.453123L19.0469 7.20312C19.1518 7.30764 19.235 7.43183 19.2918 7.56858C19.3485 7.70532 19.3778 7.85193 19.3778 8C19.3778 8.14806 19.3485 8.29467 19.2918 8.43142C19.235 8.56816 19.1518 8.69236 19.0469 8.79687Z"
                                fill="white" />
                        </svg>
                    </button>
                </div>
                <div className="py-6 ">
                    <div ref={dotControlerRef} className="dot-control  ">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destacados