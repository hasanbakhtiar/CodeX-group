import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from '../pages/Products'
import ProductDetails from '../pages/ProductDetails'

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Products />}></Route>
                    <Route path='/details/:url' element={<ProductDetails />}></Route>
                </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter