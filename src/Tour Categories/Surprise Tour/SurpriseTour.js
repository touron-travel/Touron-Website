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

  return (
    <div className="Surprise_tour-container">
      <TourHeader
        image={Surprise}
        title={"Surprise Tour"}
        description={"asghadfhadh"}
        className={"Surprise_tour"}
      />
      <div className="Surprise_tour">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          sapiente praesentium, reiciendis ipsam placeat blanditiis dolores,
          saepe facere ex minima consectetur harum. Quia incidunt adipisci sit
          assumenda numquam accusamus molestiae dignissimos labore nemo odit,
          aliquam voluptatem expedita autem, laborum temporibus sunt culpa nisi
          facere. Laboriosam molestias quisquam, nisi adipisci ipsum maxime
          labore velit dolor doloribus obcaecati? Eaque nulla ducimus ad id ab,
          minus assumenda, iste impedit nesciunt officia quam culpa fugiat
          deserunt? Hic quibusdam, in nulla aliquam harum libero, reiciendis ea
          quod beatae, eum blanditiis. Possimus reprehenderit, enim iste quidem
          pariatur facilis velit architecto nobis est reiciendis laborum
          explicabo tempora!
        </h1>
      </div>
    </div>
  );
};

export default SurpriseTour;
