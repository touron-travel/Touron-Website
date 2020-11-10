import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="login_form">
        <div className="login_text">
          <h1>Login</h1>
          <p>
            No Account?
            <Link to="/signup" className="link">
              Register
            </Link>
          </p>
        </div>
        <div className="login_box">
          <div className="logbox">
            <form className="loginForm">
              <div className="email">
                <i className="fa fa-envelope"></i>
                <input type="email" placeholder="Email" size="35" required />
              </div>
              <div className="password">
                <i className="fal fa-key"></i>
                <input
                  type="password"
                  placeholder="Passowrd"
                  size="35"
                  required
                />
              </div>
              <div className="buttonfix">
                <input type="submit" className="logbutton" value="Login" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
