import React from "react";
import { Navbar, Footer } from "../components";
import { Container, Row, Col } from "react-bootstrap";

const Disclaimer = () => {
  return (
    <>
      <Navbar />
      <Container className="my-5">
        <Row className="mb-4">
          <Col>
            <h1 className="display-4 mb-4 text-center">Website Disclaimer</h1>
            <p className="lead text-center">
              Digit PrintHub operates as an independent seller of printers. We
              also provide general troubleshooting tips as a complementary
              service. We are not affiliated with any major printer brands. The
              information provided on this website ("the Site") is intended for
              general informational purposes only. By accessing and using the
              Site, you agree to the following terms:
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <section className="mb-4">
              <h5>No Warranty</h5>
              <h5>1.1. Information Accuracy:</h5>
              <p>
                The content on the Site, including printer information and
                troubleshooting tips, is presented "as is" and "as available."
                While we strive to ensure accuracy, we do not guarantee the
                completeness, reliability, or timeliness of the content
                provided.
              </p>
              <h5>1.2. Availability:</h5>
              <p>
                We cannot guarantee uninterrupted access to the Site. The Site
                may experience downtime or errors, and we do not ensure it will
                always be available without interruptions.
              </p>
            </section>

            <section className="mb-4">
              <h5>Limitation of Liability</h5>
              <h5>2.1. Damages:</h5>
              <p>
                To the maximum extent permitted by law, we are not responsible
                for any direct or indirect damages arising from the use of the
                Site or the information provided. This includes, but is not
                limited to, loss of profits, data, or disruptions in service.
              </p>
              <h5>2.2. External Links:</h5>
              <p>
                The Site may contain links to third-party websites for
                convenience. We do not endorse these websites and are not
                responsible for any content, accuracy, or issues arising from
                your use of those sites.
              </p>
            </section>

            <section className="mb-4">
              <h5>User Responsibility</h5>
              <h5>3.1. Product Use:</h5>
              <p>
                You are responsible for ensuring that any printers meet your
                specific needs and are used in accordance with the
                manufacturer's guidelines. We are not liable for any misuse of
                the printers or failure to follow instructions.
              </p>
              <h5>3.2. Legal Compliance:</h5>
              <p>
                Users are required to comply with all applicable laws and
                regulations in connection with their use of the Site and any
                information provided through it.
              </p>
            </section>

            <section className="mb-4">
              <h5>Changes to Information</h5>
              <p>
                We reserve the right to update and modify the content on the
                Site, including this Disclaimer, at any time. Any changes will
                become effective immediately upon posting on this page.
              </p>
            </section>

            <section className="mb-4">
              <h5>No Professional Advice</h5>
              <p>
                The content provided on the Site, including troubleshooting
                tips, is not intended to constitute professional advice. For
                complex issues, please visit the official support website of
                your printer manufacturer or seek assistance from a qualified
                professional.
              </p>
            </section>

            <section className="mb-4">
              <h5>Governing Law</h5>
              <p>
                This Disclaimer is governed by the laws of the relevant
                jurisdiction. Any disputes arising in connection with this
                Disclaimer or the use of the Site will be subject to the courts
                of that jurisdiction.
              </p>
            </section>

            <section className="mb-4">
              <h5>Contact Information</h5>
              <p>
                If you have any questions regarding this Disclaimer, please
                contact us:
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
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Disclaimer;
