import React from "react";
import { Navbar, Footer } from "../components";

const CookiesPolicy = () => {
  return (
    <>
      <Navbar />
      <div
        className="container mx-auto px-4 py-6"
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        <h1
          className="text-xl font-bold mb-6 text-center"
          style={{ fontWeight: 700 }}
        >
          Cookies Policy
        </h1>

        <section className="mb-6">
          <p className="text-base text-gray-700" style={{ lineHeight: "1.8" }}>
            <span className="font-bold" style={{ fontWeight: 700 }}>
              Important Note:{" "}
            </span>
            Digit PrintHub operates as an independent seller of printers. We
            also provide general troubleshooting tips as a complementary
            service. We are not associated with any major printer brands. For
            complex issues, please consult the support resources of your printer
            manufacturer.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-base text-gray-700" style={{ lineHeight: "1.8" }}>
            <span className="font-bold" style={{ fontWeight: 700 }}>
              1. What Are Cookies?{" "}
            </span>
            Cookies are small text files placed on your device (computer,
            smartphone, tablet) by websites you visit. They enhance website
            functionality and provide analytical insights. Cookies can be
            categorized based on their function and duration.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-base text-gray-700" style={{ lineHeight: "1.8" }}>
            <span className="font-bold" style={{ fontWeight: 700 }}>
              2. Types of Cookies We Use{" "}
            </span>
          </p>

          <p className="text-base text-gray-700" style={{ lineHeight: "1.8" }}>
            <span className="font-bold" style={{ fontWeight: 700 }}>
              2.1. Essential Cookies:{" "}
            </span>
            These cookies are necessary for the basic functionality of our site.
            They enable essential features such as secure login and website
            navigation.
          </p>

          <p className="text-base text-gray-700" style={{ lineHeight: "1.8" }}>
            <span className="font-bold" style={{ fontWeight: 700 }}>
              2.2. Performance Cookies:{" "}
            </span>
            Performance cookies collect data on how users interact with the site
            to improve its performance and user experience.
          </p>

          <p className="text-base text-gray-700" style={{ lineHeight: "1.8" }}>
            <span className="font-bold" style={{ fontWeight: 700 }}>
              2.3. Functional Cookies:{" "}
            </span>
            These cookies allow the site to remember your preferences, such as
            language settings and display options.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-base text-gray-700" style={{ lineHeight: "1.8" }}>
            <span className="font-bold" style={{ fontWeight: 700 }}>
              3. How We Use Cookies:{" "}
            </span>
            As an independent seller, we use cookies to enhance user experience
            and improve the usability of our site. Cookies assist with website
            navigation, performance analytics, and delivering better product
            information and support.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-base text-gray-700" style={{ lineHeight: "1.8" }}>
            <span className="font-bold" style={{ fontWeight: 700 }}>
              4. Third-Party Cookies:{" "}
            </span>
            We do not utilize third-party cookies for advertising or affiliate
            marketing. However, we may use cookies from third-party services to
            monitor website performance and analyze user interactions to enhance
            our product offerings and content.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-base text-gray-700" style={{ lineHeight: "1.8" }}>
            <span className="font-bold" style={{ fontWeight: 700 }}>
              5. Managing Cookies:{" "}
            </span>
            You can manage and control cookies through your browser settings.
            Most browsers allow you to block or delete cookies. Please note that
            blocking cookies may limit some features of our site.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-base text-gray-700" style={{ lineHeight: "1.8" }}>
            <span className="font-bold" style={{ fontWeight: 700 }}>
              6. Changes to This Policy:{" "}
            </span>
            We may update this Cookies Policy to reflect changes in our services
            or legal requirements. We encourage you to review this policy
            regularly.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-base text-gray-700" style={{ lineHeight: "1.8" }}>
            <span className="font-bold" style={{ fontWeight: 700 }}>
              7. Contact Us:{" "}
            </span>
            If you have any questions regarding our use of cookies, this policy,
            or our services, please reach out to us:
          </p>
          <address className="mt-4 text-base text-gray-700">
            <strong>Digit PrintHub</strong>
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

export default CookiesPolicy;
