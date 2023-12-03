import React, { useState, useEffect } from "react";

import "../../style/CarouselNew.css";
import "../../style/CarouselMidCard.css";

const CarouselNew = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState("25%");
  const [opacity, setOpacity] = useState(1);

  const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

  const cards = [
    {
      imgUrl: "/images/printed/0009.jpg",
      title: "Printed T-shirts",
      body: "Printed T-shirts showcase individual style with vibrant designs and messages, making them a popular and expressive fashion choice",
    },
    {
      imgUrl: "/images/printed/0018.jpg",
      title: "Printed T-shirts 2",
      body: "2 Printed T-shirts showcase individual style with vibrant designs and messages, making them a popular and expressive fashion choice",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setWidth("0%");
      setOpacity(0);
    }, 5000);

    return () => clearInterval(interval);
  }, [cards.length, images.length]);

  const handleTransitionEnd = () => {
    // Set the width to 25% immediately after the transition ends
    setWidth("25%");
    setOpacity(1);
  };

  return (
    <>
      <div className="row carousel-container">
        <div className="col-3 left-col"></div>

        <div
          className="mid-card-container"
          style={{ width, opacity }}
          onTransitionEnd={handleTransitionEnd}>
          {cards.map((card, index) => (
            <div
              className={`mid-card ${
                index === currentCard ? "active" : "hidden"
              }`}
              key={index}>
              <div className="image-container">
                <img src={card.imgUrl} alt="#" />
              </div>
              <div className="description">
                <p>{card.title}</p>
                <p>{card.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="col-9 right-col"
          style={{
            backgroundImage: `url("/images/carousel/${images[currentIndex]}")`,
            
          }}>
          <div className="large-title">
            <h1>THE STUDIO OF</h1>
            <h1>T-SHIRTS</h1>
            <p>The Largest T-shirt Collection in Sri Lanka</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselNew;
