import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faGithub,
  faInstagram,
  
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaIcons = () => {
  return (
    <div style={{ marginTop: "5vh" }}>
      <a
        href="www.linkedin.com/in/vidul-pramitha-876934248"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#0077B5", paddingRight: "2vw" }} // LinkedIn blue
      >
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </a>
      <a
        href="https://www.facebook.com/vidul.pramitha?mibextid=ZbWKwL"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#3b5998", paddingRight: "2vw" }} // Facebook blue
      >
        <FontAwesomeIcon icon={faFacebook} size="3x" />
      </a>
      <a
        href="https://github.com/Vpramitha"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#333", paddingRight: "2vw" }} // GitHub black
      >
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
      <a
        href="https://www.instagram.com/vidul_pramitha?igsh=eXRqZGtydGt4Y2Zw"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#C13584" }} // Instagram pink
      >
        <FontAwesomeIcon icon={faInstagram} size="3x" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
