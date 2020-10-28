import React from "react";
import "./Login.css";
import ScriptTag from "react-script-tag";

const Demo = (props) => (
  <ScriptTag type="text/javascript" src="./loginscript.js" />
);

export default function Login() {
  return (
    <div className="login-form">
      <div className="cont">
        <div className="form sign-in">
          <h2>Login</h2>
          <label>
            <span>Mobile</span>
            <input type="text" name="text" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="password" />
          </label>
          <button className="submit" type="button">
            Sign In
          </button>
          <p className="forgot-pass">Forgot Password ?</p>
        </div>

        <div className="sub-cont">
          <div className="img">
            <div className="img-text m-up">
              <h2>New here?</h2>
              <p>Signup and get a adventurous journey!</p>
            </div>
            <div className="img-text m-in">
              <h2>One of us?</h2>
              <p>
                If you already has an account, just sign in. We've missed you!
              </p>
            </div>
            <div className="img-btn">
              <span className="m-up">Sign Up</span>
              <span className="m-in">Sign In</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2>Sign Up</h2>
            <label>
              <span>Name</span>
              <input type="text" />
            </label>
            <label>
              <span>Mobile Number</span>
              <input type="text" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" />
            </label>
            <label>
              <span>Confirm Password</span>
              <input type="password" />
            </label>
            <button type="button" className="submit">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
