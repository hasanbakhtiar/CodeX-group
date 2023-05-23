import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

const Header=()=> {
  const [mymenu,setMyMenu] = useState("hide");
  
  
  return (
    
<>
<Navbar bg="dark" className='navbar-dark' expand="lg">
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand >Rog Blog</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <LinkContainer to="/">
            <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
            <Nav.Link >About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blogs">

            <Nav.Link >Blogs</Nav.Link>
            </LinkContainer>
           
          </Nav>
          <LinkContainer to="/admin">
          <Button variant='warning' className='me-3'>Login</Button>
          </LinkContainer>
          <Button onClick={()=>{mymenu === "hide"?setMyMenu("show"):setMyMenu("hide")}}>menu</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className="menu" id={mymenu}>
      <ul>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
    </div>
    
</>
    
    
  );
}

export default Header;