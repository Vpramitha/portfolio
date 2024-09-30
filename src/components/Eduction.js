import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Education = () => {
  const educationData = [
    {
      degree: "BSc.(Hons) in Information Technology",
      institution: "University of Kelaniya, Sri Lanka",
      year: "2022 - Present",
      description:
        "Focused on web development, mobile development, and software engineering. Worked on multiple projects using modern web technologies such as React, Node.js, and SQL.",
      logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmzXJ78WHMkCKQ2og52frU3VkP7rfftJq4bHWMFz40ESPwmX45TMIkG_X6xpG8rAGJuG1Qde7d0akdmkHeUzlJj46GlA3GF5dM7wEyUosHjqkToQzW4BCfat4vXX4mDcsZdvyh_FVuYEBE/s1600/coatofarms.png", // University logo URL
    },
    {
      degree: "G.C.E Advanced Level - Physical Science",
      institution: "R/Kalawana National School",
      year: "2017 - 2021",
      description:
        "Completed studies in mathematics, physics, and chemistry with a focus on problem-solving and analytical thinking.",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmXN_GxWP6rRtzAF3bp6BhQ66T2Mn3NX6-5w&s", // University logo URL
    },
    {
      degree: "G.C.E Ordinary Level",
      institution: "R/Kalawana National School",
      year: "2006 - 2016",
      description:
        "Successfully completed studies with a strong academic record, focusing on core subjects including mathematics and science.",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmXN_GxWP6rRtzAF3bp6BhQ66T2Mn3NX6-5w&s", // University logo URL
    },
    {
      degree: "Certificate in Computer Applications",
      institution: "Inforbit Lanka Computer School",
      year: "2011",
      description:
        "Successfully completed studies with a strong academic record, focusing on basic computer technologies and tools.",
      logo: "data:image/png;base64,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", // University logo URL
    },
  ];

  return (
    <Container id="education" fluid className="my-5">
      <h2 className="text-center">Education</h2>
      <Row className="g-1">
        {educationData.map((edu, index) => (
          <Col key={index} xs={12} md={6} lg={3}>
            <Card
              className="custom-card"
              style={{
                // backgroundImage: `url(${edu.logo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "2px solid black", // Adds a black solid border
              }} // Set background image
            >
              <Card.Body>
                <div className="d-flex justify-content-center">
                  <img
                    src={edu.logo} // Directly use the image path from edu.logo
                    alt="Logo"
                    style={{
                      width: "100px", // Adjust the size to your preference
                      height: "100px", // Keep the same width and height for a circular image
                      borderRadius: "50%", // This makes the image round
                      border: "2px solid black", // Adds a black solid border
                      objectFit: "cover", // Ensures the image covers the area without stretching
                    }}
                  />
                </div>
                <Card.Title>{edu.degree}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {edu.institution}
                </Card.Subtitle>

                <Card.Text>{edu.year}</Card.Text>
                <Card.Text>{edu.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Education;
