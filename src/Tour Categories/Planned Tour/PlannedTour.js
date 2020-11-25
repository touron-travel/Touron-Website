import React, { useState } from "react";

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

  return (
    <div>
      <h1>Planned tour</h1>
    </div>
  );
};

export default PlannedTour;
