import React from "react";
import Meta from "../components/Meta";
// import Carousel from "../components/home/Carousel";
import ProductList from "../components/ProductList";
import topProductsList from "../db/topProducts";
import CarouselNew from "../components/home/CarouselNew";

const Home = () => {
  return (
    <>
      <Meta title={"T4Me"} />
      {/* <Carousel /> */}
      <CarouselNew />
      <h4 className="my-5 text-center">
        <strong>Hot Deals!</strong>
      </h4>
      <ProductList productsList={topProductsList} />
    </>
  );
};

export default Home;
