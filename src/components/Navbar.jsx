

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Navigationbar = () => {
  return (
    <Navbar expand="lg" className="scrolled">
      <Container>
        {/* Title */}
        <Navbar.Brand className='icon-text' href="#home">PORTAFOLIO</Navbar.Brand>
        {/* Items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='navbar-link' href="#home">Home</Nav.Link>
            <Nav.Link className='navbar-link' href="#projects">Projectos</Nav.Link>
            <Nav.Link className='navbar-link' href="#aboutme">Sobre mi</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
