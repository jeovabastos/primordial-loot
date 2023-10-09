export function ProductItem({source}:{source:string}){
    return(
        <div className='border border-solid rounded-xl'>
            <img className='w-[200px] h-[200px]' src={source} alt='IMG'/>

            <div className='p-2 gap-2 bg-gray-50'>
                <h2 className="font-semibold">Title</h2>
                <p>Description</p>
            </div>
        </div>        
    )
}