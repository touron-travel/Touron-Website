import React, { useState } from "react";
import TourHeader from "../Reusable components/TourHeader";
import Planned from "../../assests/Plannedtour.jpg";

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
  let random;
  let formatedMonth;
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
  const prevStep = () => setStep(step - 1);
  const renderForm = (step) => {
    switch (step) {
      case 1:
        return (
          <TourHeader
            image={Planned}
            title={"Planned Tour"}
            description={desc}
            className={"Planned_tour"}
          />
        );
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
        className={"Planned_tour"}
      />
      <div className="Planned-form-container">
        <div className="plenned_tour-form">{renderForm(step)}</div>
        <div className="planned_tour-details"></div>
      </div>
    </div>
  );
};

export default PlannedTour;
