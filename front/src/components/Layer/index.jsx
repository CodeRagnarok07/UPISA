
import Navbar from './Navbar'
import Footer from './Footer'


import { Helmet } from "react-helmet";


const Layer = ({ children, header, meta }) => {


    return (


        <>
            <Helmet>

                <title>{meta?.title}</title>
            </Helmet>

            <header
                className={`flex flex-col ${header && "bg-primary bg-texture"}`} >
                <Navbar />

                {header &&
                    <div className="cont text-center text-white w-auto py-10 pb-16">
                        <h1 className='uppercase mb-4'>
                            {header.title}
                        </h1>
                        <p>
                            {header.text}

                        </p>
                    </div>
                }

            </header>


            {children}
            <Footer />
        </>
    )
}

export default Layer