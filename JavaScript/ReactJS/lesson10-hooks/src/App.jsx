import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'

const App = () => {
  return (
    <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
            </Routes>
    </BrowserRouter>
  )
}

export default App