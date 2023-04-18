import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import SingleCart from "../components/SingleCart";
import { ProductContext } from "../context/ProductContext";

const Products = () => {
  const [product] = useContext(ProductContext);

  return (
    <>
      <h1 className="text-center my-5">Products</h1>
      <Row className="g-5">
        {product.map((item) => (
          <SingleCart
            photo={item.image}
            title={item.title}
            desc={item.description}
            id={item.id}
            price={item.price}
            key={item.id}
            alldata = {item}
          />
        ))}
      </Row>
    </>
  );
};

export default Products;
