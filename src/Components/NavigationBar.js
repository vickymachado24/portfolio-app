import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.svg';
import githubIcon from '../assets/img/github-img.svg';
import linkedInIcon from '../assets/img/linkedin.svg';
import leetcodeIcon from '../assets/img/leetcode-img.svg';


function NavigationBar(){
    
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    
    useEffect ( () =>{
        const onScroll = () =>{
            if( window.scrollY > 50)setScrolled(true);
            else setScrolled(false);
        }
       window.addEventListener('scroll', onScroll);
       
       return () => window.removeEventListener('scroll', onScroll);
    },[]);

    const onClickUpdateAtiveLink = (linkName) =>{
        setActiveLink(linkName);
    }

    return (
        <Navbar expand="lg" className={scrolled? 'scrolled':''}>
          <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt='logo'></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link href="#home" className={activeLink === 'home' ? ' active navbar-link':'navbar-link'} onClick={() => onClickUpdateAtiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link':'navbar-link'} onClick={() => onClickUpdateAtiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active  navbar-link':'navbar-link'} onClick={() => onClickUpdateAtiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="#education" className={activeLink === 'education' ? 'active navbar-link':'navbar-link'} onClick={() => onClickUpdateAtiveLink('education')}>Education</Nav.Link>
                <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link':'navbar-link'} onClick={() => onClickUpdateAtiveLink('experience')}>Experience</Nav.Link>
                <Nav.Link href="#resume" className={activeLink === 'resume' ? 'active navbar-link':'navbar-link'} onClick={() => onClickUpdateAtiveLink('resume')}>Resume</Nav.Link>
              </Nav>
              <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='https://www.linkedin.com/in/vickymac24/'> <img src={linkedInIcon} alt='LinkedIn'></img></a>
                    <a href='https://leetcode.com/u/Vicky2406/'> <img src={leetcodeIcon} alt='LeetCode'></img></a>
                    <a href='https://github.com/vickymachado24'> <img src={githubIcon} alt='GitHub'></img></a>
                </div>
                <button className='vvm' onClick={ () =>{
                    console.log('Connect')
                }}>
                    <span> Let's Connect</span>
                </button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavigationBar
