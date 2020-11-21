import React from "react";

const SimilarTour = ({ tour, selectedTour, setSelectedTour }) => {
  return (
    <div className="countryInner_tour">
      <div className="countryInner_tour-title">
        <h2>Tours</h2>
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
              <img src={tour.imageUrl} alt="" />
              <div className="countryInner_tour_image-subtitle">
                {tour.tourName}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SimilarTour;
