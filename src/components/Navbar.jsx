import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import iconLinkedin from "../assets/img/nav-icon1.svg";
import iconFacebook from "../assets/img/nav-icon2.svg";
import iconInstagram from "../assets/img/nav-icon3.svg";

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
              Proyectos
            </Nav.Link>
            <Nav.Link className="navbar-link" href="#aboutme">
              Sobre mi
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/kharoldcanova/">
              <img src={iconLinkedin} alt="" />
            </a>
            <a href="https://www.facebook.com/kharold.canova.7">
              <img src={iconFacebook} alt="" />
            </a>
            <a href="">
              <img src={iconInstagram} alt="" />
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
