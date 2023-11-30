import React from "react";
import "../../style/CarouselNew.css";

const CarouselNew = () => {
  return (
    <>
      <div className="row carousel-container">
        <div className="col-3 left-col"></div>

        <div className="mid-card">
          <div className="image-container">
            <img src="/images/printed/0009.jpg" alt="#" />
          </div>
          <div className="description">
            <p>Printed T-shirts</p>
            <p>
              Printed T-shirts showcase individual style with vibrant designs
              and messages, making them a popular and expressive fashion choice.
            </p>
          </div>
        </div>

        <div className="col-9 right-col">
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
