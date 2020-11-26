import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const SimilarTour = ({
  tour,
  selectedTour,
  setSelectedTour,
  countryname,
  heading,
}) => {
  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return <div className={className} onClick={onClick}></div>;
  // }

  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   console.log(props, "prev");
  //   return <div className={className} onClick={onClick}></div>;
  // }

  var settings = {
    infinite: true,
    autoplay: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 2,
    // centerMode: true,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    // className: "slider",
  };
  return (
    <div className="countryInner_tour">
      <div className="countryInner_tour-title">
        <h2>
          {heading} {countryname}
        </h2>
      </div>
      <div className="similartour_slide">
        <Slider {...settings}>
          {tour.map((tour, index) => {
            return (
              <div
                className={
                  selectedTour === tour.tourName
                    ? "similartour_container_selected"
                    : "similartour_container"
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
                  <div
                    className="similartour-image-subtitle"
                    style={{
                      color:
                        selectedTour === tour.tourName ? "#db6500" : "#fff",
                    }}
                  >
                    {tour.tourName}
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SimilarTour;
