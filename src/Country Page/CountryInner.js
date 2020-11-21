import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CountryInner.css";
import axios from "axios";
import { API } from "../backend";
import { Link as Links } from "react-dom";
import { Link } from "react-scroll";

const CountryInner = () => {
  const { countryid, countryname } = useParams();

  const [countryDetails, setCountryDetails] = useState({});
  console.log(countryDetails, "cd");

  var sectionStyle = {
    backgroundImage: `url(${countryDetails.imageUrl})`,
  };

  const [tourDetails, setTourDetails] = useState([]);

  const [cityDetails, setCityDetails] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
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

  var settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    arrows: false,
    // slidesToShow: 5,
    // slidesToScroll: 1,
  };

  return (
    <div className="countryInner_Details">
      <div className="countryInner_image" style={sectionStyle}>
        <div className="countryInner_name">
          <h1>{countryDetails.countryName}</h1>
        </div>
      </div>
      <div className="countryInner_cities">
        <div className="cityName_container">
          <Link
            activeClass="active"
            to="countryInner_about"
            // spy={true}
            smooth={true}
            duration={500}
          >
            <p>About</p>
          </Link>
          <Link
            activeClass="active"
            to="highlights"
            // spy={true}
            smooth={true}
            duration={500}
          >
            <p>Cities</p>
          </Link>
          <Link
            activeClass="active"
            to="countryInner_tours"
            // spy={true}
            smooth={true}
            duration={500}
          >
            <p>Tours</p>
          </Link>
        </div>
      </div>
      <div className="countryInner_about">
        <div className="countryInner_aboutLeft">
          <div className="inner_home">
            <div className="icon_home">
              <i className="far fa-home-alt"></i>
            </div>
            <div className="icon_right">
              <i className="fa fa-chevron-right"></i>
            </div>
            <div>
              <span className="inner_title">{countryDetails.countryName}</span>
            </div>
          </div>
          <div className="inner_about">
            <p className="having">Family</p>
            <p className="having"> Romantic</p>
            <p className="having">Adventure</p>
          </div>
          <div className="main_about">
            <div className="inner_name">About {countryDetails.countryName}</div>
            <div className="inner_desc">{countryDetails.aboutCountry}</div>
          </div>
          <div className="available">
            <div className="available-left">
              <div className="available_t">
                <div>
                  <i className="fal fa-map-marker-alt"></i>
                </div>
                <div>
                  <h6>Weather</h6>
                  <p className="locat">{countryDetails.weather} ℃</p>
                </div>
              </div>
              <div className="available_t">
                <div>
                  <i className="fal fa-map-marker-alt"></i>
                </div>
                <div>
                  <h6>Visa On Arrival</h6>

                  <p className="locat">
                    {countryDetails.visa !== undefined
                      ? countryDetails.visa.onArrival
                      : ""}
                  </p>
                </div>
              </div>
              <div className="available_t">
                <div>
                  <i className="fal fa-map-marker-alt"></i>
                </div>
                <div>
                  <h6>Ideal Days</h6>
                  <p className="locat">{countryDetails.idealDays}</p>
                </div>
              </div>
            </div>
            <div className="avalable-right">
              <div className="available_t">
                <div>
                  <i className="fal fa-map-marker-alt"></i>
                </div>
                <div>
                  <h6>Curreny</h6>
                  <p className="locat">
                    {countryDetails.general !== undefined
                      ? countryDetails.general.currency
                      : ""}
                  </p>
                </div>
              </div>
              <div className="available_t">
                <div>
                  <i className="fal fa-map-marker-alt"></i>
                </div>
                <div>
                  <h6>Best time to visit</h6>
                  <p className="locat">
                    {countryDetails.general !== undefined
                      ? countryDetails.general.bestTimeToVisit.join(",")
                      : ""}
                  </p>
                </div>
              </div>
              <div className="available_t">
                <div>
                  <i className="fal fa-map-marker-alt"></i>
                </div>
                <div>
                  <h6>Major Cities</h6>
                  <p className="locat">{countryDetails.bestPlaces}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="countryInner_aboutRight">Content</div>
      </div>
      <div className="highlights">
        <div className="highlights_title">
          <p>Cities</p>
        </div>

        <div className="highlights_image-flex">
          {cityDetails.map((city, index) => {
            return (
              <div
                className="highlights_image"
                key={index}
                onClick={() => setSelectedCity(city.cityName)}
              >
                <img src={city.imageUrl} alt="" />
                <div className="highlights_image-subtitle">{city.cityName}</div>
              </div>
            );
          })}
        </div>

        <div className="highlights_about">
          {cityDetails.map((city, index) => {
            if (city.cityName === selectedCity)
              return (
                <div className="highlights_about-desc" key={index}>
                  <h2>{city.cityName}</h2>
                  <p>{city.aboutCity}</p>
                  {/* <p>{city.famousPlacesToVisit}</p> */}
                </div>
              );
          })}
        </div>
      </div>
      <div className="countryInner_tours">
        <div className="countryInner_tours_title">
          <p>Tours</p>
        </div>
        <div className="countryInner_tours_image-flex">
          {tourDetails.map((tour, index) => (
            <div className="countryInner_tours_image" key={index}>
              <img src={tour.imageUrl} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryInner;
