import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogList from "./pages/BlogList";
import Header from "./components/Header";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<BlogList />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
