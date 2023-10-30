export function ProductItem(
    {source, title, price, text, handleClickCartValue}:{source:string, title:string, price:string, text:string, handleClickCartValue:any}
    ){
    return(
        <div className='border border-solid hover:border-red-500 rounded-xl max-w-[160px] lg:max-w-[200px]  overflow-hidden hover:cursor-pointer'>
            <img className='w-[160px] lg:w-[200px] lg:h-[200px]' src={source} alt='IMG'/>

            <div className='h-full  p-2 gap-2 bg-gray-50'>
                <h2 className="font-semibold">{title}</h2>
                <div>
                    <p>R$<span className="font-bold text-xl">{price}</span></p>
                    <p className="text-sm">{text}</p>
                </div>
                <button onClick={()=>handleClickCartValue()} className="bg-gray-200 px-2 hover:bg-red-500 hover:text-white">Add to cart</button>
            </div>
        </div>        
    )
}