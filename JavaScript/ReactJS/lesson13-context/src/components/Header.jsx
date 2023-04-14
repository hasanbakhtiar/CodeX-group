import React, { useContext } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { ProductContext } from '../context/ProductContext';

const Header = () => {
    const [product] = useContext(ProductContext);
  return (
    <Navbar bg="dark" className='navbar-dark' expand="lg">
    <Container>
      <Navbar.Brand href="#home">Best Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to='/'>
          <Nav.Link >Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/products'>
          <Nav.Link >Products</Nav.Link>
          </LinkContainer>

        </Nav>
        <Button variant='warning' className='ms-3'>Product Count:<span className='text-dark'>{product.length}</span></Button>
  <LinkContainer to="/login">
  <Button variant='success' className='ms-3'>Login</Button>
  </LinkContainer>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header