import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-light py-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase mb-3">Company</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/about" className="text-light text-decoration-none">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light text-decoration-none">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-light text-decoration-none">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase mb-3">Privacy</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-light text-decoration-none"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies-policy"
                  className="text-light text-decoration-none"
                >
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link to="/gdpr" className="text-light text-decoration-none">
                  GDPR Compliance
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase mb-3">Terms & Conditions</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-light text-decoration-none"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/disclaimer"
                  className="text-light text-decoration-none"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase mb-3">Policies</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/shipping-policy"
                  className="text-light text-decoration-none"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="text-light text-decoration-none"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/warranty"
                  className="text-light text-decoration-none"
                >
                  Warranty Information
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4 bg-light" />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8 text-center text-md-start">
            <p className="mb-md-0">
              &copy; {currentYear} Digit PrintHub. All Rights Reserved.
            </p>
          </div>
          <div className="col-md-5 col-lg-4">
            <ul className="list-inline text-center text-md-end mb-0">
              <li className="list-inline-item mx-2">
                <a
                  href="https://www.facebook.com/digitprinthub"
                  className="text-light"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={20} color="#fff" />
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a
                  href="https://www.twitter.com/digitprinthub"
                  className="text-light"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter size={20} color="#fff" />
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a
                  href="https://www.instagram.com/digitprinthub"
                  className="text-light"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={20} color="#fff" />
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a
                  href="https://www.linkedin.com/company/digitprinthub"
                  className="text-light"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} color="#fff" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
