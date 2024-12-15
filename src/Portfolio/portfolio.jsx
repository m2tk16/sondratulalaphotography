import React, { useState, useEffect } from "react";
import "./portfolio.css";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PortfolioWrapper from './portfolioWrapper';
import { list } from "@aws-amplify/storage";


const Portfolio = () => {
    const [imageArray, setImageArray] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
          try {
            const result = await list("images/portfolio");
            const filteredImages = result.items.filter(item => 
                item.key &&
                (item.key.endsWith(".png") || item.key.endsWith(".jpg") || item.key.endsWith(".webp"))
              );
            const imagePaths = filteredImages.map(item => "public/" + item.key)
            setImageArray(imagePaths);

          } catch (err) {
            console.error("Error fetching images:", err);
          }
        };
    
        fetchImages();
      }, []);

    
    return (
        <Container>
            <Row>
                {imageArray.map((image, index) => (
                    <Row className="mb-4" key={image}>
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
