import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
// import GMaps from "./map";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact_top"></div>
      <div className="contact_img">
        <div className="contact_title">
          <p className="breadcrumbs">
            <span className="mr-2">
              <Link className="linkin" to="/">
                Home <i className="fa fa-chevron-right"></i>
              </Link>
            </span>
            <span className="abt">
              Contact us <i className="fa fa-chevron-right"></i>
            </span>
          </p>
          <h1 className="mb-0 bread">Contact Us</h1>
        </div>
      </div>

      <div className="address">
        <div className="add">
          <div className="icon">
            <i className="fa fa-compass"></i>
          </div>
          <h3 className="connect">Address</h3>
          <p className="locate">
            tour On Holidays,Workafella, Rathha Towers, Tek Meadows - A Block,
            4th Floor, Opposite to Accenture, Sholinganallur, OMR, Chennai-119
          </p>
        </div>
        <div className="add">
          <div className="icon">
            <i className="fa fa-phone"></i>
          </div>
          <h3 className="connect">Contact Number</h3>
          <p className="locate">+91 86678 01206</p>
        </div>
        <div className="add">
          <div className="icon">
            <i className="fa fa-envelope"></i>
          </div>
          <h3 className="connect">Email Address</h3>
          <p className="locate">hello@touron.in</p>
        </div>
      </div>

      <div className="contact_info">
        <div className="box">
          <h2>Get in Touch</h2>
          <form>
            <div className="inputBox">
              <input type="text" name="" required="name" />
              <label>Name</label>
            </div>
            <div className="inputBox">
              <input type="text" name="" required="number" />
              <label>Mobile number</label>
            </div>
            <div className="inputBox">
              <textarea required="message" />
              <label>Message</label>
            </div>
            <button className="bt">Send Message</button>
          </form>
        </div>
      </div>

      {/* <div className="mapping">
        <GMaps />
      </div> */}
    </div>
  );
}
