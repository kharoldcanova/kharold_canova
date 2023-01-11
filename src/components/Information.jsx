import { Container, Row , Col} from "react-bootstrap";
import headerImg from "../assets/img/image-astronaut.svg";

export const Information = () => {
  return (
    <section className="information">
      <Container>
        <Row className="justify-content-center align-items-center" >
        <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt="Header img" />
            </Col>
        <Col xs={12} md={6} xl={7}>
            <span className="tagline">
              "Lo mejor que podemos hacer en un mundo lleno de ideas es desarrollarlas"
            </span>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
