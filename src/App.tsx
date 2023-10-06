import './App.css'
import { Header } from './components/Header'
import { Categories } from './components/Categories'
import { Products } from './components/Products'
import { Aside } from './components/Aside'

function App() {

  return (
    <>
      <Header/>

      <div className='flex'>
        <Aside/>

        <main className='flex flex-col flex-1'>
          <Categories/>

          <Products/>
        </main>
      </div>
    </>
  )
}

export default App
