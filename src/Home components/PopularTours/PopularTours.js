import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./PopularTours.css";
import axios from "axios";
import { API } from "../../backend";
import PopularTourTile from "./PopularTourTile";
import home1 from "../../assests/home1.jpg";
import home2 from "../../assests/home2.jpg";
import home3 from "../../assests/home3.jpg";
import { Link } from "react-router-dom";

export default function PopularTours() {
  const [tour, setTour] = useState([]);
  console.log(tour, "tour");

  useEffect(() => {
    const getTours = async () => {
      await axios
        .get(`${API}/tour?page=1&pageSize=10`)
        .then((res) => {
          setTour(res.data);
        })
        .catch((err) => console.log(err, "File missing"));
    };

    getTours();
  }, []);

  var settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="tours">
      <div className="tour-slider-header">
        <div className="tour-slider-title">
          <p>popularly</p>
          <h2>
            Most popular <br /> holiday tours
          </h2>
        </div>
        <div>
          <Link
            to={{
              pathname: "/popular_tour",
              tours: tour,
            }}
            className="plink"
          >
            <div className="ptour">
              <h4>View all tours</h4>
            </div>
          </Link>
        </div>
      </div>
      <div className="tour-slider-home">
        <div className="tour-slider">
          <Slider {...settings} accessibility pauseOnHover={false}>
            {tour.map((t, index) => {
              return <PopularTourTile t={t} key={index} />;
            })}
          </Slider>
        </div>
      </div>
      <div className="benefits">
        <div className="item">
          <div className="item_img">
            <img src={home1} alt="" />
          </div>
          <div className="tc">
            <h3 className="item_title">Any route</h3>
            <p className="item_text">
              We will help you to make any route for travel
            </p>
          </div>
        </div>
        <div className="item">
          <div className="item_img">
            <img src={home2} alt="" />
          </div>
          <div className="tc">
            <h3 className="item_title">Your dream</h3>
            <p className="item_text">
              Your dreams of an unforgettable journey can come true with us
            </p>
          </div>
        </div>
        <div className="item">
          <div className="item_img">
            <img src={home3} alt="" />
          </div>
          <div className="tc">
            <h3 className="item_title">Our guarantee</h3>
            <p className="item_text">
              We guarantee you an unforgettable journey and a lot of impressions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
