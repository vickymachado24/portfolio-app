import { Container, Row, Col } from "react-bootstrap";
import leetcodeIcon from "../assets/img/leetcode-img.svg";
import linkedInIcon from "../assets/img/linkedin.svg";
import githubIcon from "../assets/img/github-img.svg";

const Footer = () => {
  return (
    <section id="footer">
    <footer className="footer">
      <Container>
        <Row className="align-items-center text-sm-right">
          <Col size={12} sm={6}>
          <Container>
            <Row>
            <Col><a href="tel:+{16232838579}">
                <p classname='underline-content' >+1 (602) 574-3389</p>
                <p> Call</p>
                </a>
            </Col><Col>
            <a href="mailto:machadovicky24@gmail.com">
                <p classname='underline-content'>machadovicky24@gmail.com</p>
                <p> Mail</p>
            </a>
            </Col>
            </Row>
            </Container>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-left">
            <div className="social-icon">
            <a href='https://www.linkedin.com/in/vickymac24/'> <img src={linkedInIcon} alt='LinkedIn'></img></a>
              <a href='https://leetcode.com/u/Vicky2406/'> <img src={leetcodeIcon} alt='LeetCode'></img></a>
              <a href='https://github.com/vickymachado24'> <img src={githubIcon} alt='GitHub'></img></a>
            </div>
            <p>© 2024 by Vicky Venil Machado </p>
          </Col>
        </Row>
      </Container>
    </footer>
    </section>)
}
export default Footer;