import { Col, Row, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import headerImg from "../assets/img/header-img.svg";
import { HobbiesItem } from "./Hobbies";

export const Aboutme = () => {

    // Carrousel
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  //Hobbies
  const hobbies = [
    {
        imgURL: headerImg,
        description: "Me encanta escuchar rock alternativo",
    },
    {
        imgURL: headerImg,
        description: "Peliculas de ciencia ficcion",
    },
    {
        imgURL: headerImg,
        description: "Inteligencia artificial",
    },
    {
        imgURL: headerImg,
        description: "Escribir relatos ademas de un poco de poesia",
    }
  ];
  return (
    <section className="aboutme" id="aboutme">
      <Container>
        <Row>
          <Col>
            <div className="hobbie-bx">
              <h3>Sobre mi</h3>
              <br />
              <p>Una persona con muchos sueños ademas de aficiones:</p>
              <Carousel responsive={responsive} infinite={true} className="hobbie-slider">
                {
                    hobbies.map(
                        (hobbie, index)=>{
                            return (
                                <HobbiesItem imgURL={hobbie.imgURL} description={hobbie.description} key={index}  />
                            )
                        }
                    )
                }
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
