
import Navbar from './Navbar'
import Footer from './Footer'
const Layer = ({ children }) => {


    return (
        <>
            <header className="bg-primary pt-6 md:pt-0">
                <Navbar />
                <div className="cont text-center text-white">
                    <h1 className='uppercase'>
                        titulo
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae necessitatibus ullam dicta laudantium? Asperiores ab sequi iure commodi vel officiis dolor quidem vero esse. Nobis mollitia blanditiis assumenda magni excepturi.</p>
                </div>
            </header>

            {children}
            <Footer />
        </>
    )
}

export default Layer