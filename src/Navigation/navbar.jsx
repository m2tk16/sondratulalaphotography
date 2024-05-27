import React, { useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import SacramentoFont from 'webfontloader';


const NavBar = () => {
  useEffect(() => {
    SacramentoFont.load({
      google: {
        families: ['Sacramento']
      }
    });
   }, []);


  return (
      <Navbar 
        collapseOnSelect 
        expand="sm" 
        sticky="top"
        className="navbar"
      >
        <Container>
          <Navbar.Brand href="/">
              <div className="font-loader">Sondra Tulala Photography</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse 
            id="responsive-navbar-nav" 
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="/" className="me-auto nav-link">Home</Nav.Link>
              <Nav.Link href="/about" className="me-auto nav-link">About</Nav.Link>
              <Nav.Link href="/gallary" className="me-auto nav-link">Gallary</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar;