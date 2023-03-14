import React, { Component } from 'react'
import { ProductListOne, ProductListThree, ProductListTwo } from './components/ProductList'

 class App extends Component {
  render() {
    return (
     <>
     <ProductListOne />
     <ProductListTwo />
     <ProductListThree />

     </>
    )
  }
}

export default App