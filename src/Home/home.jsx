import React, { useState } from "react";
import "./home.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
// import { list, getUrl } from "@aws-amplify/storage";


import IntoTheFog from '../images/into_the_fog_v2.png'


const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  // const [imageUrl, setImageUrl] = useState(null);

/*
  useEffect(() => {
    setIsVisible(true);

    async function fetchImage() {
      try {
        const homeImages = await list("images/home/");
        console.log("Listed images:", homeImages);

        if (homeImages.length > 0 && homeImages[0].key) {
          const url = await getUrl(homeImages[0].key);
          console.log("Fetched URL:", url);
          //setImageUrl(url);
        } else {
          console.error("No images found in the specified folder.");
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    }

    fetchImage();
  }, []);
*/

  return (
    <Container className="home-wrapper">
      <Row>
        <Col sm={12}>
        {/*
          {imageUrl ? (
            <Image
              className={`home-image ${isVisible ? "visible" : ""}`}
              src={imageUrl}
              fluid
            />
          ) : (
            <p>Loading image...</p>
          )}
          */}
        <Image 
            className={`home-image ${isVisible ? 'visible' : ''}`}
            src={IntoTheFog} 
            fluid 
        />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
