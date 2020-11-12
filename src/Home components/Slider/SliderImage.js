import React from "react";
import Slider from "react-slick";
import "./SliderImage.css";

export default function SliderImage() {
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
  };

  return (
    <>
      <Slider {...settings} arrows accessibility pauseOnHover={false}>
        <div className="slider1 slide">
          <div className="trending">
            <h2 className="countryName">America</h2>
            <h3 className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, doloribus.
            </h3>
            <div className="button">
              <div className="tour">
                <h4>Want a personal tour</h4>
              </div>
              <div className="ctour">
                <h4>Choose Tour</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="slider2 slide">
          <div className="trending">
            <h2 className="countryName">Japan</h2>
            <h3 className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, doloribus.
            </h3>
            <div className="button">
              <div className="tour">
                <h4>Want a personal tour</h4>
              </div>
              <div className="ctour">
                <h4>Choose Tour</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="slider3 slide">
          <div className="trending">
            <h2 className="countryName">New Zealand</h2>
            <h3 className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, doloribus.
            </h3>
            <div className="button">
              <div className="tour">
                <h4>Want a personal tour</h4>
              </div>
              <div className="ctour">
                <h4>Choose Tour</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="slider4 slide">
          <div className="trending">
            <h2 className="countryName">Switzerland</h2>
            <h3 className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, doloribus.
            </h3>
            <div className="button">
              <div className="tour">
                <h4>Want a personal tour</h4>
              </div>
              <div className="ctour">
                <h4>Choose Tour</h4>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}
