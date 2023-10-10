import React from "react";
import Meta from "../components/Meta";
import Carousel from "../components/home/Carousel";
import HotDeals from "../components/home/HotDeals";
import productsList from "../db/products";

const Home = () => {
  return (
    <>
      <Meta title={"T4Me"} />
      <Carousel />
      <HotDeals productsList={productsList} />
    </>
  );
};

export default Home;
