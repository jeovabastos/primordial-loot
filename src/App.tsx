import './App.css'
import { Header } from './components/Header'
import { Categories } from './components/Categories'
import { Products } from './components/Products'

function App() {
  return (
    <>
      <Header/>

      <div className='flex'>
        <main className='flex flex-col'>
          <Categories/>

          <Products/>
        </main>
      </div>
    </>
  )
}

export default App
