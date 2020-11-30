import React, { useState } from "react";
import TourHeader from "../Reusable components/TourHeader";
import Planned from "../../assests/Plannedtour.jpg";
import "./Plannedtour.css";
import Tourtype from "../Reusable components/Tourtype";
import { Animate } from "react-rebound";

const PlannedTour = (params) => {
  const [tourType, setTourType] = useState("");
  const [travellerType, setTravellerType] = useState("");
  const [adult, setAdult] = React.useState(0);
  const [children, setChildren] = React.useState(0);
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
  const [clicked, setClicked] = useState(false);
  let random;
  let formatedMonth;
  console.log("tourType :>> ", tourType);
  // const [userInfo, setUserInfo] = useState({});
  // useEffect(() => {
  //   random = Math.floor((Math.random() + 4) * 345334 * Math.random());
  //   const requestDate = new Date();
  //   let currentYear = requestDate.getFullYear();
  //   setDate(requestDate.getDate());
  //   setMonth(requestDate.getMonth() + 1);
  //   setYear(currentYear.toString().slice(2, 5));
  //   formatedMonth = month < 10 ? "0" + month : month;
  // });
  const nextStep = () => setStep(step + 1);
  const prevStep = () => {
    if (step !== 1) setStep(step - 1);
  };
  const renderForm = (step) => {
    switch (step) {
      case 1:
        return <Tourtype tourType={tourType} setTourType={setTourType} />;
      case 2:
        return <h1>jgg</h1>;

      case 3:
        return <Tourtype tourType={tourType} setTourType={setTourType} />;

      case 4:
        return <Tourtype tourType={tourType} setTourType={setTourType} />;

      case 5:
        return <Tourtype tourType={tourType} setTourType={setTourType} />;
    }
  };

  const desc = `This tour is perfect for all busy-bee travel enthusiasts! Our itinerary completely depends on you and your preferences and we personalize the whole tour accordingly.
   We offer you a complete list of things to do, places to visit, etc. and further prepare an appropriate itinerary for you within your budget and according to your travel preferences, making the experience worth every penny!`;

  return (
    <div className="Planned_tour-container">
      <TourHeader
        image={Planned}
        title={"Planned Tour"}
        description={desc}
        className={"Planned-form-container"}
      />

      <div className="Planned-form-container">
        <Animate
          translateX={clicked ? -10 : 0}
          // tension={100}
          friction={800}
        >
          <div
            // className={
            //   step == 1 && tourType === ""
            //     ? "planned_tour-form-selected"
            //     : "planned_tour-form"
            // }
            className="planned_tour-form-selected"
          >
            <h1>Planned Tour</h1>
            <div className="planned_form">{renderForm(step)}</div>
            <div className="navigation_btn">
              <div className="previous-button" onClick={() => prevStep()}>
                Previous
              </div>
              <div
                className="next-button"
                onClick={() => {
                  if (step == 1) {
                    setClicked(true);
                  }
                  nextStep();
                }}
              >
                Next
              </div>
            </div>
          </div>
        </Animate>
        <Animate
          translateX={clicked ? 10 : 0}
          // tension={100}
          friction={80}
        >
          <div
            className={
              !clicked
                ? "planned_tour-details-selected"
                : "planned_tour-details"
            }
          >
            bbxb
          </div>
        </Animate>
      </div>
    </div>
  );
};

export default PlannedTour;
