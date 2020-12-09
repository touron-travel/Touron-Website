import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { auth, firedb } from "../firebase";
import axios from "axios";
import { isAdmin, storeAuthToken } from "./auth";

const Signup = () => {
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(2);
  const [code, setCode] = useState("");
  const [sessionID, setSessionID] = useState("");
  const [loaded, setLoaded] = useState(false);

  const nextStep = () => {
    setStep(step + 1);
  };

  // const { isLoggedIn, setIsLoggedIn, user, setUser } = useContext(AuthContext);
  const sendOtp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user, "user");
        // setUser(user.user);
        firedb.ref(`userGeneralInfo/${user.user.uid}`).set({
          phoneNumber: number,
          name: name,
          address: "",
          age: "",
          gender: "",
          aboutMe: "",
          travellerType: "",
          admin: false,
          pushNotificationToken: "",
          photoURL: "",
        });

        storeAuthToken(user);

        axios
          .get(
            `https://2factor.in/API/V1/c9170ed3-3854-11eb-83d4-0200cd936042/SMS/+91${number}/AUTOGEN/touron`
          )
          .then((response) => {
            let session = response.data.Details;
            console.log(session, "RESPONSE DATA");
            setLoaded(false);
            setSessionID(session);

            nextStep();
          })
          .catch((err) => {
            console.log(err, "kjhk");
          });
      })
      .catch((err) => {
        console.log("err", err);
        setLoaded(false);
      });
  };

  const verifyOtp = (e) => {
    console.log("sessionID :>> ", sessionID);
    console.log("code :>> ", code);
    e.preventDefault();

    setLoaded(true);
    axios
      .get(
        `https://2factor.in/API/V1/c9170ed3-3854-11eb-83d4-0200cd936042/SMS/VERIFY/${sessionID}/${code}`
      )
      .then((response) => {
        console.log(response, "RESPONSE");
        const status = response.data.Details;
        console.log(status, "STATUS");
        if (status == "OTP Matched") {
          setName("");
          setNumber("");
          setPassword("");
          setEmail("");
          setCode("");
        }
      })
      .catch((err) => {
        setLoaded(false);
        console.log(err, "err");
      });
  };
  const renderform = () => {
    switch (step) {
      case 1:
        return (
          <div className="signup_box">
            <div className="signbox">
              <form className="signForm">
                <div className="names">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Name"
                    size="35"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="email">
                  <i className="fa fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    size="35"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mobile">
                  <i className="fas fa-phone"></i>
                  <input
                    type="text"
                    placeholder="Mobile no"
                    size="35"
                    required
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <div className="password">
                  <i className="fal fa-key"></i>
                  <input
                    type="password"
                    placeholder="Passowrd"
                    size="35"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="buttonfix">
                  <input
                    type="submit"
                    className="signbutton"
                    value="Send otp"
                    onClick={sendOtp}
                    // onClick={nextStep}
                  />
                </div>
              </form>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="signup_box">
            <div className="signbox">
              <form className="signForm">
                <div className="password">
                  <i className="fas fa-lock"></i>
                  <input
                    type="text"
                    placeholder="Enter otp"
                    size="35"
                    required
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
                <div className="buttonfix">
                  <input
                    type="submit"
                    className="signbutton"
                    value="Verify"
                    onClick={verifyOtp}
                  />
                </div>
              </form>
            </div>
          </div>
        );
    }
  };

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
        {renderform(step)}
      </div>
    </>
  );
};

export default Signup;
