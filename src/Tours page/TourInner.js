import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./TourInner.css";
import axios from "axios";
import { API } from "../backend";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const TourInner = () => {
  const { tourname, countryname, tourid } = useParams();
  const [toggleInfo, setToggleInfo] = useState("Tips");
  const [tourDetails, setTourDetails] = useState({});
  const [similarTours, setSimilarTours] = useState([]);

  console.log(tourname, "o");

  var settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const getTours = async () => {
    try {
      const tourResponse = await axios.get(`${API}/tour/${tourid}`);
      setTourDetails(tourResponse.data);
      console.log(tourResponse.json(), "ddds");
    } catch (err) {
      console.log(err, "errbcbbdcb");
    }
  };
  const getSimilarTours = async () => {
    try {
      const tourResponse = await axios.get(
        `${API}/tour/countryname/${countryname}`
      );
      setSimilarTours(tourResponse.data);
      console.log(tourResponse.data, "ddsssssssssds");
    } catch (err) {
      console.log(err, "errbcbbdcb");
    }
  };

  useEffect(() => {
    getTours();
  }, []);
  useEffect(() => {
    getSimilarTours();
  }, [tourDetails]);

  return (
    <div className="TourInner_Details">
      <div className="TourFeatures_Container">
        <div className="TourName_Navigation">
          <div className="AboutTour">
            <h1>{tourDetails.tourName}</h1>
            <p>{tourDetails.aboutTour}</p>
          </div>
        </div>

        <div className="TourFeatures_Details">
          <div className="TourHighlights">
            <div className="Highlights">
              <h1>Highlights</h1>

              {tourDetails.pickUpPoint !== undefined ? (
                <ul>
                  <li>Pick Up : {tourDetails.pickUpPoint.join(",")}</li>
                  <li>Tour Type : {tourDetails.tourPreferance} </li>
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="Tourintro">
        <div className="TourInner_image">
          <img src={tourDetails.imageUrl} />
        </div>

        <div className="TourName">
          <h2>{tourDetails.tourName}</h2>
          <h6>{tourDetails.ratings} / 5 Stars</h6>
        </div>
      </div>

      <div className="TourFeatures">
        <div className="travel">
          <i className="fas fa-globe-europe tourtype"></i>
          <div className="Idealfor">
            <h2>Tour Type</h2>
            {tourDetails.tourCategory !== undefined ? (
              <>
                <h6>{tourDetails.tourCategory.join(",")}</h6>
              </>
            ) : null}
          </div>
        </div>
        <div className="travel">
          <i className="far fa-hiking idealfor"></i>
          <div className="Idealfor">
            <h2>Ideal For</h2>
            {tourDetails.idealType !== undefined ? (
              <h6>{tourDetails.idealType.join(",")} </h6>
            ) : null}
          </div>
        </div>

        <div className="travel">
          <i className="far fa-clock duration"></i>
          <div className="Idealfor">
            <h2>Duration</h2>
            <h6>{tourDetails.tourDuration}</h6>
          </div>
        </div>
      </div>

      <div className="Informations_Container">
        <div className="Informations">
          <h1>
            Tour Inclusions & <br></br>additional information{" "}
          </h1>

          <div className="labels">
            <h6
              onClick={() => {
                setToggleInfo("Tips");
              }}
              className={toggleInfo === "Tips" ? "Selectedlabels" : ""}
            >
              Extras
            </h6>
            <h6
              onClick={() => {
                setToggleInfo("Inclusion");
              }}
              className={toggleInfo === "Inclusion" ? "Selectedlabels" : ""}
            >
              Inclusion
            </h6>
          </div>
          <div className="labels_details">
            {toggleInfo === "Inclusion" ? (
              <p>{tourDetails.inclusion}</p>
            ) : (
              <p>{tourDetails.additionalInformation}</p>
            )}
          </div>
        </div>
        <div className="question_block">
          <div className="question_block-title">Get a Question?</div>
          <div className="question_block-text">
            Do not hesitage to give us a call. We are an expert team and we are
            happy to talk to you.
          </div>
          <div className="question_block-tel">+1 1235 6789 10</div>
          <div className="question_block-mail">info@hellodigi.ru</div>
        </div>
      </div>
    </div>
  );
};

export default TourInner;
