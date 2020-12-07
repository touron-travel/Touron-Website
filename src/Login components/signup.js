import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import firebase from "firebase";

const signup = () => {
  // const [number, setNumber] = useState("");
  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // const [step, setStep] = useState(0);
  // const [code, setCode] = useState(0);
  // const [sessionID, setSessionID] = useState("");
  // const [loaded, setLoaded] = useState(false);

  const sendOtp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword("mani@gmail.com", "123456789")
      .then((user) => console.log("user :>> ", user))
      .catch((err) => console.log("err :>> ", err));
  };
  // const { isLoggedIn, setIsLoggedIn, user, setUser } = useContext(AuthContext);
  return (
    <>
      <div className="signup_form">
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
                <input type="text" placeholder="Name" size="35" required />
              </div>
              <div className="email">
                <i className="fa fa-envelope"></i>
                <input type="email" placeholder="Email" size="35" required />
              </div>
              <div className="mobile">
                <i className="fas fa-phone"></i>
                <input type="text" placeholder="Mobile no" size="35" required />
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
                <input
                  type="submit"
                  className="signbutton"
                  value="Register"
                  onClick={sendOtp}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default signup;
