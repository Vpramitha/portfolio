import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Education from "./components/Eduction";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <HeroSection />
        <Projects />
        <Education />
        <Contact />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
