import React, { useState, useEffect } from "react";
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

const PlannedTour = (params) => {
  const [tourType, setTourType] = useState("");
  const [travellerType, setTravellerType] = useState("");
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
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
  const [dates, setDates] = useState("");
  const [years, setYears] = useState("");
  const [months, setMonths] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);
  let random;
  let formatedMonth;

  useEffect(() => {
    if (isAuthenticated()) return setIsLoggedin(true);
  });

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const submitData = () => {
    console.log(
      tourType,
      travellerType,
      adult,
      children,
      fromDate,
      toDate,
      travelMode,
      preferanece,
      destination,
      startPoint,
      name,
      number,
      budget
    );
  };

  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    random = Math.floor((Math.random() + 4) * 345334 * Math.random());
    const requestDate = new Date();
    let currentYear = requestDate.getFullYear();
    setDate(requestDate.getDate());
    setMonth(requestDate.getMonth() + 1);
    setYear(currentYear.toString().slice(2, 5));
    formatedMonth = month < 10 ? "0" + month : month;
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

      <TourHeader
        image={Planned}
        title={"Planned Tour"}
        description={desc}
        className={"Planned-form-container"}
      />

      <div className="Planned-form-container">
        <div
          className={
            step == 1 && tourType == ""
              ? "planned_tour-form"
              : "planned_tour-form-selected planned_tour-form"
          }
        >
          <h1>Planned Tour</h1>
          <div className="planned_form">{renderForm(step)}</div>
          <div className="navigation_btn">
            {step == 7 ? (
              <div className="submit-button" onClick={() => submitData()}>
                Submit
              </div>
            ) : (
              <>
                <div className="previous-button" onClick={() => prevStep()}>
                  Previous
                </div>
                <div className="next-button" onClick={() => nextStep()}>
                  Next
                </div>
              </>
            )}
          </div>
        </div>
        <div
          className={
            step === 1 && tourType === ""
              ? "planned_tour-details-selected"
              : "planned_tour-details"
          }
        >
          <h1>Selected Categories</h1>
          <ul>
            <li>
              Tour type:
              <span> </span>
              {tourType}
            </li>
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
            <li>
              From Date:
              <span> </span>
              {fromDate}
            </li>
            <li>
              To Date:
              <span> </span>
              {toDate}
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
      </div>
    </div>
  );
};

export default PlannedTour;
