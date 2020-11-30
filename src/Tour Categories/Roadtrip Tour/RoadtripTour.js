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
  return (
    <div className="Roadtrip_tour-container">
      <TourHeader
        image={Road}
        title={"Roadtrip Tour"}
        description={"asghadfhadh"}
        className={"Roadtrip_tour"}
      />
      <div className="Roadtrip_tour">
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

export default RoadtripTour;
