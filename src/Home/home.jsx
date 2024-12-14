import React, { useState, useEffect } from "react";
import "./home.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Spinner from 'react-bootstrap/Spinner';
import { getUrl } from "@aws-amplify/storage";


const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    setIsVisible(true);

    async function fetchImage() {
        const urlResponse = await getUrl({
            path: 'images/home/into_the_fog.jpg',
        });
        setImageUrl(urlResponse.url);
    }
    fetchImage();
  }, []);


  return (
    <Container className="home-wrapper">
      <Row>
        <Col sm={12}>
          {imageUrl ? (
            <Image
              className={`home-image ${isVisible ? "visible" : ""}`}
              src={imageUrl}
              fluid
            />
          ) : (
            <div className="loading-spinner">
            <Spinner animation="border" role="status"></Spinner>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
