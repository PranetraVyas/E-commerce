import p51 from '../assets/p51.webp';

function Add(){
    return (
        <>
        <div className="ml-13 text-2xl font-bold">
            <h1 className=''>Explore Nirvana</h1>
        </div>
        <div className="ml-10 flex justify-center items-center h-45">
            <div className="h-30 w-295 rounded-3xl flex justify-center items-center">
                <img src={p51} alt="" className='object-cover rounded-3xl h-30' />
            </div>
        </div>
        </>
    )
}

export default Add