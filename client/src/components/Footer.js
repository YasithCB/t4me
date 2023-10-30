import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { BiSolidSend } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <footer className="py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <div className="footer-top-data d-flex gap-15 align-items-center">
                <BiSolidSend color="white" className="send-icon" />
                <h2 className="text-white medium-text m-0">
                  Sign Up for Newsletter
                </h2>
              </div>
            </div>

            <div className="input-group col">
              <input
                type="text"
                className="form-control "
                placeholder="Your E-mail"
                aria-label="Your E-mail"
                aria-describedby="basic-addon2"
              />
            </div>

            <button type="button" className="btn btn-blue btn-subscribe col">
              Subscribe
            </button>
          </div>
        </div>
      </footer>

      <footer className="">
        <div className="container-fluid row p-3 ms-2 d-flex ">
          <div className="col-6 col-lg-3 text-center">
            <h5 className="text-white medium-text">Contact Us</h5>
            <div>
              <address className="text-white small-text">
                No 120/B, <br />
                Botreejunction, <br />
                Opanayaka, <br />
                70080, <br />
                Ratnapura, <br />
                Sri Lanka
              </address>
            </div>
          </div>
          <div className="col-6 col-lg-3 text-center">
            <h5 className="text-white medium-text">Information</h5>
            <div className="footer-links d-flex flex-column small-text">
              <Link className="text-white">Privacy Policy</Link>
              <Link className="text-white">Refund Policy</Link>
              <Link className="text-white">Shipping Policy</Link>
              <Link className="text-white">Terms & Conditions</Link>
              <Link className="text-white">Blogs</Link>
            </div>
          </div>
          <div className="col-6 col-lg-3 text-center">
            <h5 className="text-white medium-text">Account</h5>
            <div className="footer-links d-flex flex-column small-text">
              <Link className="text-white">About Us</Link>
              <Link className="text-white">FAQ</Link>
              <Link className="text-white">Contact</Link>
            </div>
          </div>
          <div className="col-6 col-lg-3 text-center">
            <h5 className="text-white medium-text">Quick Links</h5>
            <div className="footer-links d-flex flex-column small-text">
              <Link className="text-white">Plain T-shirts</Link>
              <Link className="text-white">Printed T-shirts</Link>
              <Link className="text-white">Rib T-shirts</Link>
              <Link className="text-white">Frocks</Link>
            </div>
          </div>
          <div className="social-icons d-flex flex-column align-items-center justify-content-center mt-3">
            <a href="tel:+94767722095" className="=d-block text-white m-0">
              +9476 77 22 095
            </a>
            <a
              href="mailto:t4meapparel.printers@gmail.com"
              className="d-block text-white"
            >
              t4meapparel.printers@gmail.com
            </a>
            <div className="d-flex gap-2">
              <a
                className="text-white"
                href="https://instagram.com/t4me_ap?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
              >
                <BsInstagram className="fs-5" />
              </a>
              <a className="text-white" href="https://www.facebook.com/t4me.lk">
                <BsFacebook className="fs-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-3">
        <div className="col-12">
          <p className="text-center mb-0 text-white small-text">
            &copy; {new Date().getFullYear()}; Powered by Yasith C Bandara
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
