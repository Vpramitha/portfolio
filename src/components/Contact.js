import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import whatsAppIcon from "./assets/icons8-whatsapp-240.png"; // Replace with actual image
import mobileIcon from "./assets/icons8-whatsapp-512.png"; // Replace with actual image
import gmailIcon from "./assets/icons8-gmail-480.png";

const Contact = () => {
  return (
    <div id="contact">
      <h2 className="text-center">Contacts</h2>
      <Row>
        <Col>
          <div>
            <div
              className="d-flex "
              style={{
                position: "relative",
                marginTop: "5vh",
              }}
            >
              {/* WhatsApp Icon behind the text */}
              <img
                src={whatsAppIcon}
                alt="WhatsApp"
                style={{
                  width: "10vh",
                  position: "absolute",

                  zIndex: "2",
                }}
              />
              <div
                style={{
                  border: "2px solid black",
                  alignContent: "center",
                  marginLeft: "5vh",
                  paddingLeft: "5vh",
                  paddingRight: "5vh",
                  marginTop: "4vh",
                  backgroundColor: "green", // Add background to make the number more readable
                  position: "relative", // Ensure this div stays on top
                  zIndex: "1",
                  borderRadius: "5%",
                  color: "white",
                }}
              >
                071 0448098
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <div
              className="d-flex "
              style={{
                position: "relative",
                marginTop: "5vh",
              }}
            >
              {/* WhatsApp Icon behind the text */}
              <img
                src={mobileIcon}
                alt="Mobile Number"
                style={{
                  width: "10vh",
                  position: "absolute",

                  zIndex: "2",
                }}
              />
              <div
                style={{
                  border: "2px solid black",
                  alignContent: "center",
                  marginLeft: "5vh",
                  paddingLeft: "5vh",
                  paddingRight: "5vh",
                  marginTop: "4vh",
                  backgroundColor: "blue", // Add background to make the number more readable
                  position: "relative", // Ensure this div stays on top
                  zIndex: "1",
                  borderRadius: "5%",
                  color: "white",
                }}
              >
                072 7494342
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <div
              className="d-flex "
              style={{
                position: "relative",
                marginTop: "5vh",
              }}
            >
              {/* WhatsApp Icon behind the text */}
              <img
                src={gmailIcon}
                alt="Gmail Address"
                style={{
                  width: "10vh",
                  position: "absolute",

                  zIndex: "2",
                }}
              />
              <div
                style={{
                  border: "2px solid black",
                  alignContent: "center",
                  marginLeft: "5vh",
                  paddingLeft: "5vh",
                  paddingRight: "5vh",
                  marginTop: "4vh",
                  backgroundColor: "red", // Add background to make the number more readable
                  position: "relative", // Ensure this div stays on top
                  zIndex: "1",
                  borderRadius: "5%",
                }}
              >
                vidulpramitha2000@gmail.com
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
