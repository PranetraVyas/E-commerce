import { Search } from 'lucide-react';
import { User } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import logo from '../assets/logo.svg'
import { Link , Outlet } from 'react-router-dom';

function Navbar(){
    return(
        <>
        <div className="h-20 w-screen bg-amber-50 flex fixed z-50">
            <div className="h-20 w-50 flex justify-center items-center">
                <Link to='/'><img src={logo} alt="no photo" className='size-20'/></Link>
            </div>
            <div className="h-20 w-200 flex justify-center items-center">
                <ol className='flex gap-15'>
                    <li><a href="" className='flex items-center gap-1 hover:font-bold hover:underline decoration-red-600 duration-200 decoration-1 transition-all'>Categories<ChevronDown className='size-5' /></a></li>
                    <li><a href="" className='hover:font-bold hover:underline decoration-red-600 duration-200 decoration-1 transition-all'>boAt Personalisation</a></li>
                    <li><Link to="/Corporate-Orders" className='hover:font-bold hover:underline decoration-red-600 duration-200 decoration-1 transition-all'>Corporate Orders</Link></li>
                    <li><Link to="/Gifting-with-boat" className='hover:font-bold hover:underline decoration-red-600 duration-200 decoration-1 transition-all'>Gifting Store</Link></li>
                    <li><a href="" className='flex items-center gap-1 hover:font-bold hover:underline decoration-red-600 duration-200 decoration-1 transition-all'>More<ChevronDown className='size-5'/></a></li>
                </ol>
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

        <Outlet/>
        </>
    )
}

export default Navbar