import React from "react";
import Slider from "react-slick";
import "./SliderImage.css";
// import Typing from "react-typing-animation";

export default function SliderImage() {
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
  };

  return (
    <>
      <Slider {...settings} arrows accessibility pauseOnHover={false}>
        <div className="slide0 slide">
          <div className="slider_titl">
            {/* <Typing speed={500} loop={false} hideCursor={true}> */}
            <h1>tour On</h1>
            {/* </Typing> */}
          </div>
        </div>
        <div className="slide1 slide">
          <div className="slider_title">
            {/* <Typing speed={10} loop={false} hideCursor={true}> */}
            <h1>tour On</h1>
            {/* </Typing> */}
          </div>
        </div>
        <div className="slide2 slide">
          <div className="slider_title">
            {/* <Typing speed={10} loop={false} hideCursor={true}> */}
            <h1>tour On</h1>
            {/* </Typing> */}
          </div>
        </div>
        <div className="slide3 slide">
          <div className="slider_title">
            {/* <Typing speed={10} loop={false} hideCursor={true}> */}
            <h1>tour On</h1>
            {/* </Typing> */}
          </div>
        </div>
        <div className="slide4 slide">
          <div className="slider_title">
            {/* <Typing speed={10} loop={false} hideCursor={true}> */}
            <h1>tour On</h1>
            {/* </Typing> */}
          </div>
        </div>
      </Slider>
    </>
  );
}
