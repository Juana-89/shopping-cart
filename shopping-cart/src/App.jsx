import { useState } from 'react'
import { Header } from './components/Header/index'
import { Products } from './components/Products/index'
//import data from './data/data'
import './App.scss'

function App() {
  // const [count, setCount] = useState(0)
  // const { products } = data

  return (
    <div className="App">
       <Header />
      <h1>Holaaaaaaaaaa</h1>
      <Products/>
     
    </div>
  )
}

export default App
