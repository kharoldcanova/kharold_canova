import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import iconhtml from "../assets/img/icon-html.svg";
import iconDart from "../assets/img/icon8-dart.svg";
import iconPython from "../assets/img/icon-python.svg";


export const Skills =  ()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <section className="skill" id="skills">
            <Container>
            <Row>
                <Col>
                <div className="skill-bx">
                    <h2>
                        Skills
                    </h2>
                    <p>
                        Habilidades basicas en programacion de lenguajes como...
                    </p>
                    <Carousel responsive={responsive} infinite={true} className="skills-slider">
                        <div className="item">
                            <img src={iconhtml} alt="Image" />
                            <h5>Desarrollador Web</h5>
                        </div>
                        <div className="item">
                            <img src={iconDart} alt="Image" />
                            <h5>Desarrollador Web</h5>
                        </div>
                        <div className="item">
                            <img src={iconPython} alt="Image" />
                            <h5>Desarrollador Web</h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
           </Container>
        </section>
    );
}