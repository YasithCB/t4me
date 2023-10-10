import React from "react";
import Meta from "../components/Meta";
import { BiHomeHeart, BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <Meta title="Contact" />

      <div className="contact-wrapper py-5 mt-3">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d71176.7992579826!2d80.6017348679374!3d6.621129106531044!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3ed0ae63eebd1%3A0x6c163efbfd2a7db5!2sT4Me%20Apparel%20%26%20Printers!5e0!3m2!1sen!2slk!4v1683647008759!5m2!1sen!2slk"
                height="500"
                className="bordeer-0 w-100"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6">
              <h2>Contact Us</h2>
              <form className="py-3">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    id="mobileNumber"
                    placeholder="Mobile Number"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="5"
                    className="form-control"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-dark btn-block">
                  Submit
                </button>
              </form>
            </div>

            <div className="col-12 col-md-6">
              <h2>Get In Touch With Us</h2>
              <ul className="list-unstyled py-3">
                <li className="my-2 row">
                  <div className="col-1 text-end">
                    <BiHomeHeart />
                  </div>
                  <div className="col-10">
                    <address>
                      No 120/B, Botreejunction, Opanayake, 70080, Ratnapura, Sri
                      Lanka.
                    </address>
                  </div>
                </li>
                <li className="my-2 row">
                  <div className="col-1 text-end">
                    <BiPhoneCall />
                  </div>
                  <div className="col-10">
                    <a href="tele:+94767722095">+94 76 77 22 095</a>
                  </div>
                </li>
                <li className="my-2 row">
                  <div className="col-1 text-end">
                    <AiOutlineMail />
                  </div>
                  <div className="col-10">
                    <a href="mailto:t4meapparel.printers@gmail.com">
                      t4mepparel.printers@gmail.com
                    </a>
                  </div>
                </li>
                <li className="my-2 row">
                  <div className="col-1 text-end">
                    <BsInfoCircle />
                  </div>
                  <div className="col-10">
                    <p>24h</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Embed your map here */}
    </>
  );
};

export default Contact;
