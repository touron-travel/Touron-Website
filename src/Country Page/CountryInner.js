import React, { useEffect, useState, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import "./CountryInner.css";
import axios from "axios";
import { API } from "../backend";
import SimilarTour from "./SimilarTour";
import { ApiContext } from "../Context/ApiContext";
import Slider from "react-slick";
import { Link } from "react-scroll";
import { SemipolarLoading } from "react-loadingg";

const CountryInner = () => {
  const { countryid, countryname } = useParams();
  const { countries } = useContext(ApiContext);

  const [countryDetails, setCountryDetails] = useState({});

  const [tourDetails, setTourDetails] = useState([]);
  const [cityDetails, setCityDetails] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedTour, setSelectedTour] = useState("");
  const [countryLoaded, setCountryLoaded] = useState(false);

  var sectionStyle = {
    backgroundImage: `url(${countryDetails.imageUrl})`,
  };

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
    try {
      const tourResponse = await axios.get(
        `${API}/tour/countryname/${countryname}`
      );
      setTourDetails(tourResponse.data);
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
  }, [countryname]);
  useEffect(() => {
    getCities();
  }, [countryname]);
  useEffect(() => {
    getTours();
  }, []);

  var settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 6.5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="countryInner_Details">
      {countryLoaded ? (
        <SemipolarLoading
          style={{
            top: "150px",
            alignItems: "center",
            left: "48%",
          }}
          size="large"
        />
      ) : (
        <>
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
                smooth={true}
                duration={500}
              >
                <p>About</p>
              </Link>
              <Link
                activeClass="active"
                to="highlights"
                smooth={true}
                duration={1000}
              >
                <p>Cities</p>
              </Link>
              <Link
                activeClass="active"
                to="tours_section"
                smooth={true}
                duration={1500}
              >
                <p>Tours</p>
              </Link>
            </div>
          </div>
          <div className="countryInner_about">
            <div className="countryInner_aboutLeft">
              <div className="inner_home">
                <div className="icon_home">
                  <NavLink to="/popular_countries">
                    <i className="far fa-home-alt"></i>
                  </NavLink>
                </div>
                <div className="icon_right">
                  <i className="fa fa-chevron-right"></i>
                </div>
                <div>
                  <span className="inner_title">
                    {countryDetails.countryName}
                  </span>
                </div>
              </div>
              <div className="inner_about">
                <p className="having">Family</p>
                <p className="having"> Romantic</p>
                <p className="having">Adventure</p>
              </div>
              <div className="main_about">
                <div className="inner_name">
                  About <span> </span>:<span> </span>
                  {countryDetails.countryName}
                </div>
                <div className="inner_desc">{countryDetails.aboutCountry}</div>
              </div>
              <div className="available">
                <div className="available-left">
                  <div className="available_t">
                    <div>
                      <i className="fas fa-cloud-sun-rain"></i>
                    </div>
                    <div>
                      <h6>Weather</h6>
                      <p className="locat">{countryDetails.weather} ℃</p>
                    </div>
                  </div>
                  <div className="available_t">
                    <div>
                      <i className="fal fa-plane-departure"></i>
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
                      <i className="fad fa-calendar-day"></i>
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
                      <i className="fas fa-wallet"></i>
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
                      <i className="fas fa-hourglass-start"></i>
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
                      <i className="far fa-city"></i>
                    </div>
                    <div>
                      <h6>Major Cities</h6>
                      <p className="locat">{countryDetails.bestPlaces}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="countryInner_aboutRight">Content</div> */}
          </div>
          <div className="highlights">
            <div className="highlights_title">
              <h2>Cities</h2>
            </div>

            <div
              className={
                cityDetails.length >= 6
                  ? "highlights_image-flex1"
                  : "highlights_image-flex2"
              }
            >
              {cityDetails.map((city, index) => {
                return (
                  <div
                    className={
                      selectedCity === city.cityName
                        ? "highlights_image_selected"
                        : "highlights_image"
                    }
                    key={index}
                    onMouseOver={() => setSelectedCity(city.cityName)}
                  >
                    <img src={city.imageUrl} alt="" />
                    <div
                      className={
                        selectedCity === city.cityName
                          ? "highlights_image-subtitle-select"
                          : "highlights_image-subtitle"
                      }
                    >
                      {city.cityName}
                    </div>
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
                    </div>
                  );
              })}
            </div>
          </div>
          {tourDetails.length === 0 ? null : (
            <div id="tours_section">
              <SimilarTour
                tour={tourDetails}
                selectedTour={selectedTour}
                setSelectedTour={setSelectedTour}
                countryname={countryname}
                heading={"Tours in"}
              />
            </div>
          )}
        </>
      )}
      <div className="similarcountries">
        <div className="similar-countries">
          <h2>Similar Countries</h2>
        </div>

        <Slider {...settings}>
          {countries.map((country, index) => {
            if (country.countryName !== countryDetails.countryName)
              return (
                <div className={"countries-container"} key={index}>
                  <NavLink
                    className="plink"
                    to={{
                      pathname: `/countrydetails/${country.countryName}/${country._id}`,
                    }}
                  >
                    <img src={country.imageUrl} alt="" />
                  </NavLink>
                  <div className={"similar-country-name"}>
                    {country.countryName}
                  </div>
                </div>
              );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default CountryInner;
