import p51 from '../assets/p51.webp';

function Add(){
    return (
        <>
        <div className="ml-5 xl:ml-10">
            <h1 className="ml-2 font-bold xl:text-2xl">Explore Nirvana</h1>
        </div>
        <div className="flex justify-center items-center h-25 xl:h-40">
            <div className="rounded-3xl flex justify-center items-center">
                <img src={p51} alt="" className='h-15 w-80 object-fill rounded-3xl xl:h-30 xl:w-320'/>
            </div>
        </div>
        </>
    )
}

export default Add