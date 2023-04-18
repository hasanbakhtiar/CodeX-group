import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useCart } from "react-use-cart";

const SingleCart = ({photo,title,desc,id,price,alldata}) => {
    const { addItem } = useCart();
  return (
    <Col sm={6} md={4}>
      <Card>
        <Card.Img height={300} variant="top" src={photo} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc.substring(0,30)}...</Card.Text>
          <Card.Text>{price.toFixed()} $</Card.Text>
          <Button variant="primary me-3">Read more</Button>
          <Button onClick={()=>{addItem(alldata)}} variant="warning ">Add to cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleCart;
