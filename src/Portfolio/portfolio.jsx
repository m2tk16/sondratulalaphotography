import React, { useState } from "react";
import "./portfolio.css";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PortfolioWrapper from './portfolioWrapper';


const Portfolio = () => {
    const [imageArray] = useState([
        "images/portfolio/wonderland.webp",
        "images/portfolio/magenta_sky.webp",
        "images/portfolio/stamina_shroom.webp",
        "images/portfolio/frozen.webp",
        "images/portfolio/floating_rocks.webp",
        "images/portfolio/river_run.webp",
        "images/portfolio/loki.webp"
    ]);

    
    return (
        <Container>
            <Row>
                {imageArray.map((image, index) => (
                    <Row className="mb-4">
                        <Col className="col-12" key={index}>
                            <PortfolioWrapper path={image} />
                        </Col>
                    </Row>
                ))}
            </Row>
        </Container>
    );
};

export default Portfolio;
