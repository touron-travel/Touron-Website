import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./TourInner.css";
import axios from "axios";
import { API } from "../backend";
import { Link } from "react-router-dom";
import {
  SemipolarLoading,
  RectGraduallyShowLoading,
  CircleLoading,
} from "react-loadingg";
import SimilarTour from "../Country Page/SimilarTour";

const TourInner = () => {
  const { tourname, countryname, tourid } = useParams();
  const [toggleInfo, setToggleInfo] = useState("Inclusion");
  const [tourDetails, setTourDetails] = useState({});
  const [similarTours, setSimilarTours] = useState([]);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [tourLoaded, setTourLoaded] = useState(false);
  const [selectedTour, setSelectedTour] = useState("");

  const getTours = async () => {
    setContentLoaded(true);
    try {
      const tourResponse = await axios.get(`${API}/tour/${tourid}`);
      setTourDetails(tourResponse.data);
      setContentLoaded(false);
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
    } catch (err) {
      console.log(err, "errbcbbdcb");
    }
  };

  useEffect(() => {
    getTours();
  }, [tourid]);
  useEffect(() => {
    getSimilarTours();
  }, [tourDetails]);

  return (
    <div className="TourInner_Details">
      {contentLoaded ? (
        <div className="loader">
          <SemipolarLoading
            style={{
              top: "150px",
              alignItems: "center",
              left: "48%",
            }}
            size="large"
          />
        </div>
      ) : (
        <>
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

          <div className="Tourintro">
            <div className="TourInner_image">
              <img src={tourDetails.imageUrl} />
              {/* <iframe
                width="100%"
                height="515"
                src={tourDetails.imageUrl}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe> */}
            </div>

            <div className="TourName">
              {/* <h2>{tourDetails.tourName}</h2>
              <h6>{tourDetails.ratings} / 5 Stars</h6> */}
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
                    setToggleInfo("Inclusion");
                  }}
                  className={toggleInfo === "Inclusion" ? "Selectedlabels" : ""}
                >
                  Inclusion
                </h6>
                <h6
                  onClick={() => {
                    setToggleInfo("Tips");
                  }}
                  className={toggleInfo === "Tips" ? "Selectedlabels" : ""}
                >
                  Extras
                </h6>
              </div>
              <div className="labels_details">
                {toggleInfo === "Inclusion" ? (
                  <p>{tourDetails.additionalInformation}</p>
                ) : (
                  <p>{tourDetails.inclusion}</p>
                )}
              </div>
            </div>
            <div className="question_block">
              <div className="question_block-title">Get a Question?</div>
              <div className="question_block-text">
                Do not hesitage to give us a call. We are an expert team and we
                are happy to talk to you.
              </div>
              <div className="question_block-tel">+1 1235 6789 10</div>
              <div className="question_block-mail">info@hellodigi.ru</div>
            </div>
          </div>
          <div className="similar">
            {similarTours.length === 0 ? null : (
              <SimilarTour
                tour={similarTours}
                selectedTour={selectedTour}
                setSelectedTour={setSelectedTour}
                countryname={countryname}
                heading={"Similar tours in"}
                tourname={tourname}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default TourInner;
