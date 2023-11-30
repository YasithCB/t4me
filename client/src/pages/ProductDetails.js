import React, { useState } from "react";
import { useParams } from "react-router-dom";
import RoundButton from "../components/RoundButton";
import allProductsList from "../db/allProducts";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = allProductsList.find((item) => item.sku === productId);

  // States for selected color and size
  const [selectedColor, setSelectedColor] = useState("White");
  const [selectedSize, setSelectedSize] = useState("M");

  const onSelectSize = (size) => {
    setSelectedSize(size);
  };

  const onSelectColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <>
      <div className="product-details container my-4">
        <div className="row">
          <div className="col-12 col-md-7">
            <div className="row g-2 mb-2">
              <div className="col-12">
                <img src={product.imgUrl[0]} className="img-fluid" alt="" />
              </div>
            </div>
            {/* Assuming 'product' is your object containing the 'imgUrl' array */}
            <div className="row g-2">
              {console.log(product)}
              {product.imgUrl.slice(1).map((url, index) => (
                <div className="col-6" key={index}>
                  <img
                    src={url}
                    className="img-fluid"
                    alt={`Product Preview ${index + 2}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-md-5 mt-3 text-center">
            <p className="product-name">{product.name}</p>
            <p className="medium-text">{product.price}.00 LKR</p>

            <div className="size-color-container row justify-content-center">
              <div className="size-container col-5 col-md-12">
                <p className="small-text mt-3 text-center">Size</p>
                <RoundButton
                  text="M"
                  onClick={() => onSelectSize("M")}
                  isSelected={selectedSize === "M"}
                />
                <RoundButton
                  text="L"
                  onClick={() => onSelectSize("L")}
                  isSelected={selectedSize === "L"}
                />
              </div>

              <div className="colorContainer col-5 col-md-12">
                <p className="small-text mt-3 text-center">Color</p>
                <RoundButton
                  text="White"
                  onClick={() => onSelectColor("White")}
                  isSelected={selectedColor === "White"}
                />
                <RoundButton
                  text="Black"
                  onClick={() => onSelectColor("Black")}
                  isSelected={selectedColor === "Black"}
                />
              </div>
            </div>

            <div className="my-3">
              <p className="grey-text medium-text">{product.category}</p>
              <p className="grey-text medium-text">SKU : {product.sku}</p>
              <p className="grey-text medium-text">Price : {product.price}</p>
            </div>

            {/* buy now */}
            <div className="buy-now-container">
              <p>
                <button
                  className="btn btn-dark px-5 my-3 round-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample">
                  Buy Now
                </button>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body ">
                  <p className="buy-now-text">
                    Material: 100% COTTON
                    <br />
                    Island wide fast delivery ❗️
                    <br />
                    <br />
                    MEDIUM : Height 25" | chest 19" | shoulders 17" | sleeves 8"
                    <br />
                    LARGE : Height 27" | chest 20" | shoulders 18" | sleeves
                    8.5"
                    <br />
                    <br />
                    Collar Type : O-Neck
                    <br />
                    Sleeves : Short Sleeve
                    <br />
                    Clothing Material : Cotton
                    <br />
                    Clothing Style : Youthful T-shirt
                    <br />
                    Washable Type : Hand wash recommended
                    <br />
                  </p>
                  <br />
                  <p className="buy-now-text">
                    Cash on delivery charges
                    <br />
                    1️⃣T-shirt - 360/=
                    <br />
                    2️⃣T-shirts - 450/=
                    <br />
                    3️⃣T-shirts - 490/=
                    <br />
                    4️⃣T-shirts - 550/=
                  </p>
                  <br />
                  <hr />
                  <br />
                  <p className="buy-now-text mb-2">
                    If you need to place an order, send the following details:
                    <br />
                    🔗 Your Name
                    <br />
                    🔗 Your address (as you receive post mails)
                    <br />
                    🔗 Mobile numbers (recommended to give 2 numbers)
                    <br />
                    🔗 Product details you want (SKU | Size | Color)
                    <br />
                  </p>
                  <p className="buy-now-text">
                    Your package will be received via Fardar Domestic Express
                    within 1-3 weekdays❗️
                  </p>
                  <p className="buy-now-text">
                    Plz send the address like below 👇
                    <br />
                    <br />
                    Your Name Here
                    <br />
                    No 120/b, Botreejunction, Opanayaka, Ratnapura.
                    <br />
                    07X XXXX XXX
                  </p>
                  <hr />
                  <a
                    href="https://wa.me/+94767722095"
                    target="_blank"
                    rel="noreferrer">
                    <button
                      className="btn btn-success btn-block px-5 my-3 btn-place-order"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample">
                      Place a Order Now
                    </button>
                  </a>
                  <hr />
                  <p className="extra-small-text">
                    -- See our customers feedbacks and more images --
                  </p>
                  <p className="buy-now-text">
                    Visit our :
                    <br />
                    <a href="https://www.facebook.com/t4me.lk">Facebook Page</a>
                    <br />
                    <a
                      className="buy-now-text"
                      href="https://www.daraz.lk/shop/t4me-apparel-printers">
                      Daraz Shop
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
