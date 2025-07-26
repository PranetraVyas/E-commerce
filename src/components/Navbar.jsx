import { Search } from 'lucide-react';
import { User } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';

function Navbar(){
    return(
        <>
        <div className="h-20 w-screen bg-amber-50 flex fixed">
            <div className="border-1 border-black h-20 w-50">
                <img src="logo.svg" alt="" />
            </div>
            <div className="border-1 border-amber-400 h-20 w-200">
            </div>
            <div className="h-20 w-140 flex justify-center items-center gap-20">
                <span className='absolute left-265'>
                    <Search />
                </span>
                <input type="text" className="bg-gray-200 rounded-3xl h-10 w-70 text-center" placeholder="Search"/>
                <div className='flex gap-5'>
                    <User />
                    <ShoppingBag />
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar