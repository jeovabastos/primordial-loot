export function ProductItem({source}:{source:string}){
    return(
        <div className='border border-solid'>
            <img className='w-[200px] h-[200px]' src={source} alt='IMG'/>

            <div className='p-2 gap-2'>
            <h2>Title</h2>
            <p>Description</p>
            </div>
        </div>        
    )
}