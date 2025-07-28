import logo from '../assets/logo.svg'
import { Instagram } from 'lucide-react';
import { Twitch } from 'lucide-react';
import { Facebook } from 'lucide-react';

function Footer(){
    return (
        <>
        <div className="ml-10 h-200 flex-col">
            <div className="h-100 bg-gray-300 flex-col justify-center items-center">
                <img src={logo} alt="no photo" className='size-50 ml-20 mt-10'/>
                <h1 className='text-3xl ml-20 font-bold'>Subscribe to our email alerts!</h1>
                <input type="text" className='bg-white p-2 ml-20 mt-3 rounded-sm w-70 h-10' placeholder='Enter your email address' />
            </div>
            <div className=" h-100  flex justify-center items-center">
                <div className='flex-col gap-4 justify-center items-center text-center'>
                    <div className='flex justify-center items-center gap-10 mt-35'>
                    <h1 className='font-bold text-2xl'>Lets get social</h1>
                    <Instagram className='size-9'/>
                    <Twitch className='size-9'/>
                    <Facebook className='size-9'/>
                    </div>
                    <div className='mt-15'>
                        <h1 className=''>Privacy policy . Terms of Use . Warranty Policy</h1>
                        <div className='mt-10  text-gray-500'>
                            <h1>© 2025 Imagine Marketing Limited. All Rights Reserved.</h1>
                            <h1>For queries contact us: Manager, Imagine Marketing Limited Unit no. 204 & 205, 2nd floor, D-wing & E-wing,</h1>
                            <h1>Corporate Avenue, Andheri Ghatkopar Link Road, Mumbai, Maharashtra-400093, India</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer