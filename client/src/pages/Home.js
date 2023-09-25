import React from "react";
import Meta from "../components/Meta";
import Carousel from "../components/home/Carousel";
import HotDeals from "../components/home/HotDeals";

const Home = () => {
  const productsList = [
    {
      sku: "0009",
      name: "Peach Goma",
      desc: "The latest iPhone from Apple.",
      category: "Printed",
      imgUrl: "/images/printed/0009.jpg",
      price: 1390,
    },
    {
      sku: "0018",
      name: "Peach Goma",
      desc: "The latest Samsung Galaxy smartphone.",
      category: "Printed",
      imgUrl: "/images/printed/0018.jpg",
      price: 1490,
    },
    {
      sku: "0011",
      name: "Jack Daniel's",
      desc: "",
      category: "Printed",
      imgUrl: "/images/printed/0011.jpg",
      price: 1690,
    },
    {
      sku: "0017",
      name: "Peach Goma",
      desc: "",
      category: "Printed",
      imgUrl: "/images/printed/0017.jpg",
      price: 1390,
    },
    {
      sku: "0019",
      name: "Peach Goma",
      desc: "",
      category: "Printed",
      imgUrl: "/images/printed/0019.jpg",
      price: 1390,
    },
    {
      sku: "0024",
      name: "White Heart",
      desc: "",
      category: "Printed",
      imgUrl: "/images/printed/0024.jpg",
      price: 1490,
    },
    {
      sku: "0026",
      name: "Peach Goma",
      desc: "",
      category: "Printed",
      imgUrl: "/images/printed/0026.jpg",
      price: 1590,
    },
    {
      sku: "0028",
      name: "White Flower",
      desc: "",
      category: "Printed",
      imgUrl: "/images/printed/0028.jpg",
      price: 1390,
    },
    {
      sku: "0032",
      name: "Sun & Moon",
      desc: "",
      category: "Printed Couple",
      imgUrl: "/images/printed/0032.jpg",
      price: 1590,
    },
    {
      sku: "0034",
      name: "BTS",
      desc: "",
      category: "Printed",
      imgUrl: "/images/printed/0034.jpg",
      price: 1490,
    },
    {
      sku: "0035",
      name: "Sunflower",
      desc: "",
      category: "Printed",
      imgUrl: "/images/printed/0035.jpg",
      price: 1590,
    },
    {
      sku: "0042",
      name: "King Cat",
      desc: "",
      category: "Printed",
      imgUrl: "/images/printed/0042.jpg",
      price: 1990,
    },
    {
      sku: "0043",
      name: "Elephant",
      desc: "",
      category: "Printed",
      imgUrl: "/images/printed/0043.jpg",
      price: 1590,
    },
  ];

  return (
    <>
      <Meta title={"T4Me"} />
      <Carousel />
      <HotDeals productsList={productsList} />
    </>
  );
};

export default Home;
