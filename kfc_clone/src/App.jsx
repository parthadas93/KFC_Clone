import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { Home } from './components/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  )
}

export default App
