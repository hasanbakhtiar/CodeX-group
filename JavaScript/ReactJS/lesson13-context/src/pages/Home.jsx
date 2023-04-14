import React, { useContext } from "react";
import SingleCard from "../components/SingleCard";
import { ProductContext } from "../context/ProductContext";
import { Carousel } from "react-bootstrap";

const Home = () => {
  const [product] = useContext(ProductContext);

  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">Best Shop</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Get shop
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-center my-5">Bestseller products</h2>

      <Carousel
  cols={3}
  containerStyle={{ maxWidth: '1300px', margin: '0 auto' }}
>
  {product.map((item, i) => (
    <Carousel.Item key={i}>
           <SingleCard
            title={item.title}
            key={item.id}
            desc={item.description}
            photo={item.image}
          />
    </Carousel.Item>
  ))}
</Carousel>
    
    </>
  );
};

export default Home;
