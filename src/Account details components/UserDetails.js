import React, { useState, useEffect } from "react";
import "./UserDetails.css";
import { Form, Input } from "reactstrap";
import Profilenav from "./Profilenav";
import Profilepage from "./Profilepage";
import { firedb } from "../firebase";
import { isAuthenticated } from "../Login components/auth";
import { Alert } from "reactstrap";
import { ToastProvider, useToasts } from "react-toast-notifications";

const UserDetails = () => {
  const { addToast } = useToasts();
  const [uid, setUid] = useState("");
  const [values, setValues] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    aboutMe: "",
    phoneNumber: "",
    travellerType: "",
    photoURL: "",
    address: "",
    profession: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name,value :>> ", name, value);

    setValues({
      ...values,
      [name]: value,
    });
  };

  const {
    name,
    email,
    age,
    gender,
    aboutMe,
    address,
    phoneNumber,
    travellerType,
    photoURL,
    profession,
  } = values;

  useEffect(() => {
    if (isAuthenticated()) {
      const { user } = isAuthenticated();
      setUid(user.uid);
      getCurrentUserData(user.uid);
    }
  }, []);

  const addOrEditInfo = (e) => {
    e.preventDefault();
    let values = {
      name: name,
      email: email,
      age: age,
      gender: gender,
      aboutMe: aboutMe,
      address: address,
      phoneNumber: phoneNumber,
      travellerType: travellerType,
      photoURL: photoURL,
      profession: profession,
    };
    firedb
      .ref(`userGeneralInfo/${uid}`)
      .set(values)
      .then((data) => {
        addToast("Updated Successfully", {
          appearance: "success",
        });
      })
      .catch((err) =>
        addToast(err, {
          appearance: "success",
        })
      );
  };

  const getCurrentUserData = (uid) => {
    firedb.ref(`userGeneralInfo/${uid}`).on("value", (data) => {
      if (data !== null) {
        let val = data.val();
        console.log("data.val() :>> ", val);
        setValues({
          ...values,
          name: val.name,
          email: val.email,
          age: val.age,
          gender: val.gender,
          aboutMe: val.aboutMe,
          phoneNumber: val.phoneNumber,
          photoURL: val.photoURL,
          profession: val.profession,
          travellerType: val.travellerType,
          address: val.address,
        });
      }
    });
  };

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
                        name="name"
                        onChange={handleChange}
                        className="user-input-alter user-input"
                        value={name}
                      />
                    </div>
                  </div>
                  <div className="col-mg-6">
                    <div className="form-group">
                      <label className="user-label">Email address</label>
                      <input
                        type="text"
                        onChange={handleChange}
                        name="email"
                        value={email}
                        className="user-input-alter user-input"
                      />
                    </div>
                  </div>
                  <div className="col-mg-6">
                    <div className="form-group">
                      <label className="user-label">Age</label>
                      <input
                        onChange={handleChange}
                        type="text"
                        value={age}
                        name="age"
                        className="user-input-alter user-input"
                      />
                    </div>
                  </div>
                  <div className="col-mg-6">
                    <div className="form-group">
                      <label className="user-label">Gender</label>
                      <Input
                        onChange={handleChange}
                        type="select"
                        name="gender"
                        value={gender}
                        className="user-input-alter user-input"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </Input>
                    </div>
                  </div>
                  <div className="col-mg-6">
                    <div className="form-group">
                      <label className="user-label">Profession</label>
                      <input
                        onChange={handleChange}
                        type="text"
                        value={profession}
                        name="profession"
                        className="user-input-alter user-input"
                      />
                    </div>
                  </div>
                  <div className="col-mg-6">
                    <div className="form-group">
                      <label className="user-label">Traveler Type</label>
                      <input
                        type="text"
                        onChange={handleChange}
                        name="travellerType"
                        value={travellerType}
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
                        value={address}
                        onChange={handleChange}
                        name="address"
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
                        onChange={handleChange}
                        value={phoneNumber}
                        name="phoneNumber"
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
                      value={aboutMe}
                      name="aboutMe"
                      rows="4"
                      onChange={handleChange}
                      className="user-input-alter user-input"
                    />
                  </div>
                </div>
                <div className="user-button">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={addOrEditInfo}
                  >
                    Submit
                  </button>
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
                  {name}
                  <span className="profile-age">, {age}</span>
                </h3>
              </div>
              <div className="user-travel-type">{travellerType}</div>
              <div className="user-profession">{profession}</div>
              <hr className="my-4" />
              <div className="user-about">
                <h3>About</h3>
                <p>{aboutMe}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
