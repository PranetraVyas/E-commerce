import { useState , useEffect } from "react";

function UseIsMediumScreen(breakpoint = 640){
    const [isMediumScreen , setIsMediumScreen ] = useState(() => window.innerWidth >= breakpoint);

    useEffect(() => {
        const handleResize = () => {
            setIsMediumScreen(window.innerWidth >= breakpoint);
        };


        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);


    return isMediumScreen;
}

export default UseIsMediumScreen