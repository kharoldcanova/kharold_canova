import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="justify-content-center align-items-center" >
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Kharold Canova</span>
            <br />
            <p>
              Mi proposito es desarrollar para solucionar problematicas de
              tematica social. Soy una persona autodidacta, curiosa y
              responsable. Interesado en las tecnologias actuales. Quiero seguir
              aprendiendo conociendo mas del mundo laboral
            </p>
            <span>Puedes conocer mas de mi trabajo en mi repositorio: </span>
            <a href="https://github.com/kharoldcanova?tab=repositories"><button><span>Repositorio de GitHub</span></button></a>
          </Col>
          <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt="Header img" />
            </Col>
        </Row>
      </Container>
    </section>
  );
};
