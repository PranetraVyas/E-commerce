import { Shield } from 'lucide-react';
import { StickyNote } from 'lucide-react';
import { Truck } from 'lucide-react';
import { RotateCcw } from 'lucide-react';


function Secbar(){
    return(
        <>
        <div className="bg-gray-500 w-screen h-10 ml-2 flex justify-center">
            <div className='text-white flex gap-2 items-center sm:gap-20'>
                <div className='flex gap-2'>
                     <Shield className='size-5'/>
                     <div>
                        <h1 className='text-[8px] font-bold'>12+3 Months</h1>
                        <h1 className='text-[10px]'>Warranty</h1>
                     </div>
                </div>
                <div className='flex gap-2'>
                     <StickyNote className='size-5'/>
                     <div>
                        <h1 className='text-[8px] font-bold'>GST</h1>
                        <h1 className='text-[10px]'>Billing</h1>
                     </div>
                </div>
                <div className='flex gap-2'>
                    <Truck className='size-5'/>
                    <div>
                        <h1 className='text-[8px] font-bold'>Free Express</h1>
                        <h1 className='text-[10px]'>Delivery</h1>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <RotateCcw className='size-5'/>
                    <div>
                        <h1 className='text-[8px] font-bold'>7-Day</h1>
                        <h1 className='text-[10px]'>Replacement</h1>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Secbar