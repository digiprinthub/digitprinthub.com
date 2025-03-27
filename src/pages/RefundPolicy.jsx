import React from "react";
import { Navbar, Footer } from "../components";

const RefundPolicy = () => {
  return (
    <>
      <Navbar />
      <div
        className="refund-policy"
        style={{ margin: "0 20px", padding: "20px" }}
      >
        <h1>Digit PrintHub's Refund Guidelines</h1>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Important Note:</strong>
            <br />
            Digit PrintHub is an independent printer seller. We also provide
            general troubleshooting tips as a complementary service. Please note
            that we are not affiliated with any major printer brands. For
            complex issues, we recommend visiting the official support website
            of your printer manufacturer.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Eligibility for Refunds:</strong>
            <br />
            To qualify for a refund on purchased printers, please ensure the
            following criteria are met:
          </p>
          <ul>
            <li>
              <strong>Time Limit:</strong> Refund requests must be submitted
              within 30 days from your purchase date.
            </li>
            <li>
              <strong>Item Condition:</strong> The product must be unused and in
              its original, unopened packaging.
            </li>
            <li>
              <strong>Purchase Proof:</strong> A valid receipt or proof of
              purchase is necessary for processing refunds.
            </li>
          </ul>
        </section>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Items Not Eligible for Refunds:</strong>
            <br />
            The following items cannot be returned or refunded:
          </p>
          <ul>
            <li>Customized Products</li>
            <li>Consumables (e.g., ink cartridges, toner)</li>
            <li>Digital Goods (e.g., software, licenses)</li>
          </ul>
        </section>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Steps to Request a Refund:</strong>
            <br />
            To process a return, please follow these instructions:
          </p>
          <ol>
            <li>
              <strong>Contact Us:</strong> Email{" "}
              <a href="mailto:contact@digitprinthub.com">
                contact@digitprinthub.com
              </a>{" "}
              with your order number and reason for the return.
            </li>
            <li>
              <strong>Return Authorization:</strong> We will issue a Return
              Authorization (RA) number and provide detailed return
              instructions.
            </li>
            <li>
              <strong>Return Shipment:</strong> Securely package the item with
              its original receipt and the RA number. You are responsible for
              the cost of return shipping.
            </li>
          </ol>
        </section>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Processing Refunds:</strong>
            <br />
            After receiving and inspecting the returned item, we will process
            your refund within 5-7 business days. Please allow additional time
            for your bank to complete the refund process.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Exchanges:</strong>
            <br />
            We do not facilitate direct exchanges. To exchange a product, please
            follow the return process and place a new order for the desired
            item.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Defective or Incorrect Items:</strong>
            <br />
            If you receive a defective or incorrect item, please contact us
            immediately at{" "}
            <a href="mailto:contact@digitprinthub.com">
              contact@digitprinthub.com
            </a>
            . We will arrange for a replacement or issue a refund at no extra
            charge.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Troubleshooting Support:</strong>
            <br />
            As part of our service, we offer general troubleshooting tips for
            printers. Please note that this support is provided as-is and does
            not affect our refund policy for purchased products.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Contact Information:</strong>
            <br />
            For any questions or concerns regarding our refund policy, products,
            or general troubleshooting tips, please reach out to us:
          </p>
          <address>
            <strong>Digit PrintHub</strong>
            <br />
            Email:{" "}
            <a href="mailto:contact@digitprinthub.com">
              contact@digitprinthub.com
            </a>
          </address>
        </section>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Policy Updates:</strong>
            <br />
            We may update this refund policy periodically. Changes will be
            posted on our website and will be effective for all purchases made
            after the update date.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default RefundPolicy;
