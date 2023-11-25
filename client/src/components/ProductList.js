import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import React from "react";

function ProductList({ productsList }) {
  return (
    <MDBContainer className="my-5 text-center">
      <MDBRow>
        {productsList.map((product) => (
          <MDBCol md="4" lg="3" className="mb-4 col-6" key={product.id}>
            <div className="text-start">
              {/* Card content */}
              <div
                className="bg-image hover-overlay ripple hover-zoom"
                data-mdb-ripple-color="light">
                <img src={product.imgUrl} className="img-fluid" alt="" />
                <a href={`productDetails/${product.sku}`}>
                  <div
                    className="mask"
                    style={{
                      backgroundColor: "rgba(251, 251, 251, 0.15)",
                    }}></div>
                </a>
              </div>
              <div className="card-body py-3 p-0">
                <p className="small-text">
                  {product.name || "Unknown Product"}
                </p>
                <p className="medium-text "> {product.price}.00 LKR</p>
              </div>
            </div>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default ProductList;
