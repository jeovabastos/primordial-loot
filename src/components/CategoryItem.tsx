export function CategoryItem({source, title}:{source:string, title:string}){
    return(
        <div className='bg-white flex flex-col border border-solid rounded-xl w-32 h-32'>
            <img className='rounded-t-xl block w-32 h-24' src={source} alt='IMG'/>

            <div className="flex flex-1 justify-center px-2">
                <h2 className="flex items-center">{title}</h2>
            </div>
        </div>        
    )
}