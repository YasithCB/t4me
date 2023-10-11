import React from "react";
import ProductCarousel from "./collection/productCarousel";

const ProductModal = ({ product, closeModal }) => {
  return (
    <div
      className="modal fade"
      id="productModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{ display: product ? "block" : "none" }}
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          {product && (
            <>
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {product.name}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                {/* ... Product details, images, and other content */}
                <div className="row">
                  <div className="col-md-12">
                    {/* Image Carousel */}
                    <ProductCarousel product={product} />
                  </div>
                  <div className="col-md-12">
                    {/* Product Details */}
                    <div className="product-details">
                      <h3>{product.name}</h3>
                      <div class="alert alert-secondary " role="alert">
                        {product.category}
                      </div>
                      <div class="alert alert-secondary " role="alert">
                        SKU : {product.sku}
                      </div>
                      <div class="alert alert-success " role="alert">
                        Price : {product.price}
                      </div>

                      {/* buy now */}
                      <p>
                        <button
                          class="btn btn-dark px-5 my-3"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseExample"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          Buy Now
                        </button>
                      </p>
                      <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                          <p>
                            Material: 100% COTTON
                            <br />
                            Island wide fast delivery ❗️
                            <br />
                            <br />
                            MEDIUM : Height 25" | chest 19" | shoulders 17" |
                            sleeves 8"
                            <br />
                            LARGE : Height 27" | chest 20" | shoulders 18" |
                            sleeves 8.5"
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
                          <div style={{ textAlign: "center" }}>
                            <p>
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
                          </div>
                          <br />
                          <hr />
                          <br />
                          <p>
                            If you need to place an order, send the following
                            details:
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
                          <p>
                            Your package will be received via Fardar Domestic
                            Express within 1-3 weekdays❗️
                          </p>
                          <div style={{ textAlign: "center" }}>
                            <p>
                              Plz send the address like below 👇
                              <br />
                              <br />
                              Your Name Here
                              <br />
                              No 120/b, Botreejunction, Opanayaka, Ratnapura.
                              <br />
                              07X XXXX XXX
                            </p>
                          </div>
                          <hr />
                          <a
                            href="https://wa.me/+94767722095"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <button
                              class="btn btn-success btn-block px-5 my-3"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseExample"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              Place a Order Now
                            </button>
                          </a>
                          <hr />
                          <p>
                            -- See our customers feedbacks and more images --
                          </p>
                          <p>
                            Visit our :
                            <br />
                            <a href="https://www.facebook.com/t4me.lk">
                              Facebook Page
                            </a>
                            <br />
                            <a href="https://www.daraz.lk/shop/t4me-apparel-printers">
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
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
