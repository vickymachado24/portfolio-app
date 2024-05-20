import React,{useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImage from "../assets/img/header-img.svg";

function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const[isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const period = 2000;
    const toRotate = ['Software Developer', 'Software Engineer','Full Stack Developer'];
    const [delta, setDelta] = useState(300 - Math.random()*100);
    useEffect(() =>{
        let ticker = setInterval( ()=>{
            tick()
        },delta)

        return ()=> {clearInterval( ticker)};
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring( 0, text.length +1);
        setText(updatedText);
        if( isDeleting){
            setDelta(prevDelta => prevDelta/2);
        }

        if( !isDeleting  && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting  && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(500);
        }
    }
  return (
    <section className='banner'  id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                <span className='tagline'> Hey! Vicky Machado here. </span>
                <h1> {`I'm a`}<span className='wrap'> {text}</span></h1>
                <p>I'm a passionate Software Developer with 4 years of experience and an enthusiastic learner always on the lookout for new challenges. Currently a student, I'm eager to deepen my skills, innovate, and push my limits. When I'm not coding, you'll find me immersed in anime, battling it out in COD, or shooting hoops on the basketball court. Let's create something amazing together!</p>
                <button onClick={()=>{console.log('connect')}}> Let's Connect <ArrowRightCircle size={25}/></button>
                </Col>
                <Col  xs={12} md={6} xl={5}>
                    <img src={headerImage} alt='Header Img'></img>
                </Col>
            </Row>
        </Container>
    </section>  
  )
}

export default Banner
