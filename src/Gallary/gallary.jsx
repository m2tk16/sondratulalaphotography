import React, { useState } from "react";
import "./gallary.css";
import Container from 'react-bootstrap/Container';
import GallaryWrapper from './gallaryWrapper';
import homeImage from '../images/into_the_fog.png';

const Gallary = () => {

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
                        <GallaryWrapper image={item}/>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Gallary;
