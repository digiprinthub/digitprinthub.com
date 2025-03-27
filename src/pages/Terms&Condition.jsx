import React from "react";
import { Navbar, Footer } from "../components";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-xl font-bold mb-4 text-center">
          WELCOME TO Digit PrintHub!
        </h1>
        <p className="text-sm text-gray-700 mb-4">
          By using our website, rapidhub.online, you agree to comply with the
          following terms and conditions. We encourage you to read them
          thoroughly. Your continued use of our site indicates your acceptance
          of these terms.
        </p>

        <section className="mb-6">
          <p className="text-sm text-gray-700">
            <strong>Acceptance of Terms:</strong>
            <br />
            By accessing our site, you acknowledge that you have read and
            understood our Terms and Privacy Policy. If you do not agree with
            these terms, we ask that you refrain from using our site. Please
            note that Digit PrintHub operates independently and is not
            affiliated with any major printer brands.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-sm text-gray-700">
            <strong>Changes to Terms:</strong>
            <br />
            We reserve the right to update these Terms from time to time. Any
            changes will be reflected on our site, and your ongoing use of the
            site will signify your acceptance of the updated Terms.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-sm text-gray-700">
            <strong>Services Offered:</strong>
            <br />
            At Digit PrintHub, we specialize in the independent sale of
            printers, providing options for online purchases. The
            troubleshooting tips available on our site are based on our own
            knowledge and experience. For brand-specific issues, we recommend
            consulting the official support channels of your printer's
            manufacturer.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-sm text-gray-700">
            <strong>Accuracy of Information:</strong>
            <br />
            We make every effort to ensure the information on our site is
            accurate. However, we cannot guarantee that all content is free from
            errors. We maintain the right to change or remove information at any
            time without prior notice.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-sm text-gray-700">
            <strong>User Obligations:</strong>
            <br />
            You agree to refrain from any unlawful activities and misuse of our
            site. You are accountable for the content you provide and grant us
            the rights to utilize it.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-sm text-gray-700">
            <strong>Limitation of Liability:</strong>
            <br />
            Our site and its content are offered on an "as-is" basis without any
            warranties. We are not responsible for any indirect or consequential
            damages resulting from your use of our site or services.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-sm text-gray-700">
            <strong>Indemnification:</strong>
            <br />
            You agree to indemnify Digit PrintHub and its affiliates from any
            claims or damages that arise from your use of our site or your
            violation of these Terms.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-sm text-gray-700">
            <strong>Governing Law:</strong>
            <br />
            These Terms are governed by the laws of Florida. Any disputes
            arising under these Terms will be resolved in the courts of
            Miami-Dade County, Florida.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-sm text-gray-700">
            <strong>Contact Information:</strong>
            <br />
            If you have any questions or concerns regarding these Terms, please
            reach out to us:
          </p>
          <address className="mt-4 text-sm text-gray-700">
            <strong>Digit PrintHub</strong>
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

export default TermsAndConditions;
