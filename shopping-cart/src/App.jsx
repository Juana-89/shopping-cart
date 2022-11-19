import { useState } from 'react'
import { Header } from './components/Header/index'
import reactLogo from './assets/react.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Header/>
      <h1>Holaaaaaaaaaa</h1>
     
    </div>
  )
}

export default App
