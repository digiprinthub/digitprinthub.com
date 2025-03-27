import React from "react";
import { Navbar, Footer } from "../components";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="about" style={{ margin: "0 20px", padding: "20px" }}>
        <h2 style={{ fontSize: "1.5rem" }}>About Digit PrintHub</h2>
        <p>
          Welcome to Digit PrintHub, your trusted source for high-quality
          printers and practical resources. As an independent seller, we are not
          affiliated with any printer manufacturers. Our focus is on offering a
          curated selection of reliable printers and accessories from reputable
          brands, paired with general guidance to help you choose and maintain
          your printing solutions.
        </p>

        <h3 style={{ fontSize: "1.25rem" }}>What We Offer</h3>
        <p>With extensive experience in the printer market, we provide:</p>
        <ul>
          <li>A wide range of printers to suit various needs</li>
          <li>Recommendations to help you find the right printer</li>
          <li>General troubleshooting tips and setup guidance</li>
          <li>Advice for maintaining printer performance</li>
        </ul>

        <h3 style={{ fontSize: "1.25rem" }}>Why Choose Us</h3>
        <ul>
          <li>
            <strong>Independent Expertise:</strong> We offer unbiased
            recommendations tailored to your printing requirements, free from
            manufacturer influence.
          </li>
          <li>
            <strong>Customer Focus:</strong> Your satisfaction drives us to
            deliver quality products and helpful resources.
          </li>
          <li>
            <strong>Practical Knowledge:</strong> Our understanding of printers
            enables us to assist with common questions and needs.
          </li>
          <li>
            <strong>Valuable Resources:</strong> Access straightforward guides
            to enhance your printing experience.
          </li>
        </ul>

        <h3 style={{ fontSize: "1.25rem" }}>Our Services</h3>
        <p>
          At Digit PrintHub, we are committed to supporting your printing
          journey with:
        </p>
        <ul>
          <li>Sales of quality printers and accessories</li>
          <li>Assistance in selecting and setting up your printer</li>
          <li>Basic troubleshooting resources</li>
          <li>Tips for printer care and efficiency</li>
        </ul>

        <h3 style={{ fontSize: "1.25rem" }}>Disclaimer</h3>
        <p>
          Digit PrintHub operates as an independent retailer and is not
          affiliated with any printer manufacturers. The information and
          resources we provide are general in nature and intended to assist with
          common printer-related topics. For detailed, model-specific support or
          technical issues, we recommend contacting your printer’s manufacturer
          directly or visiting their official support website.
        </p>

        <h3 style={{ fontSize: "1.25rem" }}>Contact Us</h3>
        <p>
          Have questions about our products or need help choosing a printer?
          We’re here to assist you. Reach out to us at:
        </p>
        <address style={{ marginTop: "20px", fontStyle: "normal" }}>
          Digit PrintHub
          <br />
          Email:{" "}
          <a href="mailto:contact@digitprinthub.com">
            contact@digitprinthub.com
          </a>
        </address>

        <p style={{ marginTop: "20px" }}>
          Thank you for choosing Digit PrintHub. We’re excited to help you meet
          your printing needs with reliable products and support.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
