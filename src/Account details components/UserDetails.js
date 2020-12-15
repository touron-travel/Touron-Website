import React from "react";
import "./UserDetails.css";
import { Form, Input } from "reactstrap";
import Profilenav from "./Profilenav";
import Profilepage from "./Profilepage";
const UserDetails = () => {
  return (
    <div style={{ display: "flex" }}>
      <Profilepage />
      <div className="account-section">
        <div className="account">
          <Profilenav title={"User Details"} />
          <div className="account-content">
            <h1>Hello Jesse</h1>
            <p>
              This is your profile page. You can see the progress you've made
              with your work and manage your projects or assigned tasks
            </p>
          </div>
        </div>
        <div className="account-profile-page">
          <div className="account-profile-column1">
            <div className="account-column1-head">
              <h3>My account</h3>
            </div>
            <div className="account-column-info">
              <Form>
                <h6>User Information</h6>
                <div className="row">
                  <div className="col-mg-6">
                    <div className="form-group">
                      <label className="user-label">Name</label>
                      <input
                        type="text"
                        className="user-input-alter user-input"
                      />
                    </div>
                  </div>
                  <div className="col-mg-6">
                    <div className="form-group">
                      <label className="user-label">Email address</label>
                      <input
                        type="text"
                        className="user-input-alter user-input"
                      />
                    </div>
                  </div>
                  <div className="col-mg-6">
                    <div className="form-group">
                      <label className="user-label">Age</label>
                      <input
                        type="text"
                        className="user-input-alter user-input"
                      />
                    </div>
                  </div>
                  <div className="col-mg-6">
                    <div className="form-group">
                      <label className="user-label">Gender</label>
                      <input
                        type="text"
                        className="user-input-alter user-input"
                      />
                    </div>
                  </div>
                  <div className="col-mg-6">
                    <div className="form-group">
                      <label className="user-label">Profession</label>
                      <input
                        type="text"
                        className="user-input-alter user-input"
                      />
                    </div>
                  </div>
                  <div className="col-mg-6">
                    <div className="form-group">
                      <label className="user-label">Traveler Type</label>
                      <input
                        type="text"
                        className="user-input-alter user-input"
                      />
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
                <h6>Contact Information</h6>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="user-label">Address</label>
                      <input
                        type="text"
                        className="user-input-alter user-input"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="user-label">Mobile no</label>
                      <input
                        type="number"
                        className="user-input-alter user-input"
                      />
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
                <h6>About me</h6>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="user-label">About me</label>

                    <Input
                      type="textarea"
                      rows="4"
                      className="user-input-alter user-input"
                    />
                  </div>
                </div>
                <div className="user-button">
                  <button className="btn btn-primary btn-sm">Submit</button>
                </div>
              </Form>
            </div>
          </div>
          <div className="account-profile-column2">
            <div className="profile-img">
              <img
                src="https://demos.creative-tim.com/argon-dashboard-react/static/media/team-4-800x800.23007132.jpg"
                alt=""
              />
            </div>
            <div className="profile-center">
              <div className="profile-name">
                <h3>
                  Jessica Jones
                  <span className="profile-age">, 27</span>
                </h3>
              </div>
              <div className="user-travel-type">Travel type</div>
              <div className="user-profession">Profession</div>
              <hr className="my-4" />
              <div className="user-about">
                <h3>About</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quasi debitis quo architecto ea impedit veniam?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
