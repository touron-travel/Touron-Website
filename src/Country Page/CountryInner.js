import React from "react";
import { useLocation } from "react-router-dom";
import "./CountryInner.css";

const CountryInner = () => {
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

  return (
    <div className="countryInner_Details">
      <div className="countryInner_image">
        <img src={data.imageUrl} />
      </div>
      <div className="countryInner_cities">
        <div className="cityName_container">
          <a href="#">About</a>
          <a href="#">Cities</a>
          <a href="#">Tours</a>
        </div>
      </div>
      <div className="countryInner_about">
        <div>
          <div className="inner_home">
            <div className="icon_home">
              <i className="far fa-home-alt"></i>
            </div>
            <div className="icon_right">
              <i className="fa fa-chevron-right"></i>
            </div>
            <div>
              <span className="inner_title">Singapore</span>
            </div>
          </div>
          <div className="inner_about">
            <p className="having">Family</p>
            <p className="having"> Romantic</p>
            <p className="having">Adventure</p>
          </div>
          <div className="main_about">
            <div className="inner_name">Singapore</div>
            <div className="inner_desc">
              Singapore, is an island city-state off southern Malaysia with a
              tropical climate and multicultural population that has been a part
              of Hindu-Buddhist empires. It will be a visual treat to visit
              Singapore as it is known for its different cultural attractions.
              Singapore is also famous for the red and gold Buddha tooth relic
              temple, said to house one of Buddha’s teeth.
            </div>
          </div>
          <div className="available">
            <div className="available_m">
              <div className="available_t">
                <div>
                  <i class="fal fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="locat">Places</p>
                  <p className="locat">Singapore</p>
                </div>
              </div>
              <div className="available_t">
                <div>
                  <i class="fal fa-map-marker-alt"></i>
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
                  <i class="fal fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="locat">Places</p>
                  <p className="locat">Singapore</p>
                </div>
              </div>
              <div className="available_t">
                <div>
                  <i class="fal fa-map-marker-alt"></i>
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
                  <i class="fal fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="locat">Places</p>
                  <p className="locat">Singapore</p>
                </div>
              </div>
              <div className="available_t">
                <div>
                  <i class="fal fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="locat">Places</p>
                  <p className="locat">Singapore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>Content</div>
      </div>
    </div>
  );
};

export default CountryInner;
