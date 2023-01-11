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
        textButton: "Ver Spotify",
        link: "https://open.spotify.com/playlist/37i9dQZF1EuI548Sqd104M?si=4c16bd87275b4bf6"
    },
    {
        imgURL: iconMovie,
        title: "Peliculas de ciencia ficcion",
        description: "Peliculas de viajes en el tiempo o con trasfondo psicologico, tambien me encanta la comedia.",
        textButton: "Ver Peliculas",
        link: "https://www.espinof.com/criticas/predestination-alucinante-pelicula-viajes-tiempo-netflix-capaz-sorprender-al-espectador-avispado"
    },
    {
        imgURL: iconIA,
        title: "Inteligencia artificial",
        description: "Interes en los ultimos avances de las tecnologias",
        textButton: "Ver Noticias",
        link: "https://www.bbc.com/mundo/topics/cwr9j26ddr5t"
    },
    {
        imgURL: iconWrite,
        title: "Escribir relatos",
        description: "Escribir algo de poesia o pensamientos cortos para despejar la mente.",
        textButton: "Ver Relatos",
        link: "https://flicker-jitterbug-7ba.notion.site/Relatos-cortos-ccde4d3e3e074b7aa6a5164527f71602"
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
                                <HobbiesCard title={hobbie.title} imgURL={hobbie.imgURL} description={hobbie.description} textButton={hobbie.textButton} link={hobbie.link} key={index}  />
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
