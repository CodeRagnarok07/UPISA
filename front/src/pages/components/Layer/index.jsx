
import Navbar from './Navbar'
import Footer from './Footer'
const Layer = ({ children, header }) => {


    return (
        <>

            <Navbar />

            {header &&
                <header className="bg-primary bg-texture flex flex-col  pt-5 lg:pt-32 pb-24">
                    <div className="cont text-center text-white w-auto">
                        <h1 className='uppercase mb-4'>
                            {header.title}
                        </h1>
                        <p>{header.text}</p>
                    </div>
                </header>
            
            }

            {children}
            <Footer />
        </>
    )
}

export default Layer