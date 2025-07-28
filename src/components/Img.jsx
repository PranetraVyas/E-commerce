import gift from '../assets/gift.webp';
import gifts from '../assets/gift-2.webp';

function Img(){
    return(
        <>
        <div>
        <div className="">
            <img src={gift} alt="" className='w-screen h-190'/>
        </div>
        <div>
            <div className='h-35 flex justify-center items-center'>
                <h1 className='mt-20 text-4xl'>
                    Birthday or Milestones, Family or Friends, Gamers or 
                    Fitness Enthusiasts
                </h1>
            </div>
            <div className='h-35 flex justify-center items-center'>
                <h1 className='text-6xl font-bold mb-15'>
                    Give Gift that Truly Resonates !
                </h1>
            </div>

        </div>
        <div className="">
            <img src={gifts} alt="" className='w-screen h-190'/>
        </div>
        </div>
        </>
    )
}

export default Img