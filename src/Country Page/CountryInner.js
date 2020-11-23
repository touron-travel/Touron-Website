import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CountryInner.css";
import axios from "axios";
import { API } from "../backend";
import SimilarTour from "./SimilarTour";
import CountryInnerDetails from "./CountyInnerDetails";
import {
  SemipolarLoading,
  RectGraduallyShowLoading,
  CircleLoading,
} from "react-loadingg";

const CountryInner = () => {
  const { countryid, countryname } = useParams();

  const [countryDetails, setCountryDetails] = useState({});
  console.log(countryDetails, "cd");

  const [tourDetails, setTourDetails] = useState([]);
  const [cityDetails, setCityDetails] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedTour, setSelectedTour] = useState("");
  const [countryLoaded, setCountryLoaded] = useState(false);
  // const [cityLoaded, setCityLoaded] = useState(false);
  const [tourLoaded, setTourLoaded] = useState(false);

  console.log(selectedCity, "name");

  const getCountries = async () => {
    setCountryLoaded(true);
    try {
      const countryResponse = await axios.get(
        `${API}/country/edit/${countryid}`
      );
      setCountryDetails(countryResponse.data);
      setCountryLoaded(false);
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
    } catch (err) {
      console.log(err, "err");
    }
  };
  const getTours = async () => {
    setTourLoaded(true);
    try {
      const tourResponse = await axios.get(
        `${API}/tour/countryname/${countryname}`
      );
      setTourDetails(tourResponse.data);
      setTourLoaded(false);
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
      {countryLoaded ? (
        <SemipolarLoading
          style={{
            top: "150px",
            alignItems: "center",
            left: "48%",
          }}
          // color="#4834d4"
          size="large"
        />
      ) : (
        <CountryInnerDetails
          countryDetails={countryDetails}
          cityDetails={cityDetails}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />
      )}
      {tourLoaded ? (
        <SemipolarLoading
          style={{
            top: "150px",
            alignItems: "center",
            left: "48%",
          }}
          // color="#4834d4"
          size="large"
        />
      ) : (
        <>
          {tourDetails.length === 0 ? null : (
            <SimilarTour
              tour={tourDetails}
              selectedTour={selectedTour}
              setSelectedTour={setSelectedTour}
            />
          )}
        </>
      )}
    </div>
  );
};

export default CountryInner;
