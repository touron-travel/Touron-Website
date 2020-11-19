import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./TourInner.css";
import axios from "axios";
import { API } from "../backend";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import PopularTourTile from "../Home components/PopularTours/PopularTourTile";
const TourInner = () => {
  const { tourname } = useParams();
  const [toggleInfo, setToggleInfo] = useState("Inclusion");
  const [tourDetails, setTourDetails] = useState({});
  const [similarTours, setSimilarTours] = useState([]);

  console.log(tourname, "o");

  var settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    // centerMode: true,
    // centerPadding: "100px",
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const getTours = async () => {
    try {
      const tourResponse = await axios.get(`${API}/tour/tourname/${tourname}`);
      setTourDetails(...tourResponse.data);
      console.log(tourResponse.data, "ddds");
    } catch (err) {
      console.log(err, "errbcbbdcb");
    }
  };
  const getSimilarTours = async () => {
    try {
      const tourResponse = await axios.get(
        `${API}/tour/countryname/${tourDetails.countryName}`
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
    if (tourDetails.countryName !== "") getSimilarTours();
  }, [tourDetails]);

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
          <div className="AboutTour">
            <h1>Intresting News</h1>
            <p>{tourDetails.aboutTour}</p>
          </div>
        </div>

        <div className="TourFeatures_Details">
          <div className="TourHighlights">
            <div className="Highlights">
              <h1>Highlights</h1>
              <ul>
                <li>{tourDetails.pickUpPoint}</li>
                <li>{tourDetails.tourPreferance} Tour</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="TourFeatures">
        <div className="travel">
          <i className="fas fa-globe-europe tourtype"></i>
          <div className="Idealfor">
            <h2>Tour Type</h2>
            <h6>{tourDetails.tourCategory}</h6>
          </div>
        </div>
        <div className="travel">
          <i className="far fa-hiking idealfor"></i>
          <div className="Idealfor">
            <h2>Ideal For</h2>
            <h6>{tourDetails.idealType} </h6>
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
              Tips
            </h6>
          </div>
          {toggleInfo === "Inclusion" ? (
            <h2>{tourDetails.inclusion}</h2>
          ) : (
            <h2>{tourDetails.additionalInformation}</h2>
          )}
          {/* {toggleInfo ? <h2>{tourDetails.inclusion}</h2> : null} */}
        </div>
      </div>
      <div className="Informations_Container">
        <div className="Informations">
          <h1>Similar Tours in {tourDetails.countryName}</h1>
          <div className="similartours">
            <Slider {...settings} accessibility pauseOnHover={false}>
              {similarTours.map((t, index) => {
                return (
                  <Link
                    className="plink"
                    to={{
                      pathname: `/tourdetails/${t.tourName}`,
                    }}
                  >
                    <img src={t.imageUrl} alt="" />
                    <h6>{t.tourName}</h6>
                    <h6>{t.tourName}</h6>
                  </Link>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourInner;
