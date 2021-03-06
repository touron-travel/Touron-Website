import React from "react";
import "./Footer.css";
import { NavLink, Link, withRouter } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";
// import { isAuthenticated, signout } from "../../Login components/auth";

// import { FaCcVisa, FaCcAmex, FaCcMastercard } from "react-icons/fa";
// import NEFT from "../../assests/NEFT.png"
// import Zest from "../../assests/Zest.png"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footnav">
          <div className="navigations">
            <ul className="footnav-area">
              <li className="footnav-items">
                <NavLink
                  exact
                  to="/"
                  className="footnav-links"
                  activeClassName="selected"
                >
                  Home
                </NavLink>
              </li>
              <li className="footnav-items">
                <NavLink
                  to="/about"
                  className="footnav-links"
                  activeClassName="selected"
                >
                  About
                </NavLink>
              </li>
              <li className="footnav-items">
                <NavLink
                  to="/how-it-works"
                  className="footnav-links"
                  activeClassName="selected"
                >
                  How it Works
                </NavLink>
              </li>
              <li className="footnav-items">
                <NavLink
                  to="/contact"
                  className="footnav-links"
                  activeClassName="selected"
                >
                  Contact
                </NavLink>
              </li>
              <li className="footnav-items">
                <NavLink
                  to="/destination"
                  className="footnav-links"
                  activeClassName="selected"
                >
                  Destination Guide
                </NavLink>
              </li>
              <li className="footnav-items">
                <NavLink
                  to="/visa"
                  className="footnav-links"
                  activeClassName="selected"
                >
                  Visa Request
                </NavLink>
              </li>
              {/* {!isAuthenticated && ( */}
              <li className="footnav-items">
                <NavLink
                  to="/login"
                  className="footnav-links"
                  activeClassName="selected"
                >
                  Login/SignUp
                </NavLink>
              </li>
              {/* )} */}
              {/* {isAuthenticated && (
                <li className="footnav-items">
                  <span
                    className="signoutSpan"
                    onClick={() => {
                      signout(() => {
                        history.push("/");
                      });
                    }}
                  >
                    Signout
                  </span>
                </li>
              )} */}
            </ul>
          </div>
          <div className="social-icons">
            <div className="icons">
              <p>
                <a
                  href="https://www.instagram.com/touronholidays/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram"
                >
                  <InstagramIcon />
                </a>
              </p>
              <p>
                <a
                  href="https://www.facebook.com/touronholidays/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="facebook"
                >
                  <FacebookIcon />
                </a>
              </p>
              <p>
                <a
                  href="https://www.twitter.com/touronholidays/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="twitter"
                >
                  <TwitterIcon />
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@touron.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mail"
                >
                  <MailIcon />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <div className="book-now">
            <div className="tour-types">
              <ul>
                <li>
                  <Link className="link" to="">
                    <p>Surprise Tour</p>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="">
                    <p>Planned Trip</p>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="">
                    <p>Road Trip</p>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="">
                    <p>Honeymoons</p>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="">
                    <p>Families</p>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="">
                    <p>Solo</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="quick-links">
            <div className="links">
              <ul>
                <li>
                  <Link className="link" to="">
                    <p>How it works</p>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="">
                    <p>Terms & condition</p>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="">
                    <p>Blog</p>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="">
                    <p>Privacy Policy</p>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="">
                    <p>FAQ</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="tour-ideas">
            <div className="ideas">
              <ul>
                <li>
                  <Link className="link" to="">
                    <p>Asia</p>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="">
                    <p>Africa</p>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="">
                    <p>Middle East</p>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="">
                    <p>Oceania</p>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="">
                    <p>Indian Ocean</p>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="">
                    <p>Europe</p>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="">
                    <p>Caribbean</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="contact">
            <div className="contact-section">
              <div className="_title">Contact us</div>
              <div className="footer_address">
                <p>
                  <span>Address:</span>tour On
                </p>
                <p>Workafella, Rathha Towers,</p>
                <p>Tek Meadows - A Block, 4th Floor,</p>
                <p>Opposite to Accenture, Sholinganallur,</p>
                <p>OMR, Chennai-119</p>
                <p>
                  <span>Phone:</span>8667801206
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights">
          <p className="text-center">
            {" "}
            &copy; 2020 <span>tour On</span> (A Brand of Lotsatravel Holiday
            LLP) | All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
