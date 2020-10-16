import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";
import { FaCcVisa, FaCcAmex, FaCcMastercard } from "react-icons/fa";
import NEFT from "../../assests/NEFT.png"
import Zest from "../../assests/Zest.png"

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-section">
          <div className="book-now">
            <div className="tour-types">
              <h4>Start Planning</h4>
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
            <h4>Quick Links</h4>
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
              <h4>Where to go</h4>
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
              <h4>Contact us</h4>
              <div className="address">
                <p>tour On </p>
                <p>Workafella, Rathha Towers,</p>
                <p>Tek Meadows - A Block, 4th Floor,</p>
                <p>Opposite to Accenture, Sholinganallur,</p>
                <p>OMR, Chennai-119</p>
                <p>Contact No:8667801206</p>
              </div>
            </div>
          </div>
        </div>
        <div className="social-icons">
          <div className="icons">
            <p>
              <a href="https://www.instagram.com/touronholidays/" target="_blank" className="instagram">
                <InstagramIcon />
              </a>
            </p>
            <p>
              <a href="https://www.facebook.com/touronholidays/" target="_blank" className="facebook">
                <FacebookIcon />
              </a>
            </p>
            <p>
              <a href="https://www.twitter.com/touronholidays/" target="_blank" className="twitter">
                <TwitterIcon />
              </a>
            </p>
            <p>
              <a href="mailto:hello@touron.in" target="_blank" className="mail">
                <MailIcon />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="payment-options">
        <h4>Secure Payment Options</h4>
        <div className="option">
            <p className="cc"><FaCcVisa/></p>
            <p className="cc"><FaCcMastercard /></p>
            <p className="cc"> <FaCcAmex/></p>
            <p><img className="neft" src={NEFT} width="54px" height="45px" alt=""/></p>
            <p><img className="zest" src={Zest} width="54px" height="45px" alt=""/></p>
        </div>
      </div>
      <div className="copyrights">
    <p className="text-center"> &copy; 2020 <span>tour On</span> (A Brand of Lotsatravel Holiday LLP) | All rights reserved.</p>
    </div>    
    </>
  );
}
