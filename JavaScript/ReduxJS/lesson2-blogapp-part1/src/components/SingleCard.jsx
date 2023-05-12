import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SingleCard=({photo,title,desc})=> {
  return (
   <Col sm={6} md={4}>
    <Card >
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {desc.substring(0,60)}...
        </Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
   </Col>
  );
}

export default SingleCard