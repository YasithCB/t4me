import React from "react";
import Meta from "../Meta";

const ProductCarousel = ({ product }) => {
  return (
    <>
      <Meta title={"T4Me"} />
      {/* <!-- Carousel wrapper --> */}
      <div
        id="carouselDarkVariant"
        className="carousel slide carousel-dark p-0 m-0 h-50"
        data-mdb-ride="carousel"
        data-mdb-interval="4000"
      >
        {/* <!-- Inner --> */}
        <div className="carousel-inner">
          {/* <!-- Single item --> */}
          <div className="carousel-item active">
            <img
              src={product.imgUrl}
              className="d-block w-100"
              alt="Motorbike Smoke"
            />
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item">
            <img
              src={product.imgUrl}
              className="d-block w-100"
              alt="Mountaintop"
            />
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item">
            <img
              src={product.imgUrl}
              className="d-block w-100"
              alt="Woman Reading a Book"
            />
          </div>
        </div>
        {/* <!-- Inner --> */}

        {/* <!-- Controls --> */}
        <button
          className="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselDarkVariant"
          data-mdb-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-mdb-target="#carouselDarkVariant"
          data-mdb-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <!-- Carousel wrapper -->  */}
    </>
  );
};

export default ProductCarousel;
