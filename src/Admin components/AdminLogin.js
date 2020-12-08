import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setAdminRoute } from "./utilities/AdminroutesCheck";
import { ApiContext } from "../Context/ApiContext";
import "./AdminLogin.css";

const AdminLogin = () => {
  const location = useLocation();
  const { setAdminRoutes } = useContext(ApiContext);

  useEffect(() => {
    let value = setAdminRoute(location.pathname);
    console.log("value :>> ", value);
    setAdminRoutes(value);
  }, []);
  return (
    <div className="adminDashboard">
      <div className="login_box">
        <h1>Admin Login</h1>
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
  );
};

export default AdminLogin;
