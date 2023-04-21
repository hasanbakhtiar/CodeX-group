import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";

const SingleCart = ({ photo, title, desc, id, price, alldata }) => {
  const { addItem } = useCart();
  const notify = () => toast.success('Product added to cart!', {
    position: "bottom-right",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
  return (
    <Col sm={6} md={4}>
      <Card>
        <Card.Img height={300} variant="top" src={photo} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc.substring(0, 30)}...</Card.Text>
          <Card.Text>{price.toFixed()} $</Card.Text>
          <LinkContainer to={`/products/${id}`}>
            <Button variant="primary me-3">Read more</Button>
          </LinkContainer>
          <Button
            onClick={() => {
              notify(addItem(alldata));
            }}
            variant="warning "
          >
            Add to cart
          </Button>
          <ToastContainer
            position="bottom-right"
            autoClose={500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleCart;
