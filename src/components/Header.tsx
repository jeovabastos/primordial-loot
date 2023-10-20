import { useState } from "react"



export function Header({cartValue}:{cartValue:any}) {
    
    // Cart ASIDE area function
    type cartType = 'hidden' | ' '
    let cartState: cartType

    const [cartArea, setCartArea] = useState(cartState = "hidden")

    function toggleCartArea(){
        if(cartArea==='hidden'){
            setCartArea(cartState = " ")
        }else{
            setCartArea(cartState = "hidden")
        }
    }
    //

    return (
        <>
            <header className='bg-red-500 flex justify-between items-center px-8 gap-8 py-2'>
                <h1 className='text-3xl p-2 text-gray-50'>Primordial Loot</h1>

                <div className='flex p-2 w-[600px]'>
                    <input className='rounded-l-full w-full border border-solid px-2' type='text' placeholder='search' />
                    <img className='cursor-pointer rounded-r-full p-1 bg-gray-50 border border-solid block w-8 h-8' src='/lupa.png' />
                </div>

                <div className=''>
                    <button className='p-2 text-gray-50 font-semibold'>Login</button>
                    <button onClick={()=>toggleCartArea()} className='p-2 text-gray-50 font-semibold'>Cart {cartValue}</button>
                </div>
            </header>
            
            {/* Cart ASIDE area itself */}
            <div className={cartArea+" z-10 border-t-2 border-black absolute right-0 w-[25%] h-full bg-red-500"}>
                <h1 className="p-2 text-gray-50">Test</h1>   
            </div>
            {/*  */}
        </>
    )
}