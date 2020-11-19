import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./CountryInner.css";
import axios from "axios";
import { API } from "../backend";

const CountryInner = () => {
  const { countryname } = useParams();
  console.log(countryname, "df");

  const [countryDetails, setCountryDetails] = useState({});
  console.log(countryDetails, "gb");

  const [tourDetails, setTourDetails] = useState([]);
  console.log(tourDetails, "gt");

  const [cityDetails, setCityDetails] = useState([]);
  console.log(cityDetails, "ct");

  const getCountries = async () => {
    try {
      const countryResponse = await axios.get(`${API}/country/${countryname}`);
      setCountryDetails(...countryResponse.data);
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
  useEffect(() => {
    getCountries();
    getCities();
    getTours();
  }, []);

  return (
    <div className="countryInner_Details">
      <div className="countryInner_image">
        <img src={countryDetails.imageUrl} />
        <div className="countryInner_name">
          <h1>{countryDetails.countryName}</h1>
        </div>
      </div>
      <div className="countryInner_cities">
        <div className="cityName_container">
          <p>About</p>
          <p>Cities</p>
          <p>Tours</p>
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
            <div className="inner_name">{countryDetails.countryName}</div>
            <div className="inner_desc">{countryDetails.aboutCountry}</div>
          </div>
          <div className="available">
            <div className="available_m">
              <div className="available_t">
                <div>
                  <i className="fal fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="locat">Places</p>
                  <p className="locat">Singapore</p>
                </div>
              </div>
              <div className="available_t">
                <div>
                  <i className="fal fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="locat">Places</p>
                  <p className="locat">Singapore</p>
                </div>
              </div>
            </div>
            <div className="available_m">
              <div className="available_t">
                <div>
                  <i className="fal fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="locat">Places</p>
                  <p className="locat">Singapore</p>
                </div>
              </div>
              <div className="available_t">
                <div>
                  <i className="fal fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="locat">Places</p>
                  <p className="locat">Singapore</p>
                </div>
              </div>
            </div>
            <div className="available_m">
              <div className="available_t">
                <div>
                  <i className="fal fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="locat">Places</p>
                  <p className="locat">Singapore</p>
                </div>
              </div>
              <div className="available_t">
                <div>
                  <i className="fal fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="locat">Places</p>
                  <p className="locat">Singapore</p>
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
          {cityDetails.map((city, index) => (
            <div className="highlights_image" key={index}>
              <img src={city.imageUrl} alt="" />
              <div className="highlights_image-subtitle">{city.cityName}</div>
            </div>
          ))}
        </div>
        <div className="highlights_about">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            sint dicta? Pariatur amet ad voluptas consectetur ducimus officia,
            distinctio magnam ullam facere facilis maiores laboriosam incidunt,
            sequi iure commodi fugiat! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Necessitatibus, aspernatur cumque nostrum tempora
            nulla aliquid laboriosam iure corrupti autem sed doloribus cum
            accusamus aperiam aut! Exercitationem corporis quo eius illo?
          </p>
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
