import React from "react";
import { logos } from "./Logo";
import Slider from "react-slick";
import "../../assests/logo/dubai.png";
const image1 = "../../assests/logo/dubai.png";
const image2 = "../../assests/logo/dubai.png";
const image3 = "../../assests/logo/finland.png";
const image4 = "../../assests/logo/Austria_Badge.png";
const image5 = "../../assests/logo/dubai.png";
const image6 = "../../assests/logo/finland.png";
const image7 = "../../assests/logo/Austria_Badge.png";
const OurPartners = (props) => {
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    dots: true,
  };

  return (
    <div style={{ height: "300px", backgroundColor: "red" }}>
      <Slider {...settings}>
        {logos.map((country, index) => {
          return (
            <div
              style={{
                height: "200px",
                width: "300px",
                backgroundColor: "red",
              }}
              key={index}
            >
              <img
                style={{
                  height: "200px",
                  width: "300px",
                  backgroundColor: "red",
                }}
                src={image3}
                alt=""
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default OurPartners;
