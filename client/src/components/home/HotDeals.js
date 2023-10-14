import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const HotDeals = ({ productsList }) => {

  return (
    <MDBContainer className="my-5 text-center">
      <h4 className="my-5">
        <strong>Hot Deals!</strong>
      </h4>

      <MDBRow>
        {productsList.map((product) => (
          <MDBCol md="4" sm={6} lg="3" className="mb-4" key={product.id}>
            <div className="text-start">
              {/* Card content */}
              <div
                className="bg-image hover-overlay ripple hover-zoom"
                data-mdb-ripple-color="light"
              >
                <img src={product.imgUrl} className="img-fluid" alt="" />
                <a href={`productDetails/${product.sku}`}>
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </div>
              <div className="card-body py-3 p-0">
                <p>{product.name || "Unknown Product"}</p>
                <p>{product.price}.00 LKR</p>
              </div>
            </div>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default HotDeals;
