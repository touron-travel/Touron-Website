import React, { useState, useEffect, useContext } from "react";
import TourHeader from "../Reusable components/TourHeader";
import Honeymoon from "../../assests/Honeymoon.jpg";

import { isAuthenticated } from "../../Login components/auth";
import Modal from "react-modal";
import Tourtype from "../Reusable components/Tourtype";
import Modals from "../Modal";
import TouristDate from "../Reusable components/TouristDate";
import Checkout from "../Reusable components/Checkout";
import LuxuryDestination from "../Reusable components/LuxuryDestination";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { firedb } from "../../firebase";
import Travelmode from "../Reusable components/Travelmode";
import { ApiContext } from "../../Context/ApiContext";

const HoneymoonTour = () => {
  const { userInfo } = useContext(ApiContext);
  const [tourType, setTourType] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [travelMode, setTravelMode] = useState("");
  const [preferanece, setPreferanece] = useState("");
  const [destination, setDestination] = useState("");
  const [startPoint, setStartPoint] = useState("");
  const [name, setName] = useState(userInfo.name);
  const [budget, setBudget] = useState("");
  const [number, setNumber] = useState(userInfo.phoneNumber);
  const [step, setStep] = useState(1);
  const [date, setDate] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const { user } = isAuthenticated();
  const [isLoggedin, setIsLoggedin] = useState(false);
  let random;
  let formatedMonth;
  console.log("step :>> ", step);
  useEffect(() => {
    if (isAuthenticated()) return setIsLoggedin(true);
  });

  console.log("name,number :>> ", name, number);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [formModalIsOpen, setFormModalOpen] = useState(false);

  const customFormModalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      borderRadius: "20px",
      boxShadow: "1px 3px 1px #9E9E9E",
    },
    overlay: { zIndex: 1000 },
  };

  const submitData = () => {
    let values = {
      fromDate: fromDate.toDateString(),
      toDate: toDate.toDateString(),
      tourType: tourType,
      travelMode: travelMode,
      preferanece: preferanece,
      destination: destination,
      startPoint: startPoint,
      name: name,
      number: number,
      budget: budget,
      requestID: `T0-${date}${formatedMonth}${year}-${random}`,
      status: "Query Received",
      plans: "",
      reports: "",
      tourCost: 0,
      userID: user.uid,
      tourCategory: "Honeymoon Trip",
    };

    console.log("values :>> ", values);
    firedb
      .ref(`requests`)
      .push(values)
      .then((data) => {
        openFormModal();
      })
      .catch((err) => console.log("err", err));
  };
  const openFormModal = () => {
    setFormModalOpen(true);
  };
  const closeFormModal = () => {
    setFormModalOpen(false);
  };

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    random = Math.floor((Math.random() + 4) * 345334 * Math.random());
    const requestDate = new Date();
    let currentYear = requestDate.getFullYear();
    setDate(requestDate.getDate());
    setMonth(requestDate.getMonth() + 1);
    setYear(currentYear.toString().slice(2, 4));
    formatedMonth = month < 10 ? "0" + month : month;
  });
  const nextStep = () => {
    if (step === 2 && !isLoggedin) {
      openModal();
      return;
    }

    if (fromDate === "" && toDate === "") {
      return;
    }
    if (step !== 5 && tourType !== "") setStep(step + 1);
  };
  const prevStep = () => {
    if (step !== 1) setStep(step - 1);
  };

  const renderForm = (step) => {
    switch (step) {
      case 1:
        return <Tourtype tourType={tourType} setTourType={setTourType} />;
      case 2:
        return (
          <Travelmode
            imgSrc1={
              "https://image.freepik.com/free-vector/train-ride-railroad_1308-11154.jpg"
            }
            imgSrc2={
              "https://image.freepik.com/free-vector/airplane-sky_1308-31202.jpg"
            }
            nextStep={() => nextStep()}
            name1={"Train"}
            name2={"Flight"}
            travelMode={travelMode}
            setTrain={() => setTravelMode("Train")}
            setFlight={() => setTravelMode("Flight")}
          />
        );
      case 3:
        return (
          <TouristDate
            imgSrc={
              "https://image.freepik.com/free-vector/build-your-program-appointment-booking_23-2148552954.jpg"
            }
            fromDate={fromDate}
            toDate={toDate}
            setFromDate={setFromDate}
            setToDate={setToDate}
          />
        );
      case 4:
        return (
          <LuxuryDestination
            imgSrc={
              "https://image.freepik.com/free-vector/destination-concept-illustration_114360-453.jpg"
            }
            destination={destination}
            preferanece={preferanece}
            startPoint={startPoint}
            setDestination={(value) => setDestination(value)}
            setStartPoint={(value) => setStartPoint(value)}
            setPreferanece={(value) => setPreferanece(value)}
          />
        );
      case 5:
        return (
          <Checkout
            imgSrc={
              "https://image.freepik.com/free-vector/self-checkout-concept-illustration_114360-2331.jpg"
            }
            setName={(value) => setName(value)}
            setNumber={(value) => setNumber(value)}
            setBudget={(value) => setBudget(value)}
            name={name}
            number={number}
            budget={budget}
          />
        );
    }
  };

  Modal.setAppElement("#root");

  const desc = `We surprise you with the best suitable location within your budget and according to your travel preferences. We don’t have concrete itineraries as we believe that you should decide where you want to invest your money. We also recommend various things to do which you can book yourself or we can book upon your confirmation.`;

  return (
    <div className="Luxury_tour-container">
      <Modals modalIsOpen={modalIsOpen} closeModal={closeModal} />

      <TourHeader
        image={Honeymoon}
        title={"Honeymoon Tour"}
        description={desc}
        className={"Planned-form-container"}
      />
      <div className="Planned-form-container">
        <Modal
          isOpen={formModalIsOpen}
          onRequestClose={closeFormModal}
          style={customFormModalStyles}
          shouldCloseOnOverlayClick={false}
        >
          <div className="modal-close">
            <AiFillCloseCircle size={30} onClick={closeFormModal} />
          </div>

          <div className="tour-info">
            <h1>Tour Informations</h1>
            <ul>
              <li>Tour type:</li>
              <li>{tourType}</li>
              <li>
                Travel Mode:
                <span> </span>
                {travelMode}
              </li>

              <li>
                Enter the holiday destination you want to travel:
                <span> </span>
                {destination}
              </li>
              <li>
                From where would you like to start your journey:
                <span> </span>
                {startPoint}
              </li>
              <li>
                Your preferences when you travel:
                <span> </span>
                {preferanece}
              </li>
              <li>
                Enter your Name:
                <span> </span>
                {name}
              </li>
              <li>
                Your Budget:
                <span> </span>
                {budget}
              </li>
              <li>
                Whatsapp Number:
                <span> </span>
                {number}
              </li>
            </ul>
          </div>
          <div className="info-tour-buttons">
            <Link to="/profile/my-requests">
              <button className="info-button">Go to My Dashboard</button>
            </Link>
            <Link to="/">
              <button className="info-buttons">Go to Home</button>
            </Link>
          </div>
        </Modal>
        <div className={"planned_tour-form"}>
          <h1>Honeymoon Trip</h1>
          <div className="planned_form">{renderForm(step)}</div>
          <div className="navigation_btn">
            <>
              <div className="previous-button" onClick={() => prevStep()}>
                Previous
              </div>
              {step === 5 ? (
                <div
                  className="submit-button"
                  onClick={() => {
                    submitData();
                  }}
                >
                  Submit
                </div>
              ) : (
                <div className="next-button" onClick={() => nextStep()}>
                  Next
                </div>
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoneymoonTour;
