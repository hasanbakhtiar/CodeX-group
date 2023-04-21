import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "react-use-cart";
import Basket from "./pages/Basket";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <ProductProvider>
          <Header />
          <Container>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/products" element={<Products />}></Route>
              <Route path="/products/:id" element={<ProductDetails />}></Route>
              <Route path="/basket" element={<Basket />}></Route>
            </Routes>
          </Container>
        </ProductProvider>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
