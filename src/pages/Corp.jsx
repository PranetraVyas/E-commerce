import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Offer from "../components/Offer"


function Corp(){
    return(
        <>
        <div className="h-screen w-screen overflow-x-hidden">
            <Navbar/>
            <div className="flex">
                <Offer/>
               
            </div>
            <div>
                
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default Corp