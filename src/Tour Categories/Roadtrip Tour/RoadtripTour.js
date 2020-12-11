import React, { useState, useEffect } from "react";
import TourHeader from "../Reusable components/TourHeader";
import Road from "../../assests/Roadtrip.jpg";
import Travellertype from "../Reusable components/Travellertype";
import Touristnumber from "../Reusable components/Touristnumber";
import TouristDate from "../Reusable components/TouristDate";
import Checkout from "../Reusable components/Checkout";
import Travelmode from "../Reusable components/Travelmode";
import Roadtripques1 from "../Reusable components/Roadtripques1";
import Drivetype from "../Reusable components/Drivetype";
import { isAuthenticated } from "../../Login components/auth";
import Modals from "../Modal";
import Modal from "react-modal";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const RoadtripTour = (params) => {
  const [travelMode, setTravelMode] = React.useState("");
  const [travellerType, setTravellerType] = React.useState("");
  const [adult, setAdult] = React.useState(0);
  const [children, setChildren] = React.useState(0);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [startPoint, setStartPoint] = useState("");
  const [driveDuration, setDriveDuration] = useState("");
  const [driveRestriction, setDriveRestriction] = useState("");
  const [stops, setStops] = useState("");
  const [carRent, setCarRent] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [name, setName] = useState("");
  const [driveType, setDriveType] = useState("");
  const [driverType, setDriverType] = useState("");
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
  // useEffect(() => {
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
    if (step !== 8 && travelMode !== "") setStep(step + 1);
  };
  const prevStep = () => {
    if (step !== 1) setStep(step - 1);
  };
  const renderForm = (step) => {
    switch (step) {
      case 1:
        return (
          <Travelmode
            imgSrc2={
              "https://image.freepik.com/free-vector/couple-love-scooter_89224-2535.jpg"
            }
            imgSrc1={
              "https://image.freepik.com/free-vector/happy-traveler-man-woman-dog-red-trunk-car-back-with-check-point-travel-around-world_48049-454.jpg"
            }
            nextStep={() => nextStep()}
            name1={"Bike"}
            name2={"Car"}
            travelMode={travelMode}
            setTrain={() => setTravelMode("Bike")}
            setFlight={() => setTravelMode("Car")}
          />
        );
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
              setStep(5);
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
      case 5:
        return (
          <Roadtripques1
            imgSrc={
              "https://image.freepik.com/free-vector/car-towing-caravan-trailer-camper-against-mountains-spruce-trees-background-summer-travel-lettering-vehicle-wild-nature-adventure-trip-seasonal-camping-illustration_198278-1324.jpg"
            }
            attr3={startPoint}
            attr1={driveDuration}
            attr2={driveRestriction}
            placeholder1={"Ex.6 hours"}
            placeholder2={" Ex.Veg food only"}
            placeholder3={"Ex.Chennai"}
            que3={"Where will be your starting point ?"}
            que1={"How long would you like to drive? (Optional)"}
            que2={"Any travel or dietary restrictions? (Optional)"}
            func3={(value) => setStartPoint(value)}
            func1={(value) => setDriveDuration(value)}
            func2={(value) => setDriveRestriction(value)}
            className={"roadtripques-img1"}
          />
        );
      case 6:
        return (
          <Roadtripques1
            imgSrc={
              "https://image.freepik.com/free-vector/traveling-car-illustration_126895-243.jpg"
            }
            attr3={stops}
            attr1={additionalInfo}
            attr2={carRent}
            placeholder1={""}
            placeholder2={""}
            placeholder3={"Ex.Food joints"}
            que3={"What kind of stops do you prefer on your drive? (Optional)"}
            que1={
              "Would you like to add extra beds or additional room if travelling as 3/5/7?"
            }
            que2={"Do you need any help in renting a car?"}
            func3={(value) => setStops(value)}
            func1={(value) => setAdditionalInfo(value)}
            func2={(value) => setCarRent(value)}
            className={"roadtripques-img2"}
          />
        );
      case 7:
        return (
          <Drivetype
            driveType={driveType}
            driverType={driverType}
            imgSrc1={
              "https://image.freepik.com/free-vector/modern-blue-urban-adventure-suv-vehicle-illustration_1344-205.jpg"
            }
            imgSrc2={
              "https://image.freepik.com/free-photo/black-urban-sport-two-seater-motorcycle_101266-599.jpg"
            }
            imgSrc3={
              "https://image.freepik.com/free-vector/modern-blue-urban-adventure-suv-vehicle-illustration_1344-205.jpg"
            }
            imgSrc4={
              "https://image.freepik.com/free-photo/black-urban-sport-two-seater-motorcycle_101266-599.jpg"
            }
            setRent={() => setDriveType("Rented Bike/Car")}
            setOwned={() => setDriveType("Own Bike/Car")}
            setSelf={() => setDriverType("Self Drive")}
            setDriver={() => setDriverType("Car Driver needed")}
            nextStep={() => nextStep()}
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

  const desc = `“It is all about the journey and not the destination.” If this is your mantra, a road trip is the best option for you! A road trip lets you experience the scenic beauty of the places you go by unlike taking a train or a flight. We provide you with appropriate route plans and recommendations of restaurants, fuel stations, etc. We do plan it all out for you, but the decision of what to explore and what not still remains with you.`;
  return (
    <div className="Roadtrip_tour-container">
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
              <li>
                Travel mode:
                <span> </span>
                {travelMode}
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
                How long would you like to drive:
                <span> </span>
                {driveDuration}
              </li>
              <li>
                Any travel or dietary restrictions:
                <span> </span>
                {driveRestriction}
              </li>
              <li>
                Where will be your starting point:
                <span> </span>
                {startPoint}
              </li>
              <li>
                Would you like to add extra beds or additional room if
                travelling as 3/5/7:
                <span> </span>
                {additionalInfo}
              </li>
              <li>
                Do you need any help in renting a car:
                <span> </span>
                {carRent}
              </li>
              <li>
                What kind of stops do you prefer on your drive:
                <span> </span>
                {stops}
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
            <Link to="/my-requests">
              <button className="info-button">Go to My Dashboard</button>
            </Link>
            <Link to="/">
              <button className="info-buttons">Go to Home</button>
            </Link>
          </div>
        </Modal>
      </div>
      <TourHeader
        image={Road}
        title={"Road Trip"}
        description={desc}
        className={"Planned-form-container"}
      />
      <div className="Planned-form-container">
        <div className={"planned_tour-form"}>
          <h1>Road Trip</h1>
          <div className="planned_form">{renderForm(step)}</div>
          <div className="navigation_btn">
            <>
              <div className="previous-button" onClick={() => prevStep()}>
                Previous
              </div>
              {step == 8 ? (
                <div className="submit-button" onClick={() => nextStep()}>
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

export default RoadtripTour;
