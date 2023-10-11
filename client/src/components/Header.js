import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid navbar-custom">
          <a class="navbar-brand" href="/">
            <img src="/images/logo.png" alt="#" height={30} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a class="nav-link" href="collection">
                Collection
              </a>
              <a class="nav-link" href="about">
                About
              </a>
              <a class="nav-link" href="contact">
                Contact
              </a>
            </div>

            {/* Move these buttons to the end of the row */}
            <div class="ms-auto">
              <a
                href="https://www.facebook.com/t4me.lk"
                target="_blank"
                rel="noreferrer"
              >
                <MDBIcon fab icon="facebook" size="xl" className="pe-2" />
              </a>
              <a
                href="https://wa.me/+94767722095"
                target="_blank"
                rel="noreferrer"
              >
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
