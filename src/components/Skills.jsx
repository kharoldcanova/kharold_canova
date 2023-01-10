import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import iconHTML from "../assets/img/icon-html.svg";
import iconDart from "../assets/img/icon8-dart.svg";
import iconPython from "../assets/img/icon-python.svg";
import iconCSS from "../assets/img//icon-css.svg";
import iconJavascript from "../assets/img//icon-javascript.svg";
import iconFlutter from "../assets/img/icon-flutter.svg";

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
                    <h3>
                       Lenguajes de programacion
                    </h3>
                    <br />
                    <p>
                        Conocimientos basicos en lenguajes como:
                    </p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                            <img src={iconHTML} alt="Image" />
                            <h5>Desarrollador Web</h5>
                        </div>
                        <div className="item">
                            <img src={iconPython} alt="Image" />
                            <h5>Desarrollador Python</h5>
                        </div>
                        <div className="item">
                            <img src={iconCSS} alt="Image" />
                            <h5>Hojas de estilo</h5>
                        </div>
                        <div className="item">
                            <img src={iconJavascript} alt="Image" />
                            <h5>Manipular el DOM</h5>
                        </div>
                        <div className="item">
                            <img src={iconFlutter} alt="Image" />
                            <h5>Desarrollo movil</h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
           </Container>
        </section>
    );
}