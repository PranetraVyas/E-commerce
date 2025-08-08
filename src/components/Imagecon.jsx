import { useEffect, useState } from "react";
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';


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
        }, 4000)
        return () => clearInterval(interval);
    }, []);

    return(
        <>
        <div className="h-70 w-screen ml-5 overflow-hidden relative flex justify-center">       
            <button className="absolute top-35 left-5 h-5 w-5 bg-black text-white rounded-full flex justify-center items-center" onClick={()=> setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length )}><ArrowLeft /></button>
            <button className="absolute right-5 top-35 h-5 w-5 bg-black text-white rounded-full  flex  justify-center items-center" onClick={()=> setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}><ArrowRight /></button>      
            <img src={images[currentIndex]} alt="" className="object-cover h-70 w-100"/>        
        </div>
        </>
    )
}
export default Imagecon