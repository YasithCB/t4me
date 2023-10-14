import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productsList from "../db/products";
import RoundButton from "../components/RoundButton";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = productsList.find((item) => item.sku === productId);

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
          <div className="col-7">
            <div className="row g-2 mb-2">
              <div className="col-12">
                <img src={product.imgUrl} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="row g-2">
              <div className="col-6">
                <img src={product.imgUrl} className="img-fluid" alt="" />
              </div>
              <div className="col-6">
                <img src={product.imgUrl} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div className="col-5">
            <p>{product.name}</p>
            <p>{product.price}.00 LKR</p>
            <p className="small-text mt-3">Size</p>
            <button
              className={`btn ${selectedSize === "M" ? "btn-dark" : ""} m-2`}
              onClick={() => onSelectSize("M")}
            >
              M
            </button>
            <button
              className={`btn ${selectedSize === "L" ? "btn-dark" : ""} m-2`}
              onClick={() => onSelectSize("L")}
            >
              L
            </button>

            <p className="small-text mt-3">Color</p>
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
      </div>
    </>
  );
};

export default ProductDetails;
