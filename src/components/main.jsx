import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPrint,
  faCog,
  faCheckCircle,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import Printer from "../assets/printer_image.png";

const Main = () => {
  const heroStyle = {
    background: "#F7F9FC", // Light grayish-white for a clean, professional look
    color: "#1F2A44", // Darker text color for better visibility
    padding: "40px 0",
    borderBottom: "1px solid #E5E7EB", // Subtle border for a polished look
  };

  const bulletPointStyle = {
    display: "flex",
    alignItems: "center",
    fontSize: "1.125rem",
    marginBottom: "16px",
    fontWeight: "500",
    color: "#1F2A44",
  };

  const iconStyle = {
    marginRight: "10px",
    color: "#0056B3", // Professional blue for icons
    fontSize: "1.25rem",
  };

  const ctaButtonStyle = {
    backgroundColor: "#0056B3", // Professional blue for the button
    border: "none",
    color: "#FFFFFF", // White text for contrast
    fontSize: "1.125rem",
    fontWeight: "600",
    padding: "12px 24px",
    textTransform: "uppercase",
    borderRadius: "6px",
    width: "100%",
    maxWidth: "280px",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.15)",
    transition: "background-color 0.3s ease",
  };

  const ctaButtonHoverStyle = {
    backgroundColor: "#003087", // Darker blue on hover
  };

  return (
    <div>
      <div style={heroStyle}>
        <Container>
          <Row className="align-items-center">
            {/* Left Side - Text */}
            <Col lg={6} className="text-left">
              <h1
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  marginBottom: "20px",
                  color: "#1F2A44",
                }}
              >
                Simplify Your Printer Setup
              </h1>
              <p
                style={{
                  fontSize: "1.125rem",
                  marginBottom: "24px",
                  color: "#4B5563",
                }}
              >
                Access resources to install drivers and configure your printer for optimal performance.
              </p>
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#1F2A44",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  border: "1px solid #E5E7EB",
                }}
              >
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li style={bulletPointStyle}>
                    <FontAwesomeIcon icon={faPrint} style={iconStyle} />
                    Quick and Simple Setup Process
                  </li>
                  <li style={bulletPointStyle}>
                    <FontAwesomeIcon icon={faCog} style={iconStyle} />
                    Tailored Configuration Guidance
                  </li>
                  <li style={bulletPointStyle}>
                    <FontAwesomeIcon icon={faCheckCircle} style={iconStyle} />
                    Reliable Compatibility Support
                  </li>
                  <li style={bulletPointStyle}>
                    <FontAwesomeIcon icon={faDownload} style={iconStyle} />
                    Access to Driver Installation Resources
                  </li>
                </ul>
              </div>
              <div style={{ marginTop: "28px", textAlign: "center" }}>
                <Link to="/printersearch">
                  {/* <Button
                    style={ctaButtonStyle}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor =
                        ctaButtonHoverStyle.backgroundColor)
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor =
                        ctaButtonStyle.backgroundColor)
                    }
                  >
                    Get Started
                  </Button> */}
                </Link>
              </div>
            </Col>

            {/* Right Side - Printer Image */}
            <Col lg={6} className="text-center">
              <Image
                src={Printer}
                alt="Generic Printer Illustration"
                fluid
                style={{ maxWidth: "85%", padding: "20px 0" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
     
    </div>
  );
};

export default Main;