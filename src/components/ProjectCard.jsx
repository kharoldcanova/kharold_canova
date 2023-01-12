import { Col } from "react-bootstrap";

export const ProjectCard = ({title, imgURL, description, link})=>{
    return (
        <Col sm={6} md={4}>
        <div className="proj-imgbx">
          <a href={link} > <img src={imgURL} alt="" /></a>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>
    );
}