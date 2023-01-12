import { Col, Container, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";

export const Projects = ()=>{

    const projects = [
        {
          title: "Lista de Tareas",
          description: "Desarrollo con React",
          imgUrl: projImg1,
          link: ""
        },
        {
          title: "Portafolio responsivo",
          description: "Desarrollo con Flutter",
          imgUrl: projImg2,
          link: ""
        },
        {
          title: "API",
          description: "Manipulacion del DOM con JavaScript",
          imgUrl: projImg3,
          link: ""
        },
        {
          title: "Asistente de Voz",
          description: "Desarrollo con Python",
          imgUrl: projImg4,
          link: ""
        },
        {
          title: "Edicion de imagenes",
          description: "Desarrollo con Python",
          imgUrl: projImg5,
          link: ""
        },
        {
          title: "Traductor basico",
          description: "Desarrollo con Python",
          imgUrl: projImg6,
          link: ""
        },
      ];
    
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Proyectos</h2>
                        <p>Algunos de los proyectos que he desarrollado son:</p>
                        <Container>
                            <Row>
                                {
                                    projects.map(
                                        (project, index)=>{
                                            return (
                                                <ProjectCard title={project.title} description={project.description} imgURL={project.imgUrl} link={project.link} key={index}/>
                                            )
                                        }
                                    )
                                }
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}