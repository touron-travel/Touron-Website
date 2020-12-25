import React, { useState, useContext,useEffect } from "react";
import "./Login.css";
import { Link, Redirect } from "react-router-dom";
import { auth, firedb } from "../firebase";
import { storeAuthToken } from "./auth";
import { Ripple } from "react-spinners-css";
import { ApiContext } from "../Context/ApiContext";
export default function Login({ history }) {
  
  const [password, setPassword] = useState("123456789");
  const [email, setEmail] = useState("dins@gmail.com");
  const [loaded, setLoaded] = useState(false);
  const { setUserInfo } = useContext(ApiContext);

  const signIn = (e, next) => {
    e.preventDefault();
    setLoaded(true);

    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("user :>> ", user);
        setEmail("");
        setPassword("");
        storeAuthToken(user);
        setLoaded(false);
        

        return history.goBack();
      })
      .catch((err) => {
        setLoaded(false);
        console.log(err.message, "po");
      });



  };


  useEffect(()=>{
    
    auth.onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log('user', user)
      } else {
        // No user is signed in.
      }
    });
  
  },[])

  return (
    <>
      <div className="login_form">
        <div className="login_text">
          <h1>Login</h1>
          <p>
            No Account?<span> </span>
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
                {loaded ? (
                  <div className="buttonfix loading">
                    <Ripple color="white" size={40} />
                  </div>
                ) : (
                  <button className="logbutton" onClick={signIn}>
                    Login
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
