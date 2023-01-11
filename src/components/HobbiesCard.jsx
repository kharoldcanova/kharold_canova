import { Button, Card, Container } from "react-bootstrap";

export const HobbiesCard = ({ title, imgURL, description, textButton }) => {
  return (
    <div className="item">
      <Card  classname="hobbie-card">
        <Card.Body>
          <Card.Title className="title-card">{title}</Card.Title>
          <Card.Img className="img-card" src={imgURL} />
          <Card.Text className="text-card">{description}</Card.Text>
          <Button className="button-card">{textButton}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
