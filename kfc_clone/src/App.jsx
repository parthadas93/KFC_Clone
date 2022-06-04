import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { Home } from './components/home/Home'
import { Route, Routes } from 'react-router-dom'
import { Menu } from './components/menu/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={ <Home></Home>}></Route>
        <Route path='/menu' element={<Menu></Menu>}></Route>
      </Routes>
     
    </div>
  )
}

export default App
