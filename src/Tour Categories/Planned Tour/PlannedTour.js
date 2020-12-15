import React, { useState, useEffect, useContext } from "react";
import TourHeader from "../Reusable components/TourHeader";
import Planned from "../../assests/Plannedtour.jpg";
import "./Plannedtour.css";
import Tourtype from "../Reusable components/Tourtype";
import Travellertype from "../Reusable components/Travellertype";
import Travelmode from "../Reusable components/Travelmode";
import Destination from "../Reusable components/Destination";
import Checkout from "../Reusable components/Checkout";
import Touristnumber from "../Reusable components/Touristnumber";
import TouristDate from "../Reusable components/TouristDate";
import { isAuthenticated } from "../../Login components/auth";
import Modals from "../Modal";
import Modal from "react-modal";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, Redirect } from "react-router-dom";
import { ApiContext } from "../../Context/ApiContext";
import { firedb } from "../../firebase";

const PlannedTour = (params) => {
  const [tourType, setTourType] = useState("");
  const [travellerType, setTravellerType] = useState("");
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [travelMode, setTravelMode] = React.useState("");
  const [preferanece, setPreferanece] = React.useState("");
  const [destination, setDestination] = useState("");
  const [startPoint, setStartPoint] = useState("");
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");
  const [number, setNumber] = useState("");
  const [step, setStep] = useState(1);
  const [date, setDate] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const { uid } = useContext(ApiContext);
  const [isLoggedin, setIsLoggedin] = useState(false);
  let random;
  let formatedMonth;
  console.log("fromDate,toDate", fromDate, toDate);
  useEffect(() => {
    if (isAuthenticated()) return setIsLoggedin(true);
  });

  const [modalIsOpen, setIsOpen] = useState(false);
  const [formModalIsOpen, setFormModalOpen] = useState(false);

  const customFormModalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      // marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "20px",
      boxShadow: "1px 3px 1px #9E9E9E",
    },
    overlay: { zIndex: 1000 },
  };

  Modal.setAppElement("#root");

  const openFormModal = () => {
    setFormModalOpen(true);
  };
  const closeFormModal = () => {
    setFormModalOpen(false);
    // return <Redirect to="/" />;
  };

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const submitData = () => {
    let values = {
      fromDate: fromDate,
      toDate: toDate,
      tourType: tourType,
      travellerType: travellerType,
      adult: adult,
      children: children,
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
      userID: uid,
      tourCategory: "Planned Tour",
    };
    firedb
      .ref(`requests`)
      .push(values)
      .then((data) => console.log("data", data))
      .catch((err) => console.log("err", err));
  };

  useEffect(() => {
    random = Math.floor((Math.random() + 4) * 345334 * Math.random());
    const requestDate = new Date();
    let currentYear = requestDate.getFullYear();
    setDate(requestDate.getDate());
    setMonth(requestDate.getMonth() + 1);
    console.log("currentYear", currentYear);
    setYear(currentYear.toString().slice(2, 4));
    console.log("year", year);
    formatedMonth = month < 10 ? "0" + month : month;
    console.log("object", `T0-${date}${formatedMonth}${year}-${random}`);
  });
  const nextStep = () => {
    if (step == 2 && !isLoggedin) {
      openModal();
      return;
    }
    if (step !== 7 && tourType !== "") setStep(step + 1);
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
          <Travellertype
            imgSrc1={
              "https://image.freepik.com/free-vector/local-tourism-concept_23-2148606915.jpg"
            }
            imgSrc2={
              "https://image.freepik.com/free-vector/big-happy-family-with-flat-design_23-2147834774.jpg"
            }
            imgSrc3={
              "https://image.freepik.com/free-vector/group-happy-students-with-backpacks-books-stand-together_131590-216.jpg"
            }
            imgSrc4={
              "https://image.freepik.com/free-vector/newlywed-couple-is-driving-car-their-honeymoon_3446-291.jpg"
            }
            travellerType={travellerType}
            nextStep={() => nextStep()}
            setSolo={() => {
              setTravellerType("Solo");
              setStep(4);
            }}
            setFamily={() => setTravellerType("Family")}
            setFriends={() => setTravellerType("Friends")}
            setGroup={() => setTravellerType("Group")}
          />
        );

      case 3:
        return (
          <Touristnumber
            imgSrc1={
              "https://image.freepik.com/free-vector/illustration-with-young-people-concept_23-2148467324.jpg"
            }
            imgSrc2={
              "https://image.freepik.com/free-vector/smiling-boy-girl-kids-holding-hands-childhood-friendship-concept-love-romance-children-cartoon-characters-flat-vector-illustration-isolated-white-background_71593-450.jpg"
            }
            nextStep={() => nextStep()}
            adult={adult}
            children={children}
            setChildren={(value) => setChildren(value)}
            setAdult={(value) => setAdult(value)}
          />
        );

      case 4:
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
      case 5:
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

      case 6:
        return (
          <Destination
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

      case 7:
        return (
          <Checkout
            imgSrc={
              "https://image.freepik.com/free-vector/business-background-design_1270-63.jpg"
            }
            setName={(value) => setName(value)}
            setNumber={(value) => setNumber(value)}
            setBudget={(value) => setBudget(value)}
            // submitData={() => submitData()}
            name={name}
            number={number}
            budget={budget}
          />
        );
    }
  };

  const desc = `This tour is perfect for all busy-bee travel enthusiasts! Our itinerary completely depends on you and your preferences and we personalize the whole tour accordingly.
   We offer you a complete list of things to do, places to visit, etc. and further prepare an appropriate itinerary for you within your budget and according to your travel preferences, making the experience worth every penny!`;

  return (
    <div className="Planned_tour-container">
      <Modals modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <div className={"planned_tour-details"}>
        <Modal
          isOpen={formModalIsOpen}
          onRequestClose={closeFormModal}
          style={customFormModalStyles}
          // shouldCloseOnOverlayClick={false}
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
                Traveller type:
                <span> </span>
                {travellerType}
              </li>
              <li>
                Adult:
                <span> </span>
                {adult}
              </li>
              <li>
                Children:
                <span> </span>
                {children}
              </li>
              <li>
                Travel mode:
                <span> </span>
                {travelMode}
              </li>
              {/* <li>
              From Date:
              <span> </span>
              {fromDate}
            </li>
            <li>
              To Date:
              <span> </span>
              {toDate}
            </li> */}
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
      </div>
      <TourHeader
        image={Planned}
        title={"Planned Tour"}
        description={desc}
        className={"Planned-form-container"}
      />

      <div className="Planned-form-container">
        <div className={"planned_tour-form"}>
          <h1>Planned Tour</h1>
          <div className="planned_form">{renderForm(step)}</div>
          <div className="navigation_btn">
            <>
              <div className="previous-button" onClick={() => prevStep()}>
                Previous
              </div>
              {step == 7 ? (
                <div
                  className="submit-button"
                  onClick={() => {
                    submitData();
                    openFormModal();
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

export default PlannedTour;
