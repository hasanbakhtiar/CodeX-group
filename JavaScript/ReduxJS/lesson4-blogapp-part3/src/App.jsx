import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogList from "./pages/BlogList";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import About from "./pages/About";
import BlogDetails from "./pages/BlogDetails";
import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/Home";
import Auth from "./pages/admin/Auth";
import Dashboard from "./pages/admin/Dashboard";
import CreateBlog from "./pages/admin/update/CreateBlog";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin" element={<Auth />}></Route>
          <Route path="/admin/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin/dashboard/add" element={<CreateBlog />}></Route>
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
