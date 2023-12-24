import { useState } from "react"

// REDUX CONFIGURATION
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useItems } from '../redux/sliceItems'
// 

export function Header() {
    // REDUX CONFIGURATION 
    const items = useSelector(useItems)
    // 
    
    // Cart ASIDE area function
    type areaType = 'hidden' | 'block'
    let areaState: areaType

    const [area, setArea] = useState(areaState = "hidden")
    console.log(areaState)

    function toggleArea(){
      area === 'hidden' ? setArea(areaState = 'block') : setArea(areaState = 'hidden')        
    }
    //

    return (
        <>
            <header className='bg-red-500 flex flex-col lg:flex-row lg:justify-between items-center lg:px-8 lg:gap-8 py-2'>
                <div className="flex justify-evenly flex-1 items-center">
                    <h1 className='lg:left-0 lg:absolute text-3xl p-2 text-gray-50'>Primordial Loot</h1>
                </div>

                <div className='flex p-2 lg:w-[600px]'>
                    <input className='rounded-l-full w-full border border-solid px-2' type='text' placeholder='search' />
                    <img className='cursor-pointer rounded-r-full p-1 bg-gray-50 border border-solid block w-8 h-8' src='/lupa.png' />
                </div>
                
                <button onClick={()=>toggleArea()} className='text-white lg:block p-2 font-semibold'>Cart</button>
            </header>
            
            {/* Cart ASIDE area itself */}
            <div className={area+" z-10 border-t-2 border-black absolute right-0 w-[75%] lg:w-[25%] h-full bg-red-500"}>
                
                {/* ADD THE CART ITEMS HEREEEEEEEEEEEEEEEEEE */}
                <div className="h-full absolute overflow-y-scroll">
                    {items.map(item=>{
                        return <div className="flex flex-col p-2 text-white text-lg" key={item.title+Math.random()}><img className="w-[160px] lg:w-[80px]" src={item.source}/>{item.title +' '+ item.price +' '+ item.text}</div>
                    })}
                </div>
            </div>
            {/*  */}
        </>
    )
}   
