import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import SacramentoFont from 'webfontloader';
import { Hub } from "aws-amplify/utils";
import { signInWithRedirect, signOut, getCurrentUser, AuthUser } from "aws-amplify/auth";
import Button from 'react-bootstrap/Button';


const NavBar = () => {
  useEffect(() => {
    SacramentoFont.load({
      google: {
        families: ['Sacramento']
      }
    });
   }, []);
   
   const [user, setUser] = useState(null);
   const [error, setError] = useState(null);
 
   useEffect(() => {
     const unsubscribe = Hub.listen("auth", ({ payload }) => {
       switch (payload.event) {
         case "signInWithRedirect":
           getUser();
           break;
         case "signInWithRedirect_failure":
           setError("An error has occurred during the OAuth flow.");
           break;
       }
     });
 
     getUser();
 
     return unsubscribe;
   }, []);
 
   const getUser = async (): Promise<void> => {
     try {
       const currentUser = await getCurrentUser();
       setUser(currentUser);
     } catch (error) {
       console.error(error);
       console.log("Not signed in");
     }
   };
 
   signOut({
    global: false,
    oauth: {
      redirectUrl: [
        'https://www.sondratulalaphotography.com/',
        'http://localhost:3000/'
      ]
    }
  });

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
              <Nav.Link href="/portfolio" className="me-auto nav-link">Portfolio</Nav.Link>
            </Nav>
            <div class="login-wrapper">
              <Button size="sm" variant="outline-secondary" onClick={() => signInWithRedirect({ provider: "Google"})}>
                Login
              </Button>
            </div>
            <div class="signout-wrapper">
              <Button size="sm" variant="outline-secondary" onClick={() => signOut()}>
                Sign Out
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar;