import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./navbar.css";
import SacramentoFont from 'webfontloader';
import { Hub } from "aws-amplify/utils";
import { signInWithRedirect, signOut, getCurrentUser } from "aws-amplify/auth";


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
           setError("An error has occurred during the Google OAuth flow.");
           console.log(error);
           break;
         default:
            console.warn("Unhandled state:", useState);
       }
     });
 
     getUser();
 
     return unsubscribe;
   }, [error]);
 
   const getUser = async (): Promise<void> => {
     try {
       const currentUser = await getCurrentUser();
       setUser(currentUser);
     } catch (error) {
       console.error(error);
       console.log("Not signed in");
     }
   };
 

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
            <Nav className="align-items-center mx-auto text-center">
              <Nav.Link href="/" className="nav-link fs-5" >Home</Nav.Link>
              <Nav.Link href="/portfolio" className="nav-link fs-5">Portfolio</Nav.Link>
              <Nav.Link href="/about" className="nav-link fs-5">About</Nav.Link>
              <Nav.Link href="/contact" className="nav-link fs-5">Contact</Nav.Link>
              <Nav.Link className="nav-link fs-5" onClick={() => signInWithRedirect({ provider: "Google"})}>Sign In</Nav.Link>
              <Nav.Link className="nav-link fs-5" onClick={() => signOut()}>Sign Out</Nav.Link>
            </Nav>
            <div className="user">{user?.username}</div>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar;