import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const SingleCard = ({photo,title,desc,price,id}) => {
  return (
    <Col sm={6} md={4}>
      <Card>
        <Card.Img height={300} variant="top" src={photo} />
        <Card.Body>
          <Card.Title>{title.substring(0,30)}</Card.Title>
          <Card.Text>
           {desc.substring(0,30)}...
          </Card.Text>
          <Card.Text>
           {price}$
          </Card.Text>
          <LinkContainer to={`/details/${id}`}><Button variant="primary">Read more</Button></LinkContainer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleCard;
