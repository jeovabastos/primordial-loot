import { useState } from 'react'
import './App.css'

function App() {
  const [ cartValue, setCartValue] = useState<number>(0)

  function handleClickCartValue(){
    setCartValue(cartValue+1)
  }

  return (
    <>
      <header className='flex justify-between items-center mx-8 gap-8 py-2'>
        <h1 className='text-3xl p-2'>Primordial Loot</h1>

        <div className='flex p-2 w-[600px]'>
          <input className='w-full border border-solid px-2' type='text' placeholder='search'/>
          <img className='border border-solid block w-8 h-8' src='/lupa.png'/>
        </div>

        <div className=''>
          <button className='p-2' onClick={()=>handleClickCartValue()}>Login</button>
          <button className='p-2'>Cart {cartValue}</button>
        </div>
      </header>

      <div className='flex'>
        {/* Aside */}
        <aside className='w-[300px] border border-solid flex flex-col p-2'>
          <h1 className='border-solid border-b'>Themes</h1>
          <h2>Theme itself</h2>
          <h2>Theme itself</h2>
          <h2>Theme itself</h2>
        </aside>

        <main className='flex flex-col flex-1'>
          {/* Categories */}
          <section className='flex border border-solid p-4 gap-4'>
            <div className='border border-solid w-32 h-32'>
              <img className='w-32 h-24' src='' alt='IMG'/>

              <div>
                <h2>Books</h2>
              </div>
            </div>

            <div className='border border-solid w-32 h-32'>
              <img className='w-32 h-24' src='' alt='IMG'/>

              <div>
                <h2>Books</h2>
              </div>
            </div>
          </section>

          {/* Products */}
          <section className='flex border border-solid p-4 gap-4'>
            <div className='border border-solid'>
              <img className='w-[200px] h-[200px]' src='' alt='IMG'/>

              <div className='p-2 gap-2'>
                <h2>Title</h2>
                <p>Description</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
