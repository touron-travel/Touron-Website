import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Navbar from "../Home components/Navbar/Navbar";

export default function Login() {
  return (
    <div className="login_form">
      <div className="nav">
        <Navbar />
      </div>
      <div className="login_text">
        <h1>Login</h1>
        <p>
          No Account?{" "}
          <Link to="/signup" className="link">
            Register
          </Link>
        </p>
      </div>
      <div className="login_box">
        <form className="loginForm">
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
          <input type="submit" className="logbutton" value="Login" />
        </form>
      </div>
    </div>
  );
}
