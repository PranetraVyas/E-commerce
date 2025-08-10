import { Shield } from 'lucide-react';
import { StickyNote } from 'lucide-react';
import { Truck } from 'lucide-react';
import { RotateCcw } from 'lucide-react';


function Secbar(){
    return(
        <>
        <div className="bg-gray-500 w-screen h-10 ml-2 flex justify-center xl:h-20">
            <div className='text-white flex gap-2 items-center sm:gap-20 xl:gap-100'>
                <div className='flex gap-2 xl:gap-4'>
                     <Shield className='size-5 xl:size-10'/>
                     <div>
                        <h1 className='text-[8px] xl:text-2xl font-bold'>12+3 Months</h1>
                        <h1 className='text-[10px] xl:text-[15px]'>Warranty</h1>
                     </div>
                </div>
                <div className='flex gap-2 xl:gap-4'>
                     <StickyNote className='size-5 xl:size-10'/>
                     <div>
                        <h1 className='text-[8px] font-bold xl:text-2xl'>GST</h1>
                        <h1 className='text-[10px] xl:text-[15px]'>Billing</h1>
                     </div>
                </div>
                <div className='flex gap-2 xl:gap-4'>
                    <Truck className='size-5 xl:size-10'/>
                    <div>
                        <h1 className='text-[8px] font-bold xl:text-2xl'>Free Express</h1>
                        <h1 className='text-[10px] xl:text-[15px]'>Delivery</h1>
                    </div>
                </div>
                <div className='flex gap-2 xl:gap-4'>
                    <RotateCcw className='size-5 xl:size-10'/>
                    <div>
                        <h1 className='text-[8px] font-bold xl:text-2xl'>7-Day</h1>
                        <h1 className='text-[10px] xl:text-[15px]'>Replacement</h1>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Secbar