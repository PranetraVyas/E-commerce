import Navbar from "../components/Navbar"
import Offer from "../components/Offer"
import Imagecon from "../components/Imagecon"
import Secbar from "../components/Secbar"
import Footer from "../components/Footer"
import Cards from "../components/Cards"
import Cardsec from "../components/Cardsec"
import Add from "../components/Add"

function Home(){
    return (
        <>
        <div className="bg-gray-200 h-screen w-screen overflow-x-hidden">
        <Navbar/>
            <div className="flex">
                <Offer/>
                <Imagecon/>
            </div>
            <div>
                <Secbar/>
                <Cards/>
                <Add/>
                <Cardsec/>
            </div>
            <div className="flex-col">
                <Footer/>
            </div>
        </div>
        </>
    )
}

export default Home