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
                    <li><a href="" className='flex items-center gap-1'>Categories<ChevronDown className='size-5' /></a></li>
                    <li><a href="">boAt Personalisation</a></li>
                    <li><a href="">Corporate Orders</a></li>
                    <li><Link to="/Gifting-with-boat">Gifting Store</Link></li>
                    <li><a href="" className='flex items-center gap-1'>More<ChevronDown className='size-5'/></a></li>
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