import React, { Component } from 'react'
import BookApp from './components/BookApp'
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <div className='container mt-5'>
        <Login />
      </div>
    )
  }
}

export default App