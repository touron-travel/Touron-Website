import React from "react";
import "./PopularCountries.css";
import countryimg from "../../assests/country.jpg";

export default function PopularCountries() {
  return (
    <div className="country">
      <div className="country-header">
        <div className="country-title">
          <div className="country-subtitle">True now</div>
          <h2>Popular Countries</h2>
        </div>
        <div>
          <div className="pcountry">
            <h4>View all countries</h4>
          </div>
        </div>
      </div>
      <div className="country_content">
        <div className="country_content1">
          <div className="country_img">
            <img src={countryimg} alt="" />
          </div>
          <div className="countryflag">
            <img src={countryimg} alt="" />
          </div>
          <div className="countryk">
            <div className="countryname">Egypt</div>
            <p className="countrydesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              nesciunt.Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="countryview">View all tours</p>
          </div>
        </div>
        <div className="country_content1">
          <div className="country_img">
            <img src={countryimg} alt="" />
          </div>
          <div className="countryflag">
            <img src={countryimg} alt="" />
          </div>
          <div className="countryk">
            <div className="countryname">Egypt</div>
            <p className="countrydesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              nesciunt.Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="countryview">View all tours</p>
          </div>
        </div>
        <div className="country_content1">
          <div className="country_img">
            <img src={countryimg} alt="" />
          </div>
          <div className="countryflag">
            <img src={countryimg} alt="" />
          </div>
          <div className="countryk">
            <div className="countryname">Egypt</div>
            <p className="countrydesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              nesciunt.Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="countryview">View all tours</p>
          </div>
        </div>
      </div>
    </div>
  );
}
