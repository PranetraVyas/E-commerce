import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Offer from "../components/Offer"
import coop from '../assets/coop.webp';
import Cards from "../components/Cards";
import coops from '../assets/coop2.webp'


function Corp(){
    return(
        <>
        <div className="h-screen w-screen overflow-x-hidden">
            <Navbar/>
            <div className="flex">
                <Offer/>
                <img src={coop} alt="" className='h-190'/>  
                <div className="border-1 border-black w-screen flex flex-col justify-center items-center "> 
                    <div className="mr-20 mt-20">
                        <h1 className="font-bold text-6xl">Your Bulk Orders</h1>
                        <h1 className="text-4xl">Are now Hassle Free</h1>
                    </div>
                    <div className="mr-12 mt-10">
                        <h1 className="font-bold text-5xl">Got A Big BoAt Order?</h1>
                        <h1 className="text-2xl">Come sail with us</h1>
                    </div>
                    <div className="mr-45 mt-15">
                        <h1 className="text-2xl">For Shipments of 25 units or more,</h1>
                        <h1 className="font-bold text-2xl">Hit us up!</h1>
                    </div>
                    <div className="mr-20 mt-5 flex justify-center w-full">
                        <button className="bg-black text-amber-50 p-5 w-120 rounded-2xl text-2xl">Submit Your Requirement</button>
                    </div>
                </div>    
            </div>
            <div className="mt-2s">
                <Cards/>
            </div>
            <img src={coops} alt="" className='h-190'/> 
            <Footer/>
        </div>
        </>
    )
}

export default Corp