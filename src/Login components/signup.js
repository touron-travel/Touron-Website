import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import Navbar from "../Home components/Navbar/Navbar";

export default function signup() {
  return (
    <div className="signup_form">
      <div className="nav">
        <Navbar />
      </div>
      <div className="signup_flex">
        <div className="signup_text">
          <h1>Signup</h1>
          <p>
            Have Account?
            <Link to="/login" className="link">
              Login
            </Link>
          </p>
        </div>
        <div className="signup_box">
          <div className="signbox">
            <form className="signForm">
              <div className="names">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Name" required />
              </div>
              <div className="email">
                <i className="fa fa-envelope"></i>
                <input type="email" placeholder="Email" required />
              </div>
              <div className="mobile">
                <i className="fas fa-phone"></i>
                <input type="text" placeholder="Mobile no" required />
              </div>
              <div className="password">
                <i className="fal fa-key"></i>
                <input type="password" placeholder="Passowrd" required />
              </div>
              <div className="buttonfix">
                <input type="submit" className="signbutton" value="Register" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
