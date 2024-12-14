// Home.js
import React, { useState } from "react";
import "./home.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import GetImage from "../Utilities/getImage";

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Container className="home-wrapper">
      <Row>
        <Col sm={12}>
          <GetImage
            imagePath="images/home/into_the_fog.jpg"
            className={`home-image ${isVisible ? "visible" : ""}`}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
