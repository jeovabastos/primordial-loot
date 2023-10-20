export function ProductItem(
    {source, title, price, text, handleClickCartValue}:{source:string, title:string, price:string, text:string, handleClickCartValue:any}
    ){
    return(
        <div className='border border-solid hover:border-red-500 rounded-xl max-w-[200px]  overflow-hidden hover:cursor-pointer'>
            <img className='w-[200px] h-[200px]' src={source} alt='IMG'/>

            <div className='h-full hover:bg-red-500 hover:text-white p-2 gap-2 bg-gray-50'>
                <button onClick={()=>handleClickCartValue()} className="bg-red-500 hover:bg-red-700 hover:text-white px-2 rounded-full translate-y-[-800%] translate-x-[550%]">+</button>
                <h2 className="font-semibold">{title}</h2>
                <div>
                    <p>R$<span className="font-bold text-xl">{price}</span></p>
                    <p className="text-sm">{text}</p>
                </div>
            </div>
        </div>        
    )
}