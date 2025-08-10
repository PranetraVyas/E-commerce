import { Search } from 'lucide-react';
import { User } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import logo from '../assets/logo.svg'
import { Link, Outlet } from 'react-router-dom';
import { AlignJustify } from 'lucide-react';
import { useState } from 'react';
import UseIsLargeScreens from './UseIsLargeScreen';


function Navbar() {

    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const isLargeScreen = UseIsLargeScreens();
   

    const toggleCategoryDropdown = () => {
        setIsCategoryOpen(!isCategoryOpen);
    };

    const toggleSearchDropdown = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <>
            <div className="w-screen sm:h-10 md:h-10 lg:h-10 xl:h-15 bg-white flex fixed z-50 justify-between">
                <div className="xl:hidden flex justify-center items-center ml-2">
                    <ol className=''>
                        <li className=''>
                            <button
                                onClick={toggleCategoryDropdown}
                                className="">
                                <AlignJustify />
                            </button>
                            {isCategoryOpen && (
                                <ul>
                                    <li><a href="" className='flex items-center gap-1 hover:font-bold hover:underline decoration-red-600 duration-200 decoration-1 transition-all'>Categories<ChevronDown className='size-2' /></a></li>
                                    <li><a href="" className='hover:font-bold hover:underline decoration-red-600 duration-200 decoration-1 transition-all'>boAt Personalisation</a></li>
                                    <li><Link to="/Corporate-Orders" className='hover:font-bold hover:underline decoration-red-600 duration-200 decoration-1 transition-all'>Corporate Orders</Link></li>
                                    <li><Link to="/Gifting-with-boat" className='hover:font-bold hover:underline decoration-red-600 duration-200 decoration-1 transition-all'>Gifting Store</Link></li>
                                    <li><a href="" className='flex items-center gap-1 hover:font-bold hover:underline decoration-red-600 duration-200 decoration-1 transition-all'>More<ChevronDown className='size-5' /></a></li>
                                </ul>
                            )}
                        </li>
                    </ol>
                </div>


                <div className="flex justify-center items-center ml-4">
                    <Link to='/'><img src={logo} alt="no photo" className='size-10 lg:size-20' /></Link>
                </div>

                {isLargeScreen && (
                    <div className="flex justify-center items-center mr-100">
                        <ol className='flex gap-4 text-sm xl:text-xl xl:gap-15 '>
                            <li><a href="" className='flex items-center gap-1 hover:font-bold hover:underline decoration-red-600 duration-200 decoration-1 transition-all'>Categories<ChevronDown className='size-5' /></a></li>
                            <li><a href="" className='hover:font-bold hover:underline decoration-red-600 duration-200 decoration-1 transition-all'>boAt Personalisation</a></li>
                            <li><Link to="/Corporate-Orders" className='hover:font-bold hover:underline decoration-red-600 duration-200 decoration-1 transition-all'>Corporate Orders</Link></li>
                            <li><Link to="/Gifting-with-boat" className='hover:font-bold hover:underline decoration-red-600 duration-200 decoration-1 transition-all'>Gifting Store</Link></li>
                            <li><a href="" className='flex items-center gap-1 hover:font-bold hover:underline decoration-red-600 duration-200 decoration-1 transition-all'>More<ChevronDown className='size-5' /></a></li>
                        </ol>
                    </div>
                )}



                <div className="xl:hidden flex justify-center items-center gap-2 mr-2">
                    <button onClick={toggleSearchDropdown}>
                        <Search className='' />
                    </button>

                    {isSearchOpen && (
                        <input type="text" className="w-30 bg-gray-200 rounded-3xl text-center" placeholder="Search" />
                    )}
                    <div className='flex gap-2'>
                        <User />
                        <ShoppingBag />
                    </div>
                </div>

                {isLargeScreen && (
                    <div className="flex justify-center items-center gap-2 mr-2 xl:text-2xl">
                        <input type="text" className="w-30 lg:w-35 bg-gray-200 rounded-3xl text-center" placeholder="Search" />
                            <Search className='fixed mr-36 lg:mr-40'/>
                        <div className='flex gap-2'>
                            <User />
                            <ShoppingBag />
                        </div>
                    </div>
                )}
            </div>
            <Outlet />
        </>
    )
}

export default Navbar