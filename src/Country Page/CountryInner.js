import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./CountryInner.css";
const CountryInner = () => {
  //   const { country } = useLocation();
  let data = {
    visa: {
      onArrival: "Yes",
      cost: 0,
    },
    general: {
      bestTimeToVisit: [
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      currency: "Maldivian rufiyaa",
      timeZone: "-30 min",
    },
    _id: "5ef5f055db65dc0017ca6936",
    countryName: "Maldives",
    aboutCountry:
      "The Maldives, officially the Republic of Maldives, is a small island nation in South Asia, located in the Arabian Sea of the Indian Ocean. It lies southwest of Sri Lanka and India, about 1,000 kilometres from the Asian continent",
    idealDays: "4-5 days",
    imageUrl:
      "https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    weather: "26 to 32",
    bestPlaces: "Male",
    __v: 0,
    createdAt: "2020-08-26T07:54:32.309Z",
    updatedAt: "2020-09-04T07:17:10.894Z",
  };
  let cityNames = ["asadf", "safsa", "dfsad", "afasd", "safsa"];
  const [countryDetails, setCountryDetails] = useState(data);

  //   console.log(country, "name");
  return (
    <div className="countryInner_Details">
      <div className="countryInner_image">
        <img src={countryDetails.imageUrl} />
      </div>

      <div className="countryInner_cities">
        <div className="cityName_container">
          {cityNames.map((city) => (
            <h2>{city}</h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryInner;
