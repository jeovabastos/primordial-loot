import './App.css'
import { Header } from './components/Header'
import { Categories } from './components/Categories'
import { Products } from './components/Products'
import { Aside } from './components/Aside'
import { useState } from 'react'

function App() {

    // CART value 
    //const [cartValue, setCartValue] = useState<number>(0)
    //
    //function handleClickCartValue() {
    //    setCartValue(cartValue + 1)
    //}
    // 

    // ASIDE area function
    type asideType = 'hidden' | ' '
    let asideState: asideType

    const [asideArea, setAsideArea] = useState(asideState = 'hidden')

    function toggleAsideArea(){
        console.log(asideState)
        if(asideArea==='hidden'){
            setAsideArea(asideState = " ")
        }else{
            setAsideArea(asideState = "hidden")
        }
    }
    //

  return (
    <>
      <Header toggleAsideArea={toggleAsideArea}/>

      <div className='flex'>
        <Aside asideArea={asideArea}/>

        <main className='flex flex-col'>
          <Categories/>

          <Products/>
        </main>
      </div>
    </>
  )
}

export default App
