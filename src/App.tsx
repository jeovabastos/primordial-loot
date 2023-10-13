import './App.css'
import { Header } from './components/Header'
import { Categories } from './components/Categories'
import { Products } from './components/Products'
import { Aside } from './components/Aside'
import { useState } from 'react'

function App() {
    const [cartValue, setCartValue] = useState<number>(0)
    
    function handleClickCartValue() {
        setCartValue(cartValue + 1)
    }

  return (
    <>
      <Header cartValue={cartValue}/>

      <div className='flex'>
        <Aside/>

        <main className='flex flex-col flex-1'>
          <Categories/>

          <Products handleClickCartValue={handleClickCartValue}/>
        </main>
      </div>
    </>
  )
}

export default App
