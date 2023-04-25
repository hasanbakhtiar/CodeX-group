import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "react-use-cart";
import Basket from "./pages/Basket";
import ProductDetails from "./pages/ProductDetails";
import { ThemeContext,ThemeProvider } from "./context/ThemeContext";
import './i18n/i18next'
const Main = () => {
  const [mode] = useContext(ThemeContext);

  return (
    <div className={mode}>
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
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
