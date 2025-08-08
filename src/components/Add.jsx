import p51 from '../assets/p51.webp';

function Add(){
    return (
        <>
        <div className="ml-5">
            <h1 className="ml-2 font-bold">Explore Nirvana</h1>
        </div>
        <div className="flex justify-center items-center h-25">
            <div className="rounded-3xl flex justify-center items-center">
                <img src={p51} alt="" className='h-15 w-80 object-fill rounded-3xl'/>
            </div>
        </div>
        </>
    )
}

export default Add