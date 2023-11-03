import { useState } from "react"

// REDUX CONFIGURATION
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useItems } from '../redux/sliceItems'
// 

export function Header({cartValue, toggleAsideArea}:{cartValue:any, toggleAsideArea:any}) {

    // REDUX CONFIGURATION 
    const items = useSelector(useItems)
    // 
    
    // Cart ASIDE area function
    type cartType = 'hidden' | ' '
    let cartState: cartType

    const [cartArea, setCartArea] = useState(cartState = "hidden")

    function toggleCartArea(){
        console.log(cartState)
        if(cartArea==='hidden'){
            setCartArea(cartState = " ")
        }else{
            setCartArea(cartState = "hidden")
        }
    }
    //

    return (
        <>
            <header className='bg-red-500 flex flex-col lg:flex-row lg:justify-between items-center lg:px-8 lg:gap-8 py-2'>
                <div className="flex justify-evenly flex-1 items-center">
                    <button onClick={()=>toggleAsideArea()} className='lg:hidden p-2 text-gray-50 text-2xl font-normal'>+</button>
                    
                    <h1 className='lg:left-0 lg:absolute text-3xl p-2 text-gray-50'>Primordial Loot</h1>

                    <button onClick={()=>toggleCartArea()} className='lg:hidden p-2 text-gray-50 font-semibold'>Cart {cartValue}</button>
                </div>

                <div className='flex p-2 lg:w-[600px]'>
                    <input className='rounded-l-full w-full border border-solid px-2' type='text' placeholder='search' />
                    <img className='cursor-pointer rounded-r-full p-1 bg-gray-50 border border-solid block w-8 h-8' src='/lupa.png' />
                </div>
                
                <button onClick={()=>toggleCartArea()} className='hidden lg:block p-2 text-gray-50 font-semibold'>Cart {cartValue}</button>
            </header>
            
            {/* Cart ASIDE area itself */}
            <div className={cartArea+" z-10 border-t-2 border-black absolute right-0 w-[75%] lg:w-[25%] h-full bg-red-500"}>
                
                {/* ADD THE CART ITEMS HEREEEEEEEEEEEEEEEEEE */}
                <div>
                    {items.map(item=>{
                        return <div key={item.title+Math.random()}>{item.title}</div>
                    })}
                </div>
            </div>
            {/*  */}
        </>
    )
}   