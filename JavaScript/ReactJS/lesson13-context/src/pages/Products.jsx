import React, { useContext, useEffect } from "react";
import { Row } from "react-bootstrap";
import { ProductContext } from "../context/ProductContext";
import SingleCard from "../components/SingleCard";

const Products = () => {
  const [product] = useContext(ProductContext);

  return (
    <>
      <h1 className="text-center my-5">All Products </h1>
      <Row className="g-5">
        {product.map((item) => (
          <SingleCard
            title={item.title}
            key={item.id}
            desc={item.description}
            photo={item.image}
          />
        ))}
      </Row>
    </>
  );
};

export default Products;
