import React, { useContext, useState, useEffect } from "react";
import visa from "../assests/visa.jpg";
import "./Visa.css";
import { ApiContext } from "../Context/ApiContext";
import axios from "axios";
import { API } from "../backend";
import { Link } from "react-scroll";

const Visa = () => {
  const { countries } = useContext(ApiContext);
  const backgroundImage = {
    backgroundImage: `url('https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1081&q=80')`,
  };

  const [countryName, setCountryName] = useState("");
  const [visaDetails, setVisaDetails] = useState({});
  const [personType, setPersonType] = useState("");
  const [show, setshow] = useState(false);
  const [step, setStep] = useState(0);

  const getVisaDetails = async () => {
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
          <select placeholder="Select the country">
            {countries.map((c, index) => {
              return (
                <option
                  key={index}
                  value={c.countryName}
                  className="visa-option"
                  onChange={() => setCountryName(e.target.value)}
                >
                  {c.countryName}
                </option>
              );
            })}
          </select>
        </div>
        <Link to="visa-details" duration={500} smooth={true}>
          <button
            onClick={(e) => {
              getVisaDetails();
            }}
          >
            Next
          </button>
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
          {renderItem()}
        </div>
      ) : null}
    </>
  );
};

export default Visa;
