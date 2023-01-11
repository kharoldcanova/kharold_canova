import { Col, Container, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = ()=>{

    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
      ];
    
    return (
        <section className="project" id="project">
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
                                                <ProjectCard title={project.title} description={project.description} imgURL={project.imgUrl} key={index}/>
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