import React, { useContext, useState, useEffect } from "react";
import visa from "../assests/visa.jpg";
import "./visa.css";
import { ApiContext } from "../Context/ApiContext";
import axios from "axios";
import { API } from "../backend";
import { Link } from "react-scroll";
const Visa = () => {
  const { countries } = useContext(ApiContext);
  const backgroundImage = {
    backgroundImage: `url(${visa})`,
  };

  const getVisaDetails = async (countryName) => {
    console.log("countryName", countryName);
    try {
      const visaResponse = await axios.get(`${API}/visa/${countryName}`);
      console.log("visaResponse", visaResponse);
      setVisaDetails(...visaResponse.data);
    } catch (err) {
      console.log(err, "err");
    }
  };

  const [countryName, setCountryName] = useState("");
  const [visaDetails, setVisaDetails] = useState({});
  console.log(visaDetails.selfEmployedDocs, "de");
  const [personType, setPersonType] = useState("");
  const [step, setStep] = useState(1);
  const [show, setShow] = useState(true);

  const renderPage = (step) => {
    switch (step) {
      case 1:
        return (
          <>
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
                    <option key={index} value={c.countryName}>
                      {c.countryName}
                    </option>
                  );
                })}
              </select>
            </div>
            <button onClick={() => setStep(step + 1)}>Next</button>
          </>
        );

      case 2:
        return (
          <>
            <h1>Choose the Type</h1>
            <div className="visa-country-search"></div>
            <div className="person-type">
              <div
                onClick={() => {
                  setShow(true);
                  setPersonType("Salaried");
                }}
                className="salaried"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <i
                  className={
                    personType == "Salaried"
                      ? "salaried-selected fas fa-id-card"
                      : "fas fa-id-card"
                  }
                ></i>
                <h6>salaried</h6>
              </div>
              <div
                onClick={() => {
                  setShow(true);
                  setPersonType("SelfEmployed");
                }}
                className="selfemployed"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <i
                  className={
                    personType == "SelfEmployed"
                      ? " selfemployed-selected fas fa-user-tie"
                      : "fas fa-user-tie"
                  }
                ></i>
                <h6>Self Employed</h6>
              </div>
            </div>
            <div className="buttons">
              <button onClick={() => setStep(step - 1)}>Back</button>
              <Link to="visa-details" duration={500} smooth={true}>
                <button>Fetch details</button>
              </Link>
            </div>
          </>
        );
    }
  };
  return (
    <div>
      <div className="visa-container" style={backgroundImage}>
        {renderPage(step)}
      </div>
      <div
        className="visa-details-container"
        style={{ display: show ? "flex" : "none" }}
      >
        <div className="visa-details">
          <h1>
            Visa Details for {countryName} : {personType}
          </h1>
        </div>
        <div className="visa-form"></div>
      </div>
    </div>
  );
};

export default Visa;
