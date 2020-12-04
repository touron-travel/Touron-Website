import React from "react";
import Sidebar from "./Sidebar";
import "./Admin.css";

const Admin = () => {
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
