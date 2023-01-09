import { Col, Container, Row } from "react-bootstrap";
import iconoLinkedin from "../assets/img/icon-linkedin.svg";
export const Banner = () =>{
    return (
        <section className="banner">
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <h1 className="title-banner">
                            Kharold Canova
                        </h1>
                        <br />
                        <p>Mi proposito es desarrollar para solucionar problematicas de tematica social. Soy una persona autodidacta, curiosa y responsable. Interesado en las tecnologias actuales. Quiero seguir aprendiendo conociendo mas del mundo laboral</p>
                        <br />
                        <h4>Puedes conocer mas de mi trabajo en: </h4>
                    </Col>
                    <Row xs={5} md={3} xl={4}>
                        <img className="social-icon" src={iconoLinkedin} alt="linkedin"/>
                        <img className="social-icon" src={iconoLinkedin} alt="linkedin"/>
                        <img className="social-icon" src={iconoLinkedin} alt="linkedin"/>
                    </Row>
                </Row>
            </Container>
        </section>
    );
}