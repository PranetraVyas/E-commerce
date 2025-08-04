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
                <div className="border-1 border-black w-screen flex flex-col justify-center items-center"> 
                    <div>
                        <h1>Your Bulk Orders</h1>
                        <h1>Are now Hassle Free</h1>
                    </div>
                    <div>
                        <h1>Got A Big BoAt Order?</h1>
                        <h1>Come sail with us</h1>
                    </div>
                    <div>
                        <h1>For Shipments of 25 units or more,</h1>
                        <h1>Hit us up!</h1>
                    </div>
                    <div>
                        <button>Submit Your Requirement</button>
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