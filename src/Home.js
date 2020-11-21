import React, { useEffect } from "react";
import Categories from "./Home components/Categories/Categories";
import Form from "./Home components/Form components/Form";
import PopularCountries from "./Home components/PopularCountries/PopularCountries";
import PopularTours from "./Home components/PopularTours/PopularTours";
import SliderImage from "./Home components/Slider/SliderImage";
import TopDestination from "./Home components/Top Destination/Top_destination";
import "./Home.css";

export default function Home() {
  // const tawkToPropertyId = "5fb4d33d1535bf152a5721bb";

  // useEffect(() => {
  //   tawkTo(tawkToPropertyId);
  // }, []);
  return (
    <div className="home">
      <div className="home_top">
        <div className="slider">
          <SliderImage />
        </div>
        <div className="categories">
          <Categories />
        </div>
      </div>
      <div className="populartours">
        <PopularTours />
      </div>
      <div className="form">
        <Form />
      </div>
      <div className="popularcountries">
        <PopularCountries />
      </div>
      <div className="topdestination">
        <TopDestination />
      </div>
    </div>
  );
}
