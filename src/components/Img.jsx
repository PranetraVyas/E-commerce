import gift from '../assets/gift.webp';
import gifts from '../assets/gift-2.webp';

function Img(){
    return(
        <>
        <div className='ml-5'>
        <div className="">
            <img src={gift} alt="" className='w-screen h-70'/>
        </div>
        <div>
            <div className='h-35 flex justify-center items-center'>
                <h1 className='ml-2 mt-20 text-2xl'>
                    Birthday or Milestones, Family or Friends, Gamers or 
                    Fitness Enthusiasts
                </h1>
            </div>
            <div className='ml-2 h-35 flex justify-center items-center'>
                <h1 className='text-4xl font-bold mb-15s'>
                    Give Gift that Truly Resonates !
                </h1>
            </div>

        </div>
        <div className="">
            <img src={gifts} alt="" className='w-screen h-70'/>
        </div>
        </div>
        </>
    )
}

export default Img