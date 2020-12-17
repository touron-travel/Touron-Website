import React, { useContext, useState, useEffect } from "react";
import "./Visa.css";
import { ApiContext } from "../Context/ApiContext";
import axios from "axios";
import { API } from "../backend";
import { Link } from "react-scroll";
import { Form, Input } from "reactstrap";
import { firedb } from "../firebase";
import { isAuthenticated } from "../Login components/auth";
import { useToasts } from "react-toast-notifications";
import { noAuto } from "@fortawesome/fontawesome-svg-core";

const Visa = () => {
  const { countries } = useContext(ApiContext);
  const backgroundImage = {
    backgroundImage: `url('https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1081&q=80')`,
  };

  const [countryName, setCountryName] = useState("");
  const [visaDetails, setVisaDetails] = useState({});
  console.log(visaDetails.selfEmployedDocs, "de");
  const [personType, setPersonType] = useState("");
  const [show, setshow] = useState(false);
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [travelMonth, setTravelMonth] = useState("");
  const [workType, setWorkType] = useState("");
  const [country, setCountry] = useState("");
  const [persons, setPersons] = useState(0);
  const [uid, setUid] = useState("");
  const { addToast } = useToasts();

  console.log("name", name);
  console.log("country", country);
  console.log("number", number);
  console.log("travelMonth", travelMonth);
  console.log("workType", workType);
  console.log("persons", persons);

  console.log("step", step);

  const getVisaDetails = async (countryName) => {
    console.log("countryName", countryName);
    try {
      const visaResponse = await axios.get(`${API}/visa/${countryName}`);
      console.log("visaResponse", visaResponse.data);
      setVisaDetails(...visaResponse.data);
      setshow(true);
    } catch (err) {
      console.log(err, "err");
    }
  };

  const nextStep = () => {
    if (step === 0) setStep(step + 1);
  };
  const prevStep = () => {
    if (step === 1) setStep(step - 1);
  };

  useEffect(() => {
    if (isAuthenticated()) {
      const { user } = isAuthenticated();
      setUid(user.uid);
    }
  }, []);

  const addOrEditInfo = (e) => {
    e.preventDefault();
    let values = {
      userID: uid,
      name: name,
      phoneNumber: number,
      countryName: country,
      workType: workType,
      travelMonth: travelMonth,
      persons: persons,
      status: "Received",
    };
    firedb
      .ref(`visaSubmission`)
      .push(values)
      .then(() => {
        addToast("Visa Requested Successfully", {
          appearance: "success",
        });
      })
      .catch((err) =>
        addToast(err, {
          appearance: "success",
        })
      );
    setName("");
    setNumber("");
    setCountry("");
  };

  const renderItem = () => {
    switch (step) {
      case 0:
        return (
          <div className="salaried-details">
            <h1>Document Required</h1>
            <p>{visaDetails.salaryDocs.salaryDocsRequired}</p>
            <h1>Financials</h1>
            <p>{visaDetails.salaryDocs.salaryFinancials}</p>
            <h1>Submission</h1>
            <p>{visaDetails.salaryDocs.salarySubmission}</p>
            <h1>Appointment</h1>
            <p>{visaDetails.salaryDocs.salaryAppointment}</p>
            <h1>Honeymooners</h1>
            <p>{visaDetails.salaryDocs.salaryHoneymooners}</p>
            <h1>Duration</h1>
            <p>{visaDetails.salaryDocs.salaryDuration}</p>
            <h1>Photograph</h1>
            <p>{visaDetails.salaryDocs.salaryPhotography}</p>
          </div>
        );
      case 1:
        return (
          <div className="selfEmployed-details">
            <h1>Document Required</h1>
            <p>{visaDetails.selfEmployedDocs.selfEmployedDocsRequired}</p>
            <h1>Financials</h1>
            <p>{visaDetails.selfEmployedDocs.selfEmployedFinancials}</p>
            <h1>Submission</h1>
            <p>{visaDetails.selfEmployedDocs.selfEmployedSubmission}</p>
            <h1>Appointment</h1>
            <p>{visaDetails.selfEmployedDocs.selfEmployedAppointment}</p>
            <h1>Honeymooners</h1>
            <p>{visaDetails.selfEmployedDocs.selfEmployedHoneymooners}</p>
            <h1>Duration</h1>
            <p>{visaDetails.selfEmployedDocs.selfEmployedDuration}</p>
            <h1>Photograph</h1>
            <p>{visaDetails.selfEmployedDocs.selfEmployedPhotography}</p>
          </div>
        );
    }
  };

  return (
    <>
      <div className="visa-container" style={backgroundImage}>
        <h1>Choose the country</h1>
        <div className="visa-country-search">
          <select
            placeholder="Select the country"
            onChange={(e) => {
              setCountryName(e.target.value);
              getVisaDetails(e.target.value);
            }}
          >
            {countries.map((c, index) => {
              return (
                <option
                  key={index}
                  value={c.countryName}
                  className="visa-option"
                >
                  {c.countryName}
                </option>
              );
            })}
          </select>
        </div>
        <Link to="visa-details" duration={500} smooth={true}>
          <button>Next</button>
        </Link>
      </div>
      {show ? (
        <div className="visa-details">
          <div className="visa-details-categories">
            <h4
              className={step === 0 ? "salaried" : "none"}
              onClick={() => prevStep()}
            >
              Salaried
            </h4>
            <h4
              className={step === 1 ? "selfEmployed" : "none"}
              onClick={() => nextStep()}
            >
              Self Employed
            </h4>
          </div>
          <div className="visa-country">
            <img
              className="visa-country-image"
              src={visaDetails.imageUrl}
              alt=""
            />
            <h4 className="visa-name">Visa</h4>
            <i className="fa fa-chevron-right"></i>
            <h4 className="visa-countryName"> {visaDetails.countryName}</h4>
          </div>
          <div className="visa-content">
            <div className="visa-content-details">{renderItem()}</div>
            <div className="visa-content-form">
              <div className="visa-content-from-head">
                <h3>Visa Request</h3>
              </div>
              <Form>
                <div className="visa-group">
                  <label className="visa-label">Name</label>
                  <input
                    type="text"
                    className="user-input-alter user-input"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="visa-group">
                  <label className="visa-label">Country Name</label>
                  <input
                    type="text"
                    className="user-input-alter user-input"
                    value={visaDetails.countryName}
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                  />
                </div>
                <div className="visa-group">
                  <label className="visa-label">Phone Number</label>
                  <input
                    type="number"
                    className="user-input-alter user-input"
                    value={number}
                    onChange={(e) => {
                      setNumber(e.target.value);
                    }}
                  />
                </div>
                <div className="visa-group">
                  <label className="visa-label">Number of Persons</label>
                  <input
                    type="number"
                    className="user-input-alter user-input"
                    value={persons}
                    onChange={(e) => {
                      setPersons(e.target.value);
                    }}
                  />
                </div>
                <div className="visa-group">
                  <label className="visa-label">Travel Month</label>
                  <Input
                    type="select"
                    className="user-input-alter user-input"
                    onChange={(e) => setTravelMonth(e.target.value)}
                  >
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </Input>
                </div>
                <div className="visa-group">
                  <label className="visa-label">Work Type</label>
                  <Input
                    type="select"
                    className="user-input-alter user-input"
                    onChange={(e) => setWorkType(e.target.value)}
                  >
                    <option value="Salaried">Salaried</option>
                    <option value="SelfEmployed">Self Employed</option>
                  </Input>
                </div>
                <div className="user-button">
                  <button className="btn btn-visa" onClick={addOrEditInfo}>
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Visa;
