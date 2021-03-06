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
import { FcPlus } from "react-icons/fc";
import { RiCloseCircleFill } from "react-icons/ri";
import { Collapse } from "reactstrap";

const Visa = () => {
  const { countries } = useContext(ApiContext);
  const backgroundImage = {
    backgroundImage: `url('https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1081&q=80')`,
  };

  const [countryName, setCountryName] = useState("Thailand");
  const [visaDetails, setVisaDetails] = useState({});
  console.log(visaDetails.selfEmployedDocs, "de");
  const [show, setshow] = useState(false);
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [travelMonth, setTravelMonth] = useState("January");
  const [workType, setWorkType] = useState("Salaried");
  const [country, setCountry] = useState("");
  const [persons, setPersons] = useState();
  const [uid, setUid] = useState("");
  const { addToast } = useToasts();
  const [collapseOpen, setCollapseOpen] = useState();

  const toggle = (index) => {
    if (collapseOpen === index) {
      setCollapseOpen();
    } else {
      setCollapseOpen(index);
    }
  };

  console.log("collapseOpen", collapseOpen);

  const getVisaDetails = async (countryName) => {
    console.log("countryName", countryName);
    try {
      const visaResponse = await axios.get(`${API}/visa/${countryName}`);
      console.log("visaResponse", visaResponse.data);
      setVisaDetails(...visaResponse.data);
      setCountry(visaResponse.data[0].countryName);
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
      downloadUrl: "",
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
    setPersons(0);
  };

  const renderItem = () => {
    switch (step) {
      case 0:
        const VisaQuestionSalaried = [
          {
            question: "What are the Document Required ?",
            answer: visaDetails.salaryDocs.salaryDocsRequired,
          },
          {
            question: "Financials Requirements needed",
            answer: visaDetails.salaryDocs.salaryFinancials,
          },
          {
            question: "Where the docs should be Submitted ?",
            answer: visaDetails.salaryDocs.salarySubmission,
          },
          {
            question: "Where i can get the Appointment ?",
            answer: visaDetails.salaryDocs.salaryAppointment,
          },
          {
            question: "Details for Honeymooners",
            answer: visaDetails.salaryDocs.salaryHoneymooners,
          },
          {
            question: "How long the duration will be ?",
            answer: visaDetails.salaryDocs.salaryDuration,
          },
          {
            question: "What are the Photograph that needed ?",
            answer: visaDetails.salaryDocs.salaryPhotography,
          },
        ];

        return (
          <div className="salaried-details">
            {VisaQuestionSalaried.map((q, index) => {
              return (
                <div className="questionss" key={index}>
                  <div className="visa-questionss">
                    <h1>{q.question}</h1>
                    {collapseOpen === index ? (
                      <RiCloseCircleFill
                        onClick={() => toggle(index)}
                        size={30}
                        className="que-icon"
                        color="red"
                      />
                    ) : (
                      <FcPlus
                        onClick={() => toggle(index)}
                        size={30}
                        className="que-icon"
                      />
                    )}
                  </div>
                  <Collapse isOpen={collapseOpen === index}>
                    <p>{q.answer}</p>
                  </Collapse>
                </div>
              );
            })}
          </div>
        );
      case 1:
        const VisaQuestionSelfEmployed = [
          {
            question: "What are the Document Required ?",

            answer: visaDetails.selfEmployedDocs.selfEmployedDocsRequired,
          },
          {
            question: "Financials Requirements needed",
            answer: visaDetails.selfEmployedDocs.selfEmployedFinancials,
          },
          {
            question: "Where the docs should be Submitted ?",

            answer: visaDetails.selfEmployedDocs.selfEmployedSubmission,
          },
          {
            question: "Where i can get the Appointment ?",

            answer: visaDetails.selfEmployedDocs.selfEmployedAppointment,
          },
          {
            question: "Details for Honeymooners",
            answer: visaDetails.selfEmployedDocs.selfEmployedHoneymooners,
          },
          {
            question: "How long the duration will be ?",
            answer: visaDetails.selfEmployedDocs.selfEmployedDuration,
          },
          {
            question: "What are the Photograph that needed ?",

            answer: visaDetails.selfEmployedDocs.selfEmployedPhotography,
          },
        ];
        return (
          <div className="selfEmployed-details">
            {VisaQuestionSelfEmployed.map((q, index) => {
              return (
                <div className="questionss" key={index}>
                  <div className="visa-questionss">
                    <h1>{q.question}</h1>
                    {collapseOpen === index ? (
                      <RiCloseCircleFill
                        onClick={() => toggle(index)}
                        size={30}
                        className="que-icon"
                        color="red"
                      />
                    ) : (
                      <FcPlus
                        onClick={() => toggle(index)}
                        size={30}
                        className="que-icon"
                      />
                    )}
                  </div>
                  <Collapse isOpen={collapseOpen === index}>
                    <p>{q.answer}</p>
                  </Collapse>
                </div>
              );
            })}
          </div>
        );

        default:
          break;
    }

  };

  return (
    <>
      <div className="visa-container" style={backgroundImage}>
        <h1>Choose the country</h1>
        <div className="visa-country-search">
          <Input
            type="select"
            placeholder="Select the country"
            onChange={(e) => {
              setCountryName(e.target.value);
              getVisaDetails(e.target.value);
            }}
            value={countryName}
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
          </Input>
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
            <i className="fa fa-chevron-right"></i>
            <h4 className="visa-countryName">
              {step === 0 ? "Salaried" : "Self Employed"}
            </h4>
          </div>
          <div className="visa-content">
            <div className="visa-content-details">{renderItem()}</div>
            <div className="visa-content-form">
              <div className="visa-content-from-head">
                <h3>Apply Visa For {country}</h3>
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
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                  />
                </div>
                <div className="form-row">
                  <div className="visa-group1">
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
                        console.log("e.target.value", e.target.value);
                        setPersons(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="visa-group">
                  <label className="visa-label">Travel Month</label>
                  <Input
                    type="select"
                    className="user-input-alter user-input"
                    onChange={(e) => setTravelMonth(e.target.value)}
                    value={travelMonth}
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
                    value={workType}
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
