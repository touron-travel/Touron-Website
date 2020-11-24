import React from "react";
import { Link } from "react-router-dom";

const SimilarTour = ({
  tour,
  selectedTour,
  setSelectedTour,
  countryname,
  heading,
}) => {
  return (
    <div className="countryInner_tour">
      <div className="countryInner_tour-title">
        <h2>
          {heading} {countryname}
        </h2>
      </div>
      <div className="countryInner_tour_image-flex">
        {tour.map((tour, index) => {
          return (
            <div
              className={
                selectedTour === tour.tourName
                  ? "countryInner_tour_image_selected"
                  : "countryInner_tour_image"
              }
              key={index}
              onMouseOver={() => setSelectedTour(tour.tourName)}
            >
              <Link
                className="plink"
                to={{
                  pathname: `/tourdetails/${tour.countryName}/${tour.tourName}/${tour._id}`,
                }}
              >
                <img src={tour.imageUrl} alt="" />
                <div className="countryInner_tour_image-subtitle">
                  {tour.tourName}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SimilarTour;
