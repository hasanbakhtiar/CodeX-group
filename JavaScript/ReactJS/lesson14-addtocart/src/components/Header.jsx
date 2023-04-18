import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useCart } from "react-use-cart";

const Header = () => {
    const {totalItems} = useCart();
    
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
