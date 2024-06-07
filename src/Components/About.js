import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import EducationCard from './EducationCard';
import ExperienceCard from './ExperienceCard';
import educationImg from '../assets/img/education.png';
import experienceImg from '../assets/img/experience.png';

function About() {
  const educationList = [{
    institutionName :"ASU School of Computing, Informatics, and Decision Systems Engineering",
    university :"Arizona State University",
    location:"Tempe, Arizona, USA",
    status:"Ongoing",
    gpaScale:"4.0",
    gpaSecured:"3.58",
    joining:"07/2023",
    leaving:"Present"
  },{
    institutionName :" Bangalore Institute of Technology",
    university :"Visvesvaraya Technological University",
    location:"Bangalore, Karnataka, India",
    status:"Gradauted",
    gpaScale:"10.0",
    gpaSecured:"8.43",
    joining:"07/2015",
    leaving:"06/2019"
  }]

  const experienceList = [{
    company :"Oracle Financial Services Software Ltd.",
    location:"Bangalore, Karnataka, India",
    ongoing: false,
    title:"Software Developer 2",
    joining:"07/2022",
    leaving:"06/2023"
  },{
    company :"HSBC Software Development India",
    location:"Pune, Maharashtra, India",
    ongoing: false,
    title:"Senior Software Engineer",
    joining:"04/2022",
    leaving:"07/2022"
  },{
    company :"Oracle Financial Services Software Ltd.",
    location:"Pune, Maharashtra, India",
    ongoing: false,
    title:"Software Engineer",
    joining:"07/2019",
    leaving:"03/2022"
  },{
    company :"B.S.N.L.",
    location:"Bangalore, Karnataka, India",
    ongoing: false,
    title:"Intern",
    joining:"08/2018",
    leaving:"09/2018"
  }]
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1, partialVisibilityGutter: 0
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1, partialVisibilityGutter: 0
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1, partialVisibilityGutter: 0
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, partialVisibilityGutter: 0
    }
  };
  return (
    <section className="section-about" id='about'>
      <div className='about-me'>
        <div className='container about-bx wow zoomIn'>
          <h2>About Me</h2>
          <Container className='about-container'>
            <Row className='education-row'>
              <Col className='about-col' xs="auto" md={6} l={6} xl={6}>
                <h3>Experience</h3> 
                <p>
                  I have previously worked as a Senior Software Engineer, leading the development of key projects and optimizing complex systems. With a rich technical background in designing and deploying microservices architectures, developing RESTful APIs, and automating processes, I am grateful for the diverse experiences and challenges that have shaped my expertise and problem-solving skills.
                </p>
                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme about-slider" containerClass="carousel-container">
                  {
                    experienceList.map((experience, index) => { return (<ExperienceCard key={index} {...experience} />) })
                  }
                </Carousel>
              </Col>
              <Col className='about-col' xs="auto" md={6} l={6} xl={6}>
                <img src={experienceImg} alt='Experience'></img>
              </Col>
            </Row>
            <Row>
              <Col className='about-col' xs="auto" md={6} l={6} xl={6}>
                <img src={educationImg} alt='Education'></img>
              </Col>
              <Col xs="auto" md={6} l={6} xl={6}>
                <h3>Education</h3> 
                <p>
                  I am currently pursuing a Master of Computer Science with coursework in Cloud Computing, Multimedia and Web Databases, Software Design, and Software Security. I also hold a Bachelor of Engineering in Electronics and Communications with a focus on Data Structures and Algorithms, Operating Systems, and Application Programming. I am grateful for the rigorous academic foundation and the opportunities to delve into advanced technical subjects, which have significantly enhanced my analytical and problem-solving abilities.
                </p>
                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme about-slider" containerClass="carousel-container">
                  {
                    educationList.map((education, index) => { return (<EducationCard key={index} {...education} />) })
                  }
                </Carousel>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
}

export default About;
