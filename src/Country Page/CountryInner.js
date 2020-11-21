import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CountryInner.css";
import axios from "axios";
import { API } from "../backend";
import SimilarTour from "./SimilarTour";
import CountryInnerDetails from "./CountyInnerDetails";

const CountryInner = () => {
  const { countryid, countryname } = useParams();

  const [countryDetails, setCountryDetails] = useState({});
  console.log(countryDetails, "cd");

  const [tourDetails, setTourDetails] = useState([]);
  const [cityDetails, setCityDetails] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedTour, setSelectedTour] = useState("");
  console.log(selectedCity, "name");

  const getCountries = async () => {
    try {
      const countryResponse = await axios.get(
        `${API}/country/edit/${countryid}`
      );
      setCountryDetails(countryResponse.data);
      console.log(countryResponse.data, "sd");
    } catch (err) {
      console.log(err, "err");
    }
  };
  const getCities = async () => {
    try {
      const cityResponse = await axios.get(
        `${API}/city/countryname/${countryname}`
      );
      setCityDetails(cityResponse.data);
      console.log(cityResponse.data, "jh");
    } catch (err) {
      console.log(err, "err");
    }
  };
  const getTours = async () => {
    try {
      const tourResponse = await axios.get(
        `${API}/tour/countryname/${countryname}`
      );
      setTourDetails(tourResponse.data);
      console.log(tourResponse.data, "jhjh");
    } catch (err) {
      console.log(err, "err");
    }
  };

  const getFirstCityName = () => {
    setTimeout(() => {
      console.log(cityDetails.length, "p");
      if (cityDetails.length > 0 && selectedCity == "") {
        setSelectedCity(cityDetails[0].cityName);
        console.log(cityDetails[0], "op");
      }
    }, 2000);
  };
  getFirstCityName();
  useEffect(() => {
    getCountries();
  }, []);
  useEffect(() => {
    getCities();
  }, []);
  useEffect(() => {
    getTours();
  }, []);

  return (
    <div className="countryInner_Details">
      <CountryInnerDetails
        countryDetails={countryDetails}
        cityDetails={cityDetails}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
      <SimilarTour
        tour={tourDetails}
        selectedTour={selectedTour}
        setSelectedTour={setSelectedTour}
      />
    </div>
  );
};

export default CountryInner;
