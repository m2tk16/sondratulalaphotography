import React, { useState, useEffect } from "react";
import "./portfolio.css";
import GetImage from "../Utilities/getImage";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Heart, CurrencyBitcoin } from "react-bootstrap-icons";
import { FaPaypal } from "react-icons/fa";

interface portfolioProps {
    path: string;
}

const PortfolioWrapper = (props: portfolioProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const extractAndFormat = (path) => {
        const extracted = path.split("/")[3].split(".")[0];
        const formatted = extracted.replace(/_/g, " ");
        const capitalized = formatted
          .split(" ")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      
        return capitalized;
      };

    return (
        <div className="p-6 portfolio-image-wrapper">
            <GetImage
                imagePath={props.path}
                className={`home-image ${isVisible ? "visible" : ""}`}
            />
            <Col>
                <Row className="mt-3">
                    <div className="image-title">{extractAndFormat(props.path)}</div>
                </Row>
                <hr />
                <Row className="mt-4">
                    <Col className="col-4 text-center">
                        <Heart size={20} />
                    </Col>
                    <Col className="col-4 text-center">
                        <CurrencyBitcoin size={30} />
                    </Col>
                    <Col className="col-4 text-center">
                        <FaPaypal size={30} />
                    </Col>
                </Row>
            </Col>
        </div>
    );
};

export default PortfolioWrapper;
