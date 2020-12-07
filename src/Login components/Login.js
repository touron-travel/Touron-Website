import React, { useState } from "react";
import "./Login.css";
import { Link, Redirect } from "react-router-dom";
import { auth, firedb } from "../firebase";
import { isAdmin, isAuthenticated, storeadmintoken } from "./auth";

export default function Login() {
  const [password, setPassword] = useState("123456789");
  const [email, setEmail] = useState("dins@gmail.com");
  const [loaded, setLoaded] = useState(false);
  // const { isLoggedIn, setIsLoggedIn, user, setUser } = useContext(AuthContext);
  const [step, setStep] = useState(0);

  const authenticate = (authToken) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("authToken", JSON.stringify(authToken));
    }
  };

  const performRedirect = () => {
    if (isAuthenticated) {
      return <Redirect to="/" />;
    }
  };
  const signIn = (e) => {
    e.preventDefault();
    setLoaded(true);

    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        // setUser(user);
        // setLoaded(false);
        // updateUserToken(user.user);
        console.log("user :>> ", user);
        setEmail("");
        setPassword("");
        authenticate(user);

        getUserData(user.user.uid);
        // setIsLoggedIn(true);
        // navigation.navigate("Main");
        // <Redirect to="/" />;
      })
      .catch((err) => {
        setLoaded(false);
        console.log(err.message, "po");
      });
  };

  const getUserData = (uid) => {
    firedb.ref(`userGeneralInfo/${uid}`).on("value", (data) => {
      if (data.val() !== null) {
        let val = data.val();
        console.log("val :>> ", val);
        if (val.admin == true) {
          storeadmintoken(val.admin);
        }
        console.log(val.admin, "admin");
      }
    });
  };

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
                <input
                  type="email"
                  placeholder="Email"
                  size="35"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="password">
                <i className="fal fa-key"></i>
                <input
                  type="password"
                  placeholder="Passowrd"
                  size="35"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="buttonfix">
                <input
                  type="submit"
                  className="logbutton"
                  value="Login"
                  onClick={signIn}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
