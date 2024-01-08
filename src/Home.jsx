import React from "react";
import "./App.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import IntoTheFog from './images/into_the_fog.png';


const Home = () => {
    return (
        <div className="home-wrapper">
            <Row>
                <Col sm={12}>
                    <Image 
                        className="home-image" 
                        src={IntoTheFog} 
                        fluid 
                    />
                </Col>
            </Row>
        </div>
    )
}

export default Home;
