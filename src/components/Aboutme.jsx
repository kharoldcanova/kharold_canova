import { Col, Row, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { HobbiesCard } from "./HobbiesCard";
import iconMusic from "../assets/img/icons-headphones.png";
import iconMovie from "../assets/img/icons-movie.png";
import iconWrite from "../assets/img/icons-write.png";
import iconIA from "../assets/img/icons-mental.png";

export const Aboutme = () => {

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
        imgURL: iconMusic,
        title: "Escuchar musica",
        description: "Escucho generos variados prefieriendo el rock ademas del lofi",
        textButton: "Ver Spotify"
    },
    {
        imgURL: iconMovie,
        title: "Peliculas de ciencia ficcion",
        description: "Peliculas de viajes en el tiempo o con trasfondo psicologico, tambien me encanta la comedia.",
        textButton: "Ver Peliculas"
    },
    {
        imgURL: iconIA,
        title: "Inteligencia artificial",
        description: "Interes en los ultimos avances de las tecnologias",
        textButton: "Ver Noticias"
    },
    {
        imgURL: iconWrite,
        title: "Escribir relatos",
        description: "Escribir algo de poesia o pensamientos cortos para despejar la mente.",
        textButton: "Ver Relatos"
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
                                <HobbiesCard title={hobbie.title} imgURL={hobbie.imgURL} description={hobbie.description} textButton={hobbie.textButton} key={index}  />
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
