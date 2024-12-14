import React, { useState } from "react";
import "./portfolio.css";
import Container from 'react-bootstrap/Container';
import PortfolioWrapper from './portfolioWrapper';

const Portfolio = () => {
    const [imageArray] = useState([
        "images/home/into_the_fog.jpg",
        "images/home/into_the_fog.jpg",
        "images/home/into_the_fog.jpg"
    ]);

    return (
        <Container>
            <div className="row g-2 justify-content-evenly">
                {imageArray.map((image, index) => (
                    <div key={index} className="col-10 justify-content-evenly col-10-spacer">
                        <PortfolioWrapper path={image} />
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Portfolio;
