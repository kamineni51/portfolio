import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Your project images

import ecommerce from "../../Assets/Projects/ecommerce.jpg";

import netflix from "../../Assets/Projects/netflix.png";
import temperature from "../../Assets/Projects/temperature.png";
import google from "../../Assets/Projects/google.png";
// Original placeholders (from template)
import leaf from "../../Assets/Projects/leaf.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

         

          {/* Your Project 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Online Shopping Website"
              description="React + Django full-stack e-commerce platform supporting product management, secure checkout, and admin control."
              ghLink="https://github.com/kamineni51/online--shopping--website"
              demoLink="https://github.com/kamineni51/online--shopping--website"
            />
          </Col>

          {/* Your Project 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={google}
              isBlog={false}
              title="Google-Keep Clone"
              description="A React-based note-taking app that mimics Google Keep. Supports adding, displaying, and deleting notes with a clean UI."
              ghLink="https://github.com/kamineni51/google-keep-clone"
              demoLink="https://github.com/kamineni51/google-keep-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Image classifier using PyTorch and ResNet34 for plant disease detection. Achieved 98% accuracy."
              ghLink="https://github.com/kamineni/plant-ai/"
              demoLink="https://github.com/Chaman-1206/plant-ai/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={temperature}
              isBlog={false}
              title="Temperature Converter"
              description="A simple and interactive web app built using HTML, CSS, and JavaScript to convert temperatures between Fahrenheit and Celsius in real-time. Features include a clean UI, two-way conversion, and instant result updates on input change."
              ghLink="https://github.com/kamineni51/Temperature-Converter"
              demoLink="https://github.com/kamineni51/Temperature-Converter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Homepage"
              description="A pixel-perfect replica of the Netflix landing page using pure HTML and CSS. Features include a responsive layout, background video banner, navbar with dropdown, and modern styling techniques to closely mimic the original UI."
              ghLink="https://github.com/kamineni51/Netfix-Homepage"
              demoLink="https://github.com/kamineni51/Netfix-Homepage"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
