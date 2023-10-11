import React, { useState } from "react";
import "../../Custom.css";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import ProductModal from "../ProductModal";

const ProductCollection = ({ productsList }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProductModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <MDBContainer className="my-2 text-center">
      <MDBRow>
        {productsList.map((product) => (
          <MDBCol md="4" sm={6} lg="3" className="mb-4" key={product.sku}>
            <div
              className="card"
              data-bs-toggle="modal"
              data-bs-target="#productModal"
              onClick={() => openProductModal(product)}
            >
              {/* Card content */}
              <div
                className="bg-image hover-overlay ripple hover-zoom"
                data-mdb-ripple-color="light"
              >
                <img
                  src={product.imgUrl}
                  className="img-fluid"
                  alt=""
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </div>
              <div className="card-body">
                <h6 className="card-title">
                  {product.name || "Unknown Product"}
                </h6>
                <p>{product.category}</p>
                <p className="text-primary">{product.price}</p>
              </div>
            </div>
          </MDBCol>
        ))}
      </MDBRow>

      {/* Use the ProductModal component for the modal */}
      <ProductModal product={selectedProduct} closeModal={closeModal} />
    </MDBContainer>
  );
};

export default ProductCollection;
