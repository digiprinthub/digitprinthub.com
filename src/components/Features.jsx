import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShippingFast,
  faExchangeAlt,
  faCreditCard,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  const features = [
    {
      icon: faShippingFast,
      title: "Complimentary Delivery",
      description: "Enjoy free delivery on all orders with fast shipping.",
    },
    {
      icon: faExchangeAlt,
      title: "Hassle-Free Returns",
      description: "Return items within 15 days with a simple process.",
    },
    {
      icon: faCreditCard,
      title: "Secure Payments",
      description: "Pay securely with all major credit and debit cards.",
    },
    {
      icon: faHeadset,
      title: "24/7 Customer Assistance",
      description: "Get friendly support anytime, day or night.",
    },
  ];

  return (
    <Container className="my-5">
      <Row className="justify-content-center g-4">
        {features.map((feature, index) => (
          <Col
            key={index}
            lg={3}
            md={6}
            sm={12}
            className="text-center p-3"
            style={{
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "20px",
            }}
          >
            <FontAwesomeIcon
              icon={feature.icon}
              style={{
                fontSize: "2.5rem",
                color: "#007bff",
                marginBottom: "12px",
              }}
            />
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
            >
              {feature.title}
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "#555",
                lineHeight: "1.4",
                marginBottom: "0",
              }}
            >
              {feature.description}
            </p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Features;
