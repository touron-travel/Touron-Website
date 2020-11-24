import React from "react";
import { Link } from "react-scroll";

const CountryInnerDetails = ({
  countryDetails,
  cityDetails,
  selectedCity,
  setSelectedCity,
}) => {
  var sectionStyle = {
    backgroundImage: `url(${countryDetails.imageUrl})`,
  };
  return (
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
            <div className="inner_name">
              About <span> </span>:<span> </span>
              {/* <i className="fa fa-chevron-right"></i> */}
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
        <div className="countryInner_aboutRight">Content</div>
      </div>
      <div className="highlights">
        <div className="highlights_title">
          <h2>Cities</h2>
        </div>

        <div className="highlights_image-flex">
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
    </>
  );
};

export default CountryInnerDetails;
