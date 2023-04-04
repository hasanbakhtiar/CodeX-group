import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Nav from './components/Nav';





class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
      <Nav/>
              <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
              </Routes>
      </BrowserRouter>
      
    )
  }
}

export default App