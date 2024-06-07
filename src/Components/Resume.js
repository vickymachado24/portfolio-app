import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import resumePdf from '../assets/img/Vicky Machado Resume.pdf'

function Resume() {
  const [viewText, setViewText] = useState('View Resume?');
  const [downloadText, setDownloadText] = useState('Save Resume?');

  const handleViewMouseEnter = () => setViewText('Click to View');
  const handleViewMouseLeave = () => setViewText('View Resume?');
  
  const handleDownloadMouseEnter = () => setDownloadText('Click to Save');
  const handleDownloadMouseLeave = () => setDownloadText('Save Resume?');

  return (
    <section className="resume" id="resume">
      <Container>
        <Row>
          <Col size={12} sm={12} className="text-center">
            <h2>Resume</h2>
          </Col>
        </Row>
        <Row className="align-items-center text-sm-center">
          <Col size={12} sm={6} className='d-flex justify-content-center mb-3 '>
            <a 
              href={resumePdf} 
              target="_blank" 
              rel="noopener noreferrer"
              className='vvm'
              onMouseEnter={handleViewMouseEnter}
              onMouseLeave={handleViewMouseLeave}
            >
              <span>{viewText}</span>
            </a>
          </Col>
          <Col size={12} sm={6} className='d-flex justify-content-center mb-3 '>
            <a 
              href={resumePdf} 
              download 
              className='vvm'
              onMouseEnter={handleDownloadMouseEnter}
              onMouseLeave={handleDownloadMouseLeave}
            >
              <span>{downloadText}</span>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Resume;