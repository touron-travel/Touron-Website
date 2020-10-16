import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Image from "../../assests/logo.jpeg";



export default function Navbar() {
  return (
    <div className="header">
      <div className="logo">
        <img src={Image} alt="" />
      </div>
      <div>
        <ul className="nav-area">
          <li className="nav-items">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/about" className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/how-it-works" className="nav-links">
              How it Works
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/destination" className="nav-links">
              Destination Guide
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/login" className="nav-links">
              Login/Register
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
