import React, { Component, useState } from "react";
import TourHeader from "../Reusable components/TourHeader";
import Surprise from "../../assests/Surprise.jpg";

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
  let random;
  let formatedMonth;

  //   useEffect(() => {
  //     random = Math.floor((Math.random() + 4) * 345334 * Math.random());
  //     const requestDate = new Date();
  //     let currentYear = requestDate.getFullYear();
  //     setDate(requestDate.getDate());
  //     setMonth(requestDate.getMonth() + 1);
  //     setYear(currentYear.toString().slice(2, 5));
  //     formatedMonth = month < 10 ? "0" + month : month;
  //   });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => {
    if (step !== 1) setStep(step - 1);
  };
  const renderForm = (step) => {
    switch (step) {
      case 1:
        return <h1>1</h1>;
      case 2:
        return <h1>2</h1>;
      case 3:
        return <h1>3</h1>;
      case 4:
        return <h1>4</h1>;
      case 5:
        return <h1>5</h1>;
      case 6:
        return <h1>6</h1>;
    }
  };

  const desc = `We surprise you with the best suitable location within your budget and according to your travel preferences. We don’t have concrete itineraries as we believe that you should decide where you want to invest your money. We also recommend various things to do which you can book yourself or we can book upon your confirmation.`;

  return (
    <div className="Surprise_tour-container">
      <TourHeader
        image={Surprise}
        title={"Surprise Tour"}
        description={desc}
        className={"Planned-form-container"}
      />
      <div className="Planned-form-container">
        <div
          className={
            step == 1 ? "planned_tour-form-selected" : "planned_tour-form"
          }
        >
          <h1>Surprise Tour</h1>
          <div className="planned_form">{renderForm(step)}</div>
          <div className="navigation_btn">
            <div className="previous-button" onClick={() => prevStep()}>
              Previous
            </div>
            <div className="next-button" onClick={() => nextStep()}>
              Next
            </div>
          </div>
        </div>
        <div
          className={
            step == 1 ? "planned_tour-details-selected" : "planned_tour-details"
          }
        >
          bbxb
        </div>
      </div>
    </div>
  );
};

export default SurpriseTour;
