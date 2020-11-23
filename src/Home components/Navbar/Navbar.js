import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Image from "../../assests/logo.jpeg";

export default function Navbar() {
  return (
    <div className="header">
      <div className="logo">
        <img src={Image} alt="" />
      </div>
      <div className="navi">
        <ul className="nav-area">
          <li className="nav-items">
            <NavLink
              exact
              to="/"
              className="nav-links"
              activeClassName="selected"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink
              to="/about"
              className="nav-links"
              activeClassName="selected"
            >
              About
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink
              to="/how-it-works"
              className="nav-links"
              activeClassName="selected"
            >
              How it Works
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink
              to="/contact"
              className="nav-links"
              activeClassName="selected"
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink
              to="/destination"
              className="nav-links"
              activeClassName="selected"
            >
              Destination Guide
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink
              to="/login"
              className="nav-links"
              activeClassName="selected"
            >
              Login/Register
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
