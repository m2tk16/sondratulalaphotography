import React from "react";
import "./footer.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Envelope, Instagram } from 'react-bootstrap-icons';

const Footer = () => {

    return (
        <Container className="footer-container">
            <hr></hr> 
            <Row>
                <Col xs={{ span: 3, offset: 1 }} className="footer-link-title">
                    Links
                </Col>
                <Col xs={4} className="footer-contact-title">
                    Contact
                </Col>
                <Col xs={4} className="footer-contact-title">
                    Subscription
                </Col>
            </Row>
            <Row>
                <Col xs={{ span: 3, offset: 1 }}>
                    <a className="footer-links" href="/">Home</a>
                </Col>
                <Col xs={4}>
                    <a href="mailto:sondratulalaphotography@gmail.com"><Envelope /></a>
                </Col>
                <Col xs={4}>
                    <a className="footer-links" href="/subscribe">Subscribe</a>
                </Col>    
            </Row> 
            <Row>
                <Col xs={{ span: 3, offset: 1 }}>
                    <a className="footer-links" href="/about">About</a>
                </Col>
                <Col xs={4}>
                <a href="instagram://user?username=sondratulalaphotography"><Instagram /></a>
                </Col>
                <Col xs={4}>
                    <a className="footer-links" href="/unsubscribe">Unsubscribe</a>
                </Col>    
            </Row> 
            <Row>
                <Col xs={{ span: 3, offset: 1 }}>
                    <a className="footer-links" href="/portfolio">Portfolio</a>
                </Col>  
                <Col xs={4}>
                    <a className="footer-links" href="/contact">Send Message</a>
                </Col>  
            </Row>
            <hr></hr>
            <Row>
                <Col xs={12} className="footer-year">Sondra Tulala Photography - 2025</Col>
            </Row>
        </Container>
    )
}

export default Footer;
