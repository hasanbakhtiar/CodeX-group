import React, { useContext } from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useCart } from "react-use-cart";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";
const Header = () => {
    const {totalItems} = useCart();
    const [mode,setMode] = useContext(ThemeContext);
    const {i18n} = useTranslation();

    const handleClick=(lang)=>{
          i18n.changeLanguage(lang);
    }
  return (
    <Navbar bg="dark" className="navbar-dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Best Shop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/products">
              <Nav.Link>Products</Nav.Link>
            </LinkContainer>
          </Nav>
          <LinkContainer to="/basket">
            <Button variant="success">
              <i className="fa-solid fa-cart-shopping"></i>
              <span
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "20px",
                  backgroundColor: "red",
                  borderRadius:"50%"
                }}
              >{totalItems}</span>
            </Button>
          </LinkContainer>
            <Button variant={mode==="light"?"light":"warning"} className="ms-3 text-dark" onClick={()=>{
                mode==="light" ?setMode('dark'):setMode('light');
                mode==="light" ?localStorage.setItem('mode','dark'):localStorage.setItem('mode','light')
            }}>{mode==='light'?"🌙":"☀️"}</Button>
        </Navbar.Collapse>
        <NavDropdown title="Lang" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">
              <Button onClick={()=>{handleClick("az")}}>AZ</Button>
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">
              <Button onClick={()=>{handleClick("tr")}}>TR</Button>

              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">
              <Button onClick={()=>{handleClick("en")}}>EN</Button>

              </NavDropdown.Item>
     
            </NavDropdown>

      </Container>
    </Navbar>
  );
};

export default Header;
