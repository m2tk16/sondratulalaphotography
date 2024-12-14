import React, { useState } from "react";
import "./portfolio.css";
import Container from 'react-bootstrap/Container';
import PortfolioWrapper from './portfolioWrapper';
import homeImage from '../images/into_the_fog_v2.png';

const Portfolio = () => {

    const imageArray = useState([
        {homeImage},
        {homeImage},
        {homeImage}
    ]);

    return (

        <Container>
            <div class="row g-2 row justify-content-evenly">
                {imageArray.map((item, index) => (
                    <div class="col-10 justify-content-evenly col-10-spaccer">
                        <PortfolioWrapper image={item}/>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Portfolio;
