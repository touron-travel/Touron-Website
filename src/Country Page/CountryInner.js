import React from "react";
import { useLocation, useParams } from "react-router-dom";
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
          <div className="highlights">
            <div className="highlights_title">
              <p>Highlights</p>
            </div>
            <div className="highlights_image-flex">
              <div className="highlights_image">
                <img
                  src="https://flynote-cms-production.s3.ap-south-1.amazonaws.com/itinerary/c1e5e7c3-ef0d-495e-a767-bcb1824035c5/images/3709157520_72c1bef81c_c_2393224b-9148-43a3-8356-4126578508e3.jpg?ts=1583132849398"
                  alt=""
                />
                <div className="highlights_image-title">Jurong Bird Park</div>
                <div className="highlights_image-subtitle">
                  A treat of all bird lovers
                </div>
              </div>
              <div className="highlights_image">
                <img
                  src="https://flynote-cms-production.s3.ap-south-1.amazonaws.com/itinerary/c1e5e7c3-ef0d-495e-a767-bcb1824035c5/images/taylor-simpson-qjOllrFRTn0-unsplash_c35cc780-d178-4452-a89a-30aef1e66df2.jpg?ts=1583132599055"
                  alt=""
                />
                <div className="highlights_image-title">Sentosa Island</div>
                <div className="highlights_image-subtitle">
                  Rejuvenate and Relax
                </div>
              </div>
              <div className="highlights_image">
                <img
                  src="https://flynote-cms-production.s3.ap-south-1.amazonaws.com/itinerary/c1e5e7c3-ef0d-495e-a767-bcb1824035c5/images/darshan-patel-IMyqcG3N1iE-unsplash_44ee1a07-207d-406b-a7a2-ecbd9b6afda2.jpg?ts=1583132612252"
                  alt=""
                />
                <div className="highlights_image-title">Universal Studios</div>
                <div className="highlights_image-subtitle">
                  Enjoy an adrenline pumping time
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="countryInner_aboutRight">Content</div>
      </div>
    </div>
  );
};

export default CountryInner;
