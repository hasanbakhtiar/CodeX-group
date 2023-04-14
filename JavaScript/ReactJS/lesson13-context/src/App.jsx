import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import { ProductProvider } from "./context/ProductContext";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </Container>
      </ProductProvider>
    </BrowserRouter>
  );
};

export default App;
