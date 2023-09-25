import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBRipple,
  MDBCardImage,
  MDBCardBody,
} from "mdb-react-ui-kit";

const HotDeals = ({ productsList }) => {
  return (
    <MDBContainer className="my-5 text-center">
      <h4 className="my-5">
        <strong>Hot Deals!</strong>
      </h4>

      <MDBRow>
        {productsList.map((product) => (
          <MDBCol md="4" sm={6} lg="3" className="mb-4" key={product.id}>
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                <MDBCardImage src={product.imgUrl} fluid className="w-100" />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-primary ms-2">New</span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    />
                  </div>
                </a>
              </MDBRipple>
              <MDBCardBody product={product}>
                <a href="#!" className="text-reset col-12">
                  <h6 className="card-title">
                    {product.name || "Unknown Product"}
                  </h6>
                </a>
                <a href="#!" className="text-reset">
                  <p>{product.category}</p>
                </a>
                <p className="">{product.price}</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default HotDeals;
