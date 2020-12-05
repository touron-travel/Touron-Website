import React, { useContext, useEffect } from "react";
import Sidebar from "./Sidebar";
import "./Admin.css";
import { useLocation } from "react-router-dom";
import { setAdminRoute } from "./utilities/AdminroutesCheck";
import { ApiContext } from "../Context/ApiContext";

const Admin = () => {
  const location = useLocation();
  const { setAdminRoutes } = useContext(ApiContext);

  useEffect(() => {
    let value = setAdminRoute(location.pathname);
    console.log("value :>> ", value);
    setAdminRoutes(value);
  }, []);

  return (
    <>
      <div className="dashboard-flex">
        <Sidebar />
        <h1>Dashboard</h1>
      </div>
    </>
  );
};

export default Admin;
