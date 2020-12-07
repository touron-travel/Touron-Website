import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./Navbar.css";
// import "./script.js";
import Image from "../../assests/logo.jpeg";
import { BiUserCircle } from "react-icons/bi";
import { isAuthenticated, signout } from "../../Login components/auth";

const Navbar = ({ history }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav>
      <div className="logo">
        <img src={Image} alt="" />
      </div>
      <div className="hamburger" onClick={() => setNavOpen(!navOpen)}>
        {/* <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div> */}
        <i className={navOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={navOpen ? "nav-links open" : "nav-links"}>
        <li>
          <NavLink
            exact
            to="/"
            className={navOpen ? "nav-links_items fade" : "nav-links_items"}
            onClick={() => setNavOpen(false)}
            activeClassName="selected"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            //  className="nav-links"
            className={navOpen ? "nav-links_items fade" : "nav-links_items"}
            activeClassName="selected"
            onClick={() => setNavOpen(false)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/how-it-works"
            // className="nav-links"
            className="nav-links_items"
            activeClassName="selected"
            onClick={() => setNavOpen(false)}
          >
            How it Works
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            // className="nav-links"
            className="nav-links_items"
            activeClassName="selected"
            onClick={() => setNavOpen(false)}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/destination"
            // className="nav-links"
            className="nav-links_items"
            activeClassName="selected"
            onClick={() => setNavOpen(false)}
          >
            Destination Guide
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/visa"
            // className="nav-links"
            className="nav-links_items"
            activeClassName="selected"
            onClick={() => setNavOpen(false)}
          >
            Visa Request
          </NavLink>
        </li>
        {!isAuthenticated() && (
          <li>
            <NavLink
              to="/login"
              // className="nav-links"
              className="nav-links_items"
              activeClassName="selected"
              onClick={() => setNavOpen(false)}
            >
              Login/Register
            </NavLink>
          </li>
        )}

        {isAuthenticated() && (
          <li>
            <span
              onClick={() => {
                signout(() => {
                  history.push("/");
                });
                setNavOpen(false);
              }}
            >
              Signout
            </span>
          </li>
        )}

        {isAuthenticated() && (
          <li>
            <NavLink
              to="/profilepage"
              // className="nav-links"
              className="nav-links_items"
              activeClassName="selected"
              onClick={() => setNavOpen(false)}
            >
              <BiUserCircle />
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default withRouter(Navbar);
