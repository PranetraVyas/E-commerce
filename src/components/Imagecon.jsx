import { useEffect, useState } from "react";

import p1 from '../assets/p1.webp';
import p2 from '../assets/p2.webp';
import p3 from '../assets/p3.webp';
import p4 from '../assets/p4.webp';

const images = [p1, p2, p3, p4];

function Imagecon(){
    const[currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000)
        return () => clearInterval(interval);
    }, []);

    


    return(
        <>
        <div className="border-1 border-black h-166 w-370 ml-10 mt-20 overflow-hidden">
            <img src={images[currentIndex]} alt="" className="duration-1000 object-cover h-full w-full"/>        
        </div>
        </>
    )
}
export default Imagecon