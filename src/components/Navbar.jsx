import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import iconLinkedin from "../assets/img/icon-linkedin.svg";
import iconNotion from "../assets/img/icon-notion.svg";
import iconGitHub from "../assets/img/icon-github.svg";

export const Navigationbar = () => {
  return (
    <Navbar expand="lg" className="scrolled">
      <Container>
        {/* Title */}
        <Navbar.Brand href="/" className="icon-text">
          PORTAFOLIO
        </Navbar.Brand >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navbar-link" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="navbar-link" href="#projects">
              Projectos
            </Nav.Link>
            <Nav.Link className="navbar-link" href="#aboutme">
              Sobre mi
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
          <div className="social-icon">
            <a href="">
              <img src={iconLinkedin} alt="" />
            </a>
            <a href="">
              <img src={iconNotion} alt="" />
            </a>
            <a href="">
              <img src={iconGitHub} alt="" />
            </a>
          </div>
          <button className="vvd" onClick={() => console.log("connected")}>
              <span>Contactame</span>
            </button>
        </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
