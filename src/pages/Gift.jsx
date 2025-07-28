import Navbar from "../components/Navbar"
import Offer from "../components/Offer"
import Img from "../components/Img"
import Cardsec from "../components/Cardsec"
import Footer from "../components/Footer"

function Gift(){
    return(
        <>
        <div className="h-screen w-screen overflow-x-hidden">
            <Navbar/>
            <div className="flex">
                <Offer/>
                <Img/>
            </div>
            <div>
                <Cardsec/>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default Gift