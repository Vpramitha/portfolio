import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import lmsSystem from "./assets/main dashboard.png"; // Your image path here
import project2Image from "./assets/dustBinProject.jpg"; // Replace with actual image
import project3Image from "./assets/classManagementApp.png"; // Replace with actual image
import project4Image from "./assets/Screenshot 2024-09-30 145650.png"; // Replace with actual image
import project5Image from "./assets/parkingManagementSystem1.png";
import "./Projects.css"; // Assuming you will use a custom CSS file

const Projects = () => {
  return (
    <div id="projects" className="my-5">
      <h2 className="text-center">My Projects</h2>
      <div className="projects-container">
        <Row className="g-4">
          {/* Card 1 */}
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card className="custom-card">
              <Card.Img
                variant="top"
                src={lmsSystem}
                alt="Library Management System"
                className="custom-card-img"
              />
              <Card.Body>
                <Card.Title>Library Management System</Card.Title>
                <Card.Text>
                  The Library Management System (2023) is a web-based solution
                  designed for R/Kalawana National School, enabling efficient
                  book tracking and borrowing. It features user management, book
                  inventory control, and real-time notifications. Developed
                  using React, Node.js, and SQL, it streamlines library
                  operations with a modern interface and database integration.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card className="custom-card">
              <Card.Img
                variant="top"
                src={project2Image}
                alt="Project 2"
                className="custom-card-img"
              />
              <Card.Body>
                <Card.Title>Smart DustBin</Card.Title>
                <Card.Text>
                  The Smart Dustbin (IoT Project) 2023 is a waste management
                  solution with a mobile app for remote monitoring, a load
                  sensor to detect waste levels, and an automated lid that opens
                  when nearby motion is detected. It uses Arduino with ESP 8266,
                  Java in Android Studio, and Firebase for real-time data.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card className="custom-card">
              <Card.Img
                variant="top"
                src={project3Image}
                alt="Project 3"
                className="custom-card-img"
              />
              <Card.Body>
                <Card.Title>Student Report Card App</Card.Title>
                <Card.Text>
                  The Student Report Card App, developed using Android Studio
                  with Java, efficiently manages student records and allows
                  quick access to academic data. This application enables
                  teachers to input and update grades seamlessly, generating
                  detailed report cards. Its user-friendly interface enhances
                  communication and streamlines record-keeping, ensuring
                  effective management of student information.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 4 */}
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card className="custom-card">
              <Card.Img
                variant="top"
                src={project4Image}
                alt="Project 4"
                className="custom-card-img"
              />
              <Card.Body>
                <Card.Title>Weather App</Card.Title>
                <Card.Text>
                  Developed with React Native, this app offers real-time weather
                  updates and forecasts. It efficiently retrieves data from an
                  API, featuring a user-friendly interface that displays
                  temperatures and weather conditions for locations worldwide.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 5 */}
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card className="custom-card">
              <Card.Img
                variant="top"
                src={project5Image}
                alt="Project 5"
                className="custom-card-img"
              />
              <Card.Body>
                <Card.Title>Vehicle Parking Management System</Card.Title>
                <Card.Text>
                  The Vehicle Management System is a desktop application
                  developed in Python to automate vehicle tracking in parking
                  facilities. Using camera technology, it reads vehicle numbers
                  in real-time, ensuring accurate records of entries and exits.
                  This system enhances the parking experience by providing
                  reliable monitoring and efficient management of parking
                  resources.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Projects;
