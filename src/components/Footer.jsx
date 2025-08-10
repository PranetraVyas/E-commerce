import logo from '../assets/logo.svg'
import { Instagram } from 'lucide-react';
import { Twitch } from 'lucide-react';
import { Facebook } from 'lucide-react';

function Footer(){
    return (
        <>
        <div className="ml-5 w-screen h-200 flex-col">
            <div className="h-100 bg-gray-300 flex-col justify-center items-center">
                <img src={logo} alt="no photo" className='size-30 ml-5 mt-10 xl:ml-15 xl:size-50'/>
                <h1 className='text-3xl ml-5 font-bold xl:ml-15 xl:text-5xl'>Subscribe to our email alerts!</h1>
                <input type="text" className='bg-white p-2 ml-5 mt-3 rounded-sm w-70 h-10 xl:ml-15' placeholder='Enter your email address' />
            </div>
            <div className="w-screen h-100  flex justify-center items-center">
                <div className='flex-col gap-4  justify-center items-center text-center'>
                    <div className='flex justify-center items-center gap-2 xl:gap-4 mt-35'>
                    <h1 className='font-bold text-xl xl:text-3xl'>Lets get social</h1>
                    <Instagram className='size-4 xl:size-7'/>
                    <Twitch className='size-4 xl:size-7'/>
                    <Facebook className='size-4 xl:size-7'/>
                    </div>
                    <div className='mt-15 flex flex-col'>
                        <div>
                        <h1 className='flex justify-center text-sm'>Privacy policy . Terms of Use . Warranty Policy</h1>
                        </div>
                        <div className='w-screen p-10 mt-10 justify-center items-center text-gray-500 text-sm'>
                            <div className='flex justify-center items-center'>
                                <h1 className='flex justify-center items-center'>© 2025 Imagine Marketing Limited. All Rights Reserved.</h1>
                            </div>
                            <div className='flex justify-center items-center '>
                                <h1>For queries contact us: Manager, Imagine Marketing Limited Unit no. 204 & 205, 2nd floor, D-wing & E-wing,</h1>
                            </div>
                            <div className='flex justify-center items-center'>
                                <h1>Corporate Avenue, Andheri Ghatkopar Link Road, Mumbai, Maharashtra-400093, India</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer