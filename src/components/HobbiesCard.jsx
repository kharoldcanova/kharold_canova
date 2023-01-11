import { Button, Card, Container } from "react-bootstrap";

export const HobbiesCard = ({ title, imgURL, description, textButton, link }) => {
  return (
    <div className="item">
      <h2 className="title-card">{title}</h2>
      <img className="img-card" src={imgURL} />
      <p className="text-card">{description}</p>
      <a href={link}>
        <Button variant="success" className="button-card">
          {textButton}
        </Button>
      </a>
    </div>
  );
};
