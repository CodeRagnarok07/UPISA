
import Navbar from './Navbar'
import Footer from './Footer'


import { Helmet } from "react-helmet";
import { useState } from 'react';


const Layer = ({ children, header, meta }) => {

    const userLocale = navigator.languages && navigator.languages.length ? navigator.languages[0].split("-")[0] : navigator.language;
    localStorage.setItem("userlang",userLocale)

    return (


        <>
            <Helmet>
                <html lang={localStorage.userlang} />
                <title>{meta?.title}</title>
                <meta name="description" content={meta?.description} />

            </Helmet>

            <header
                className={header ? "flex flex-col  bg-primary bg-texture" : "flex flex-col "} >
                <Navbar  />

                {header &&
                    <div className="cont text-center text-white w-auto py-10 pb-16">
                        <h1 className='uppercase mb-4'>
                            {header.title}
                        </h1>
                        <p className='w-4/5 md:w-2/3 mx-auto leading-6'>
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