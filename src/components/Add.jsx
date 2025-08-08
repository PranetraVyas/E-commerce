import p51 from '../assets/p51.webp';

function Add(){
    return (
        <>
        <div className="ml-13">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Explore Nirvana</h1>
        </div>
        <div className="flex justify-center items-center h-45">
            <div className="w-full max-w-7xl rounded-3xl flex justify-center items-center">
                <img src={p51} alt="" className='w-full h-auto object-cover rounded-3xl ' />
            </div>
        </div>
        </>
    )
}

export default Add