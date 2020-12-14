import React, { useEffect, useContext } from "react";
import Profilenav from "./Profilenav";
import "./Support.css";
import logo from "../assests/logo1.png";
import { Form, Input, Button } from "reactstrap";
import Profilepage from "./Profilepage";
import { setAdminRoute } from "../Admin components/utilities/AdminroutesCheck";
import { ApiContext } from "../Context/ApiContext";
import { useLocation } from "react-router-dom";

const Support = () => {
  const location = useLocation();
  const { setAdminRoutes } = useContext(ApiContext);

  useEffect(() => {
    let value = setAdminRoute(location.pathname);
    setAdminRoutes(value);
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <Profilepage />
      <div className="support-container">
        <div className="support-section">
          <Profilenav title={"Support"} />
        </div>
        <div className="support-section-form">
          <div className="support-section-form2">
            <div className="support-section-from2-head">
              <h3>Contact us</h3>
            </div>
            <div className="support-section-form2-info">
              <Form>
                <div className="form-group">
                  <label className="user-label">Name</label>
                  <input type="text" className="user-input-alter user-input" />
                </div>
                <div className="form-group">
                  <label className="user-label">Email</label>
                  <input type="text" className="user-input-alter user-input" />
                </div>
                <div className="form-group">
                  <label className="user-label">Mobile no</label>
                  <input type="text" className="user-input-alter user-input" />
                </div>
                <div className="form-group">
                  <label className="user-label">Choose the type</label>
                  <Input type="select" className="user-input-alter user-input">
                    <option>Type 1</option>
                    <option>Type 2</option>
                    <option>Type 3</option>
                  </Input>
                </div>
                <div className="form-group">
                  <label className="user-label">Comment</label>
                  <Input
                    type="textarea"
                    rows="5"
                    className="user-input-alter user-input"
                  />
                </div>
                <div className="user-button">
                  <button className="btn btn-primary btn-sm">Submit</button>
                </div>
              </Form>
            </div>
          </div>
          <div className="support-section-form1">
            <div className="reach-section">
              <h1>Reach us</h1>
            </div>
            <div className="reach-section-img">
              <img src={logo} alt="" />
            </div>
            <div className="reach-section-contact">
              <h2>Email : touronholidayz@gmail.com</h2>
              <h2>Mobile no : 8667801206</h2>
              <Button color="success" type="button" style={{ marginTop: 20 }}>
                Chat with us!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
