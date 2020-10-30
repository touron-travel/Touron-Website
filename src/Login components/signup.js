import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import Navbar from "../Home components/Navbar/Navbar";

export default function signup() {
  return (
    <div className="login_form">
      <div className="nav">
        <Navbar />
      </div>
      <div className="login_text">
        <h1>Signup</h1>
        <p>
          Have Account?{" "}
          <Link to="/login" className="link">
            Login
          </Link>
        </p>
      </div>
      <div className="slogin_box">
        <form className="loginForm">
          <input
            type="text"
            className="names"
            placeholder="Your name"
            required
          />
          <input
            type="text"
            className="mobile"
            placeholder="Mobile no"
            required
          />
          <input
            type="password"
            className="password"
            placeholder="Passowrd"
            required
          />
          <input
            type="password"
            className="cnfrmpassword"
            placeholder="Confirm Passowrd"
            required
          />
          <input type="submit" className="logbutton" value="Register" />
        </form>
      </div>
    </div>
  );
}
