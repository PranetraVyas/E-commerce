import { Shield } from 'lucide-react';
import { StickyNote } from 'lucide-react';
import { Truck } from 'lucide-react';
import { RotateCcw } from 'lucide-react';


function Secbar(){
    return(
        <>
        <div className="bg-gray-500 w-screen h-30 ml-10 flex justify-center">
            <div className='text-white flex justify-center items-center gap-60 '>
                <div className='flex gap-4'>
                     <Shield className='size-10'/>
                     <div>
                        <h1 className='font-bold'>12+3 Months</h1>
                        <h1>Warranty</h1>
                     </div>
                </div>
                <div className='flex gap-4'>
                     <StickyNote className='size-10'/>
                     <div>
                        <h1 className='font-bold'>GST</h1>
                        <h1>Billing</h1>
                     </div>
                </div>
                <div className='flex gap-4'>
                    <Truck className='size-10'/>
                    <div>
                        <h1 className='font-bold'>Free Express</h1>
                        <h1>Delivery</h1>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <RotateCcw className='size-10'/>
                    <div>
                        <h1 className='font-bold'>7-Day</h1>
                        <h1>Replacement</h1>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Secbar