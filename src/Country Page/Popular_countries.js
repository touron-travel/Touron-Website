import React from "react";
import "./Popular_countries.css";
import { Link } from "react-router-dom";
import countryimg from "../assests/country.jpg";

export default function Popular_countries() {
  return (
    <>
      <div className="Popular_countries">
        <div className="popularCountry_Back">
          <div className="popcountry">
            <Link to="/" className="popcountry1">
              Home
            </Link>
            <span className="seperator">/</span>
            <Link to="#" className="defaultcountry">
              Most popular countries
            </Link>
          </div>
          <div className="countriesSection-title">
            <div className="countrySection-Subtitle">
              Explore tours by countries
            </div>
            <div className="countrySection-Title">Countries</div>
          </div>
        </div>
      </div>
      <div className="popularCountries_section">
        <div className="popularCountries_content1">
          <div className="countries_img">
            <img src={countryimg} alt="" />
          </div>
          <div className="countriesflag">
            <img src={countryimg} alt="" />
          </div>
          <div className="countriesk">
            <div className="countriesname">Egypt</div>
            <p className="countriesdesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              nesciunt.Lorem ipsum dolor sit amet consectetur.
            </p>
            <Link to="/popular_tour">
              <p className="countriesview">View all tours</p>
            </Link>
          </div>
        </div>
        <div className="popularCountries_content1">
          <div className="countries_img">
            <img src={countryimg} alt="" />
          </div>
          <div className="countriesflag">
            <img src={countryimg} alt="" />
          </div>
          <div className="countriesk">
            <div className="countriesname">Egypt</div>
            <p className="countriesdesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              nesciunt.Lorem ipsum dolor sit amet consectetur.
            </p>
            <Link to="/popular_tour">
              <p className="countriesview">View all tours</p>
            </Link>
          </div>
        </div>
        <div className="popularCountries_content1">
          <div className="countries_img">
            <img src={countryimg} alt="" />
          </div>
          <div className="countriesflag">
            <img src={countryimg} alt="" />
          </div>
          <div className="countriesk">
            <div className="countriesname">Egypt</div>
            <p className="countriesdesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              nesciunt.Lorem ipsum dolor sit amet consectetur.
            </p>
            <Link to="/popular_tour">
              <p className="countriesview">View all tours</p>
            </Link>
          </div>
        </div>
        <div className="popularCountries_content1">
          <div className="countries_img">
            <img src={countryimg} alt="" />
          </div>
          <div className="countriesflag">
            <img src={countryimg} alt="" />
          </div>
          <div className="countriesk">
            <div className="countriesname">Egypt</div>
            <p className="countriesdesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              nesciunt.Lorem ipsum dolor sit amet consectetur.
            </p>
            <Link to="/popular_tour">
              <p className="countriesview">View all tours</p>
            </Link>
          </div>
        </div>
        <div className="popularCountries_content1">
          <div className="countries_img">
            <img src={countryimg} alt="" />
          </div>
          <div className="countriesflag">
            <img src={countryimg} alt="" />
          </div>
          <div className="countriesk">
            <div className="countriesname">Egypt</div>
            <p className="countriesdesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              nesciunt.Lorem ipsum dolor sit amet consectetur.
            </p>
            <Link to="/popular_tour">
              <p className="countriesview">View all tours</p>
            </Link>
          </div>
        </div>
        <div className="popularCountries_content1">
          <div className="countries_img">
            <img src={countryimg} alt="" />
          </div>
          <div className="countriesflag">
            <img src={countryimg} alt="" />
          </div>
          <div className="countriesk">
            <div className="countriesname">Egypt</div>
            <p className="countriesdesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              nesciunt.Lorem ipsum dolor sit amet consectetur.
            </p>
            <Link to="/popular_tour">
              <p className="countriesview">View all tours</p>
            </Link>
          </div>
        </div>
        <div className="countries-pageno_flex">
          <div className="countries-pageno_icon">
            <i className="fa fa-chevron-left"></i>
          </div>
          <div className="countries-pageno">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
          </div>
          <div className="countries-pageno_icon">
            <i className="fa fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </>
  );
}
