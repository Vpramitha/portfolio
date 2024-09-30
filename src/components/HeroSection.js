import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import project2Image from "./assets/Vidul2backN2.png"; // Replace with actual image
import pdf from "./assets/Vidul Pramitha CV final.pdf"; // Replace with actual image
import SocialMediaIcons from "./SocialMediaIcons"; // Adjust the path as needed

const HeroSection = () => {
  return (
    <Container fluid className="text-center my-5">
      <Row style={{ border: "2px solid black" }}>
        <Col
          className="d-flex flex-column align-items-center justify-content-center"
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            height: "80vh",
            alignContent: "center",
          }} // Optional height for full viewport
        >
          <div style={{ marginLeft: "10vh" }}>
            <p style={{ textAlign: "left", fontSize: 25 }}>
              <b style={{ fontSize: 55 }}>
                Hi, I am<br></br>Vidul Pramitha
              </b>
              <br />
              <b>BSc.(Hons) Information Technology Undergraduate</b>
              <br />
              Intern Mobile/Web Developer.
            </p>
          </div>
          <div
            className="d-flex justify-content-center"
            style={{ marginTop: "5vh" }}
          >
            <Button
              variant="primary"
              href="#projects"
              className="mx-2 custom-button"
            >
              See My Work
            </Button>

            <Button variant="primary" className="mx-2 custom-button">
              <a
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                style={{
                  textDecoration: "none",
                }}
              >
                My CV
              </a>
            </Button>
          </div>
          <div>
            <SocialMediaIcons />
          </div>
        </Col>

        <Col style={{ textAlign: "Right" }}>
          <img
            src={project2Image}
            alt="Profile Pic"
            style={{ height: "100%" }}
          ></img>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
