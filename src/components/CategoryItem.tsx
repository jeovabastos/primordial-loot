export function CategoryItem({source, title}:{source:string, title:string}){
    return(
        <div className='border border-solid w-32 h-32'>
            <img className='w-32 h-24' src={source} alt='IMG'/>

            <div>
            <h2>{title}</h2>
            </div>
        </div>        
    )
}