import React from "react";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import Heading3 from "../components/Heading3";

const Home = () => {
  return (
    <>
      <Meta title={"T4Me"} />

      <section className="home-wrapper-1 py-5">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="\images\rib-tshirt\IMG_2528.jpg"
                  className="img-fluid rouded-3"
                  alt="main-banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>Rib T-shirts</h4>
                  <p>From 990LKR</p>
                  <Link className="btn-blue link">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between gap-10 align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="\images\plain-tshirt\DSC_0011.jpg"
                    className="img-fluid rouded-3"
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>100% Cotton White</h4>
                    <p>From 990LKR</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="\images\plain-tshirt\DSC_0050.jpg"
                    className="img-fluid rouded-3"
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>100% Cotton Black</h4>
                    <p>From 990LKR</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="\images\plain-tshirt\DSC_0033.jpg"
                    className="img-fluid rouded-3"
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>100% Cotton Gray</h4>
                    <p>From 990LKR</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="\images\plain-tshirt\DSC_0024.jpg"
                    className="img-fluid rouded-3"
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>100% Cotton Pink</h4>
                    <p>From 990LKR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="productList-wrapper">
        <div className="container my-5">
          <Heading3 text="Featured Collection" />
          <div className="row">
            <ProductList
              img="..\images\printed-tshirts\d1.png"
              heading="Freedom"
              category="Printed T-shirts"
              oldPrice="1690LKR"
              newPrice="1350LKR"
              stock="10"
            />
            <ProductList
              img="images\printed-tshirts\d2.jpg"
              heading="Freedom"
              category="Printed T-shirts"
              oldPrice="1690LKR"
              newPrice="1350LKR"
              stock="10"
            />
            <ProductList
              img="..\images\printed-tshirts\d3.jpg"
              heading="Freedom"
              category="Printed T-shirts"
              oldPrice="1690LKR"
              newPrice="1350LKR"
              stock="10"
            />
            <ProductList
              img="..\images\printed-tshirts\d4.jpg"
              heading="Freedom"
              category="Printed T-shirts"
              oldPrice="1690LKR"
              newPrice="1350LKR"
              stock="10"
            />
            <ProductList
              img="..\images\printed-tshirts\d5.jpg"
              heading="Freedom"
              category="Printed T-shirts"
              oldPrice="1690LKR"
              newPrice="1350LKR"
              stock="10"
            />
            <ProductList
              img="..\images\printed-tshirts\d6.jpg"
              heading="Freedom"
              category="Printed T-shirts"
              oldPrice="1690LKR"
              newPrice="1350LKR"
              stock="10"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
