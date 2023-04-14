import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const SingleCard = ({title,desc,photo}) => {
  return (
        
      <Card>
        <Card.Img height={300} variant="top" src={photo} />
        <Card.Body>
          <Card.Title>{title.substring(0,10)}</Card.Title>
          <Card.Text>
            {desc.substring(0,30)}...
          </Card.Text>
          <Button variant="primary">Read more</Button>
        </Card.Body>
      </Card>
  );
};

export default SingleCard;
