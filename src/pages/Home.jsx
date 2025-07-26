import Navbar from "../components/Navbar"
import Offer from "../components/Offer"
import Imagecon from "../components/Imagecon"

function Home(){
    return (
        <>
        <div className="bg-gray-200 h-screen w-screen">
        <Navbar/>
            <div className="flex">
                <Offer/>
                <Imagecon/>
            </div>
        </div>
        </>
    )
}

export default Home