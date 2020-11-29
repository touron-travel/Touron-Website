import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
// import "./script.js";
import Image from "../../assests/logo.jpeg";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  console.log(navOpen, "l");
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
            to="/login"
            // className="nav-links"
            className="nav-links_items"
            activeClassName="selected"
            onClick={() => setNavOpen(false)}
          >
            Login/Register
          </NavLink>
        </li>
      </ul>
    </nav>
    // <div className="header">
    //   <div className="logo">
    //     <img src={Image} alt="" />
    //   </div>
    //   <div className="navi">
    //     <ul className="nav-area">
    //       <li className="nav-items">
    //         <NavLink
    //           exact
    //           to="/"
    //           className="nav-links"
    //           activeClassName="selected"
    //         >
    //           Home
    //         </NavLink>
    //       </li>
    //       <li className="nav-items">
    //         <NavLink
    //           to="/about"
    //           className="nav-links"
    //           activeClassName="selected"
    //         >
    //           About
    //         </NavLink>
    //       </li>
    //       <li className="nav-items">
    //         <NavLink
    //           to="/how-it-works"
    //           className="nav-links"
    //           activeClassName="selected"
    //         >
    //           How it Works
    //         </NavLink>
    //       </li>
    //       <li className="nav-items">
    //         <NavLink
    //           to="/contact"
    //           className="nav-links"
    //           activeClassName="selected"
    //         >
    //           Contact
    //         </NavLink>
    //       </li>
    //       <li className="nav-items">
    //         <NavLink
    //           to="/destination"
    //           className="nav-links"
    //           activeClassName="selected"
    //         >
    //           Destination Guide
    //         </NavLink>
    //       </li>
    //       <li className="nav-items">
    //         <NavLink
    //           to="/login"
    //           className="nav-links"
    //           activeClassName="selected"
    //         >
    //           Login/Register
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
}
