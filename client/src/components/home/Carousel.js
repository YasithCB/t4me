import React from "react";
import Meta from "../Meta";

const Carousel = () => {
  return (
    <>
      <Meta title={"T4Me"} />
      {/* <!-- Carousel wrapper --> */}
      <div
        className="carousel slide carousel-fade carousel-dark"
        data-mdb-ride="carousel"
        data-mdb-interval="4000"
      >
        {/* <!-- Indicators - Hidden on mobile screens --> */}
        <div className="carousel-indicators">
          <button
            data-mdb-target="#carouselDarkVariant"
            data-mdb-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            data-mdb-target="#carouselDarkVariant"
            data-mdb-slide-to="1"
            aria-label="Slide 1"
          ></button>
          <button
            data-mdb-target="#carouselDarkVariant"
            data-mdb-slide-to="2"
            aria-label="Slide 1"
          ></button>
        </div>

        {/* <!-- Inner --> */}
        <div className="carousel-inner">
          {/* <!-- Single item --> */}
          <div className="carousel-item active">
            <img
              src="/images/carousel/img1.jpg"
              className="d-block w-100"
              alt="Motorbike Smoke"
            />
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item">
            <img
              src="/images/carousel/img2.jpg"
              className="d-block w-100"
              alt="Mountaintop"
            />
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item">
            <img
              src="/images/carousel/img3.jpg"
              className="d-block w-100"
              alt="Woman Reading a Book"
            />
          </div>
        </div>
        {/* <!-- Inner --> */}

        {/* <!-- Controls --> */}
        <button
          className="carousel-control-prev d-none d-md-flex"
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
          className="carousel-control-next d-none d-md-flex"
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

export default Carousel;
