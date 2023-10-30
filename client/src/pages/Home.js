import React from "react";
import Meta from "../components/Meta";
import Carousel from "../components/home/Carousel";
import productsList from "../db/products";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <>
      <Meta title={"T4Me"} />
      <Carousel />
      <h4 className="my-5 text-center">
        <strong>Hot Deals!</strong>
      </h4>
      <ProductList productsList={productsList} />
    </>
  );
};

export default Home;
