import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaBriefcase, FaLocationArrow, FaRegFileAlt } from "react-icons/fa";
import { Navbar, Footer, SubNavBar } from "../components";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Sales Specialist",
      location: "Remote",
      description:
        "We are seeking a motivated Sales Specialist to join our team. The ideal candidate will have experience in sales and customer service, with a passion for helping customers find the right printing solutions.",
      requirements: [
        "Proven experience in sales or customer service",
        "Excellent communication and interpersonal skills",
        "Strong problem-solving abilities",
        "Familiarity with printing products is a plus",
      ],
    },
    {
      title: "Customer Support Representative",
      location: "New York, NY",
      description:
        "Join our Customer Support team to assist clients with their printing needs. You will provide exceptional service, troubleshoot issues, and ensure customer satisfaction.",
      requirements: [
        "Experience in customer support or service",
        "Strong communication and empathy skills",
        "Ability to handle multiple tasks and prioritize effectively",
        "Knowledge of printing products is a plus",
      ],
    },
    {
      title: "Marketing Manager",
      location: "San Francisco, CA",
      description:
        "We are looking for a creative Marketing Manager to develop and implement marketing strategies to promote our printing solutions. The role involves working closely with sales and design teams to drive brand awareness and customer engagement.",
      requirements: [
        "Experience in marketing or related field",
        "Strong analytical and strategic thinking skills",
        "Proficiency in digital marketing tools and platforms",
        "Experience with print or tech products is a plus",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      {/* <SubNavBar />{" "} */}
      <Container className="my-5">
        <Row className="mb-4">
          <Col className="text-center">
            <h1 className="display-4 mb-4">Careers at Digit PrintHub</h1>
            <p className="lead mb-5">
              At Digit PrintHub, we’re always looking for talented and
              passionate individuals to join our team. Explore our current job
              openings and apply today to become part of our dynamic company.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={10}>
            {jobOpenings.map((job, index) => (
              <Card key={index} className="mb-4 shadow-sm border-light">
                <Card.Body>
                  <Card.Title className="d-flex align-items-center">
                    <FaBriefcase className="me-2 text-primary" />
                    {job.title}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted d-flex align-items-center">
                    <FaLocationArrow className="me-2" />
                    {job.location}
                  </Card.Subtitle>
                  <Card.Text className="mb-4">{job.description}</Card.Text>
                  <h5 className="mb-3">
                    <FaRegFileAlt className="me-2" />
                    Requirements:
                  </h5>
                  <ul>
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="mb-2">
                        {req}
                      </li>
                    ))}
                  </ul>
                  <Button variant="primary" className="mt-3">
                    Apply Now
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="text-center">
            <p>
              Interested in joining our team but don't see the right position?
              Feel free to send us your resume and cover letter at{" "}
              <a href="mailto:careers@rapidhub.com" className="text-primary">
                careers@rapidhub.com
              </a>
              .
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Careers;
