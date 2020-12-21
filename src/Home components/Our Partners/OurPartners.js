import React, { useState } from "react";
import "./OurPartners.css";
import image1 from "../../assests/logo/dubai.png";
import image2 from "../../assests/logo/dubai.png";
import image3 from "../../assests/logo/finland.png";
import image4 from "../../assests/logo/Austria_Badge.png";
import image5 from "../../assests/logo/dubai.png";
import image6 from "../../assests/logo/finland.png";
import image7 from "../../assests/logo/Austria_Badge.png";

const images = [
  {
    imageSrc: image1,
  },
  {
    imageSrc: image2,
  },
  {
    imageSrc: image3,
  },
  {
    imageSrc: image4,
  },
  {
    imageSrc: image5,
  },
  {
    imageSrc: image6,
  },
  {
    imageSrc: image7,
  },
  {
    imageSrc: image4,
  },
  {
    imageSrc: image5,
  },
  {
    imageSrc: image6,
  },
  {
    imageSrc: image7,
  },
  {
    imageSrc: image4,
  },
  {
    imageSrc: image5,
  },
  {
    imageSrc: image6,
  },
  {
    imageSrc: image7,
  },
  {
    imageSrc: image4,
  },
  {
    imageSrc: image5,
  },
  {
    imageSrc: image6,
  },
  {
    imageSrc: image7,
  },
];

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
    <div className="ourpartner-container">
      {images.map((image) => (
        <div className="ourpartner-img">
          <img src={image.imageSrc} alt="" />
        </div>
      ))}
    </div>
  );
};
export default OurPartners;
