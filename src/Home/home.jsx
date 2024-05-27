import React from "react";
import "./home.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import IntoTheFog from '../images/into_the_fog.png'


const Home = () => {
    return (
        <Container className="home-wrapper">
            <Row>
                <Col sm={12}>
                    <Image 
                        className="home-image" 
                        src={IntoTheFog} 
                        fluid 
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;
