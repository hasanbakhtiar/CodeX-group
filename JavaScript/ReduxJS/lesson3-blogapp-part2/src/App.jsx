import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogList from "./pages/BlogList";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import About from "./pages/About";
import BlogDetails from "./pages/BlogDetails";
import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blogs" element={<BlogList />}></Route>
          <Route path="/blogs/:id" element={<BlogDetails />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
