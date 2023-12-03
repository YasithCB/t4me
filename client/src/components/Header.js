import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
        <div className="container navbar-custom">
          <a className="navbar-brand" href="/">
            <img src="/images/logo.png" alt="#" height={30} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="collection">
                Collection
              </a>
              <a className="nav-link" href="gallery">
                Galary
              </a>
              <a className="nav-link" href="about">
                About
              </a>
              <a className="nav-link" href="contact">
                Contact
              </a>
            </div>

            {/* Move these buttons to the end of the row */}
            <div className="ms-auto">
              <a
                href="https://www.facebook.com/t4me.lk"
                target="_blank"
                rel="noreferrer">
                <MDBIcon fab icon="facebook" size="xl" className="pe-2" />
              </a>
              <a
                href="https://wa.me/+94767722095"
                target="_blank"
                rel="noreferrer">
                <MDBIcon
                  fab
                  icon="whatsapp"
                  size="xl"
                  className="pe-2"
                  style={{ color: "green" }}
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
