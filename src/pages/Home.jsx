import Navbar from "../components/Navbar"
import Offer from "../components/Offer"
import Imagecon from "../components/Imagecon"
import Secbar from "../components/Secbar"

function Home(){
    return (
        <>
        <div className="bg-gray-200 h-screen w-screen overflow-x-hidden">
        <Navbar/>
            <div className="flex">
                <Offer/>
                <Imagecon/>
            </div>
            <div className="flex">
                <Secbar/>
            </div>
        </div>
        </>
    )
}

export default Home