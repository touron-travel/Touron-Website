import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./TourInner.css";
import axios from "axios";
import { API } from "../backend";
const TourInner = () => {
  const { tourid } = useParams();

  const [tourDetails, setTourDetails] = useState({});

  const getTours = async () => {
    try {
      const tourResponse = await axios.get(`${API}/tour/${tourid}`);
      setTourDetails(tourResponse.data);
      console.log(tourResponse.data, "s");
    } catch (err) {
      console.log(err, "err");
    }
  };

  useEffect(() => {
    getTours();
  }, []);

  return (
    <div className="TourInner_Details">
      <div className="TourInner_image">
        <img src={tourDetails.imageUrl} />
      </div>

      <div className="TourName">
        <h2>{tourDetails.tourName}</h2>
        <h6>{tourDetails.ratings} / 5 Stars</h6>
      </div>

      <div className="TourFeatures_Container">
        <div className="TourName_Navigation">
          <h1>gvgsvcvwgdhv</h1>
          <div className="AboutTour">
            <h1>Intresting News</h1>
            <p>{tourDetails.aboutTour}</p>
            {/* <p>{data.aboutTour}</p> */}
          </div>
        </div>

        <div className="TourFeatures_Details">
          <div className="TourFeatures">
            <div className="travel">
              <i className="far fa-hiking idealfor"></i>
              <div className="Idealfor">
                <h2>Ideal For</h2>
                <h6>{tourDetails.idealType} </h6>
                {/* <h6>{tourDetails.idealType[1]} </h6>
                <h6>{tourDetails.idealType[2]} </h6> */}
              </div>
            </div>
            <div className="travel">
              <i className="fas fa-globe-europe tourtype"></i>
              <div className="Idealfor">
                <h2>Tour Type</h2>
                <h6>{tourDetails.tourCategory}</h6>
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
          <div className="TourHighlights">
            <div className="Highlights">
              <h1>Highlights</h1>
              {/* <p>{data.additionalInformation}</p> */}
              <ol>
                <li>{tourDetails.pickUpPoint}</li>
                <li>{tourDetails.pickUpPoint}</li>
                <li>{tourDetails.pickUpPoint}</li>
              </ol>
              {/* <p>{data.aboutTour}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourInner;
