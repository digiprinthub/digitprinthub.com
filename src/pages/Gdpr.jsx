import React from "react";
import { Navbar, Footer } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faUserShield,
  faDatabase,
  faInfoCircle,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const GDPRCompliance = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-xl font-bold mb-4 text-center">GDPR COMPLIANCE</h1>

        <section className="mb-6">
          <h2 className="text-lg font-semibold flex items-center mb-2">
            <FontAwesomeIcon icon={faLock} className="mr-2" />
            1. INTRODUCTION
          </h2>
          <p className="text-sm text-gray-700">
            At Digit PrintHub, we are an independent printer seller providing
            general troubleshooting tips. We are not affiliated with any major
            printer brands. We are committed to ensuring the privacy and
            protection of your personal data. This GDPR Compliance page explains
            how we collect, use, and protect your data in accordance with the
            General Data Protection Regulation (GDPR).
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold flex items-center mb-2">
            <FontAwesomeIcon icon={faUserShield} className="mr-2" />
            2. DATA COLLECTION
          </h2>
          <p className="text-sm text-gray-700">
            We collect personal data that you voluntarily provide to us, such as
            your name and contact details when you interact with us for
            printer-related inquiries or when you access our troubleshooting
            tips.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold flex items-center mb-2">
            <FontAwesomeIcon icon={faDatabase} className="mr-2" />
            3. DATA USAGE
          </h2>
          <p className="text-sm text-gray-700">
            The data we collect is used to provide printer-related information,
            offer general troubleshooting tips, and ensure compliance with legal
            obligations. Your data is handled securely and only for the purposes
            stated. For complex issues, we recommend contacting the official
            support of your printer manufacturer.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold flex items-center mb-2">
            <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
            4. YOUR RIGHTS
          </h2>
          <p className="text-sm text-gray-700">
            Under GDPR, you have the right to access, correct, or delete your
            personal data. You also have the right to restrict or object to
            certain processing activities and to data portability.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold flex items-center mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            5. CONTACT US
          </h2>
          <p className="text-sm text-gray-700">
            If you have any questions or concerns regarding our GDPR compliance,
            your personal data, or our services as an independent printer
            seller, please contact us:
          </p>
          <address className="mt-4 text-sm text-gray-700">
            <strong>Digit PrintHub</strong>
            {/* <br />
            5678 Innovation Lane, Suite 300
            <br />
            San Jose, CA 95134
            <br />
            United States */}
            <br />
            Email:{" "}
            <a
              href="mailto:contact@digitprinthub.com"
              className="text-blue-500 hover:underline"
            >
              contact@digitprinthub.com
            </a>
          </address>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default GDPRCompliance;
