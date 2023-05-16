import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';

const SingleCard=({photo,title,desc,id})=> {
  return (
   <Col sm={6} md={4}>
    <Card >
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {desc.substring(0,60)}...
        </Card.Text>
       <LinkContainer to={`/blogs/${id}`}>
       <Button variant="primary">Read more</Button>
       </LinkContainer>
      </Card.Body>
    </Card>
   </Col>
  );
}

export default SingleCard