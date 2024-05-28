import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import React from 'react'

function Projects() {
   const projects = [
    {
      title: "Elastic Video Analysis Using AWS",
      description: "Created a scalable video analysis app with AWS PaaS, utilizing AWS Lambda, S3, FFmpeg, ResNet-34, and SSD for efficient serverless computing, storage, frame extraction, and precise face recognition.",
      imgUrl: projImg1,
      keywords:["AWS","Lambda","AWS S3","FFMPEG","Backend"],
      gitUrl:""
    },
    {
      title: "Intelligent Farming System",
      description: "Developed an IoT-based Greenhouse Automation System to monitor and control environmental factors in real-time. Created an integrated Android application for seamless monitoring, alerts, and control of critical actions like watering and pest control, enhancing plant care efficiency.",
      imgUrl: projImg2,
      keywords: ["IoT", "Arduino Uno", "Java", "Android","Backend","Frontend"],
      gitUrl:""
    },
    {
      title: "Vehicular Communication Using LI-FI",
      description: "Developed a collision avoidance system using LI-FI technology for vehicular communication, enabling data exchange to prevent accidents. Implemented speed monitoring to ensure the hind vehicle does not surpass the fore vehicle's speed.",
      keywords: ["LI-FI", "vehicular communication", "Java", "Arduino Uno","Backend"],
      imgUrl: projImg3,
      gitUrl:""
    },
    {
      title: "Protfolio Project",
      description: "Developed a collision avoidance system using LI-FI technology for vehicular communication, enabling data exchange to prevent accidents. Implemented speed monitoring to ensure the hind vehicle does not surpass the fore vehicle's speed.",
      keywords: ["LI-FI", "vehicular communication", "Java", "Arduino Uno","Frontend"],
      imgUrl: projImg3,
      gitUrl:""
    }
  ];
  const filterProjects = (keyword) => {
    return projects.filter(project => project.keywords.includes(keyword));
  };

  const backendProjects = filterProjects('Backend');
  const frontendProjects = filterProjects('Frontend');


  return (
    <section className="project"  id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Backend</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">FrontEnd</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          backendProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        } </Row>
                        </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          frontendProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        } </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Projects
