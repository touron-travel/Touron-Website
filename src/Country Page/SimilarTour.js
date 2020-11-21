import React from "react";

const SimilarTour = ({ tour }) => {
  return (
    <div className="countryInner_tours">
      <div className="countryInner_tours_title">
        <h2>Tours</h2>
      </div>
      <div className="countryInner_tours_image-flex">
        <div className="countryInner_tours_image">
          {tour.map((tour, index) => (
            <div key={index}>
              <img src={tour.imageUrl} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarTour;
