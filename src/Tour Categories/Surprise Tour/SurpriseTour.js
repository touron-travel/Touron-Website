import React, { useState, useEffect } from "react";
import TourHeader from "../Reusable components/TourHeader";
import Surprise from "../../assests/Surprise.jpg";
import Tourtype from "../Reusable components/Tourtype";
import Travellertype from "../Reusable components/Travellertype";
import Touristnumber from "../Reusable components/Touristnumber";
import Travelmode from "../Reusable components/Travelmode";
import TouristDate from "../Reusable components/TouristDate";
import Checkout from "../Reusable components/Checkout";
import Tourpreferance from "../Reusable components/Tourpreferance";
import Expediture from "../Reusable components/Expediture";
import Modals from "../Modal";
import { isAuthenticated } from "../../Login components/auth";

const SurpriseTour = (params) => {
  const [tourType, setTourType] = React.useState("");
  const [travellerType, setTravellerType] = React.useState("");
  const [adult, setAdult] = React.useState(0);
  const [children, setChildren] = React.useState(0);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [travelMode, setTravelMode] = React.useState("");
  const [expediture1, setExpediture1] = useState("");
  const [expediture2, setExpediture2] = useState("");
  const [expediture3, setExpediture3] = useState("");
  const [tourPreferance, setTourPreferance] = useState("");
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

  //   useEffect(() => {
  //     random = Math.floor((Math.random() + 4) * 345334 * Math.random());
  //     const requestDate = new Date();
  //     let currentYear = requestDate.getFullYear();
  //     setDate(requestDate.getDate());
  //     setMonth(requestDate.getMonth() + 1);
  //     setYear(currentYear.toString().slice(2, 5));
  //     formatedMonth = month < 10 ? "0" + month : month;
  //   });

  const nextStep = () => {
    if (step == 2 && !isLoggedin) {
      openModal();
      return;
    }
    if (step !== 8 && tourType !== "") setStep(step + 1);
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
          <Tourpreferance
            imgSrc1={
              "https://image.freepik.com/free-vector/skydiving-vector-sport-illustration-extreme-sport-background-skydiving-wing-suit_87946-304.jpg"
            }
            imgSrc2={
              "https://image.freepik.com/free-vector/relaxing-concept-illustration_114360-289.jpg"
            }
            imgSrc3={
              "https://image.freepik.com/free-vector/illustration-kathakali-dancer-performing-white-mandala-pattern-background_1302-19495.jpg"
            }
            imgSrc4={
              "https://image.freepik.com/free-vector/backpacker-with-map-search-directions-wilderness_80802-300.jpg"
            }
            tourPreferance={tourPreferance}
            setAdventure={() => setTourPreferance("Adventure")}
            setRelaxation={() => setTourPreferance("Relaxation")}
            setCultural={() => setTourPreferance("Cultural")}
            setExplore={() => setTourPreferance("Explore")}
            nextStep={() => nextStep()}
          />
        );
      case 5:
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
            // setTravelMode={setTravelMode}
          />
        );
      case 6:
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
      case 7:
        return (
          <Expediture
            imgSrc={
              "https://image.freepik.com/free-vector/romantic-car-illustration_166742-180.jpg"
            }
            expediture3={expediture3}
            expediture2={expediture2}
            expediture1={expediture1}
            startPoint={startPoint}
            setStartPoint={(value) => setStartPoint(value)}
            setExpediture3={(value) => setExpediture3(value)}
            setExpediture2={(value) => setExpediture2(value)}
            setExpediture1={(value) => setExpediture1(value)}
          />
        );
      case 8:
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

  const desc = `We surprise you with the best suitable location within your budget and according to your travel preferences. We don’t have concrete itineraries as we believe that you should decide where you want to invest your money. We also recommend various things to do which you can book yourself or we can book upon your confirmation.`;

  return (
    <div className="Surprise_tour-container">
      <Modals modalIsOpen={modalIsOpen} closeModal={closeModal} />

      <TourHeader
        image={Surprise}
        title={"Surprise Tour"}
        description={desc}
        className={"Planned-form-container"}
      />
      <div className="Planned-form-container">
        <div
          className={
            step === 1 && tourType === ""
              ? "planned_tour-form"
              : "planned_tour-form-selected planned_tour-form"
          }
        >
          <h1>Surprise Tour</h1>
          <div className="planned_form">{renderForm(step)}</div>
          <div className="navigation_btn">
            {step == 8 ? (
              <div className="submit-button" onClick={() => nextStep()}>
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
          bbxb
        </div>
      </div>
    </div>
  );
};

export default SurpriseTour;
