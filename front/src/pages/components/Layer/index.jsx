
import Navbar from './Navbar'
import Footer from './Footer'
const Layer = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layer