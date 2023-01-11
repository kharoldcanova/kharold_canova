import {Col, Row} from "react-bootstrap"

export const HobbiesItem = ({imgURL, description, iconButton, textButton}) => {
  return (
    <div className="hobbie-item">
      <Row>
        <Col>
          <img className="hobbie-img" src={imgURL} alt="Header img" />
        </Col>
        <Col>
          <p>{description}</p>
        </Col>
      </Row>
    </div>
  );
};
