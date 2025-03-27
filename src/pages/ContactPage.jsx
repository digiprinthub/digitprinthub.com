import React from "react";
import { Navbar, Footer } from "../components";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="contact-us" style={{ margin: "0 20px", padding: "20px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
          Contact Digit PrintHub
        </h2>
        <p style={{ fontSize: "0.875rem", color: "#4B5563" }}>
          At Digit PrintHub, we are an independent retailer specializing in a
          diverse range of printers from various manufacturers. We are not
          affiliated with or authorized by any specific printer brand. Our goal
          is to provide quality products and general resources through both our
          physical stores and online platform, including basic troubleshooting
          guidance.
        </p>

        <section style={{ marginTop: "20px" }}>
          <h3 style={{ fontSize: "1.125rem", fontWeight: "500" }}>
            Contact Information
          </h3>
          <p style={{ fontSize: "0.875rem", color: "#4B5563" }}>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:contact@digitprinthub.com"
              style={{ color: "#2563EB", textDecoration: "none" }}
              onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
              onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            >
              contact@digitprinthub.com
            </a>
            <br />
            <strong>Phone:</strong> (408) 555-1234
            <br />
            <strong>Fax:</strong> (408) 555-5678
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h3 style={{ fontSize: "1.125rem", fontWeight: "500" }}>
            Business Hours
          </h3>
          <p style={{ fontSize: "0.875rem", color: "#4B5563" }}>
            Our team is available to assist you during the following times:
            <br />
            Monday – Friday: 9:00 AM – 6:00 PM PST
            <br />
            Saturday: 10:00 AM – 4:00 PM PST
            <br />
            Sunday: Closed
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h3 style={{ fontSize: "1.125rem", fontWeight: "500" }}>
            About Our Independent Services
          </h3>
          <p style={{ fontSize: "0.875rem", color: "#4B5563" }}>
            As an independent seller, we offer a variety of printers and provide
            general advice on selection and basic troubleshooting. For detailed
            technical support or brand-specific inquiries, we recommend
            contacting your printer’s manufacturer directly through their
            official support channels.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h3 style={{ fontSize: "1.125rem", fontWeight: "500" }}>
            Business Inquiries
          </h3>
          <p style={{ fontSize: "0.875rem", color: "#4B5563" }}>
            For bulk orders, product inquiries, or tailored printing solutions,
            please reach out to our team. We’re here to support your business
            needs with personalized assistance.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h3 style={{ fontSize: "1.125rem", fontWeight: "500" }}>
            Your Feedback
          </h3>
          <p style={{ fontSize: "0.875rem", color: "#4B5563" }}>
            We value your input! Please share your thoughts on how we can
            enhance our products and services to better serve you.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h3 style={{ fontSize: "1.125rem", fontWeight: "500" }}>
            Connect With Us
          </h3>
          <p style={{ fontSize: "0.875rem", color: "#4B5563" }}>
            Follow us for the latest updates on products and promotions:
          </p>
          <ul
            style={{
              listStyleType: "none",
              padding: "0",
              fontSize: "0.875rem",
            }}
          >
            <li>
              <a
                href="https://facebook.com/activtop cuirrentprinter"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2563EB", textDecoration: "none" }}
                onMouseOver={(e) =>
                  (e.target.style.textDecoration = "underline")
                }
                onMouseOut={(e) => (e.target.style.textDecoration = "none")}
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/digitprinthub"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2563EB", textDecoration: "none" }}
                onMouseOver={(e) =>
                  (e.target.style.textDecoration = "underline")
                }
                onMouseOut={(e) => (e.target.style.textDecoration = "none")}
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/company/digitprinthub"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2563EB", textDecoration: "none" }}
                onMouseOver={(e) =>
                  (e.target.style.textDecoration = "underline")
                }
                onMouseOut={(e) => (e.target.style.textDecoration = "none")}
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </section>

        <p
          style={{ marginTop: "20px", fontSize: "0.875rem", color: "#4B5563" }}
        >
          Thank you for choosing Digit PrintHub. We’re dedicated to supporting
          your printing needs with quality products and independent expertise.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
