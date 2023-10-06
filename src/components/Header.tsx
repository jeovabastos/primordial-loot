import { useState } from "react"

export function Header() {
    const [cartValue, setCartValue] = useState<number>(0)

    function handleClickCartValue() {
        setCartValue(cartValue + 1)
    }


    return (
        <header className=' flex justify-between items-center mx-8 gap-8 py-2'>
            <h1 className='text-3xl p-2'>Primordial Loot</h1>

            <div className='flex p-2 w-[600px]'>
                <input className='w-full border border-solid px-2' type='text' placeholder='search' />
                <img className='border border-solid block w-8 h-8' src='/lupa.png' />
            </div>

            <div className=''>
                <button className='p-2' onClick={() => handleClickCartValue()}>Login</button>
                <button className='p-2'>Cart {cartValue}</button>
            </div>
        </header>
    )
}