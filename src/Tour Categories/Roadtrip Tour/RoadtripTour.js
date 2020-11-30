import React, { useState } from "react";
import TourHeader from "../Reusable components/TourHeader";
import Road from "../../assests/Roadtrip.jpg";

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
  const [carRent, setCarRent] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState(false);
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
  let random;
  let formatedMonth;

  // useEffect(() => {
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

  const desc = `“It is all about the journey and not the destination.” If this is your mantra, a road trip is the best option for you! A road trip lets you experience the scenic beauty of the places you go by unlike taking a train or a flight. We provide you with appropriate route plans and recommendations of restaurants, fuel stations, etc. We do plan it all out for you, but the decision of what to explore and what not still remains with you.`;
  return (
    <div className="Roadtrip_tour-container">
      <TourHeader
        image={Road}
        title={"Road Trip"}
        description={desc}
        className={"Planned-form-container"}
      />
      <div className="Planned-form-container">
        <div
          className={
            step == 1 ? "planned_tour-form-selected" : "planned_tour-form"
          }
        >
          <h1>Road Trip</h1>
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

export default RoadtripTour;
