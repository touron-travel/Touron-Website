import React from "react";
import "./Categories.css";
import Luxury from "../../assests/luxury.jpg";
import Honeymoon from "../../assests/Honeymoon.jpg";
import Planned from "../../assests/Plannedtour.jpg";
import Surprise from "../../assests/Surprise.jpg";
import Road from "../../assests/Roadtrip.jpg";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className="categories">
      <Link to="/luxury-tour" className="plink">
        <div className="cat-body">
          <img className="image" src={Luxury} alt="" />
          <div className="title">
            <p>Luxury</p>
          </div>
        </div>
      </Link>
      <Link to="/honeymoon-tour" className="plink">
        <div className="cat-body">
          <img className="image" src={Honeymoon} alt="" />
          <div className="title">
            <p>Honeymoon Tour</p>
          </div>
        </div>
      </Link>
      <Link to="/planned-tour" className="plink">
        <div className="cat-body">
          <img className="image" src={Planned} alt="" />
          <div className="title">
            <p>Planned Tour</p>
          </div>
        </div>
      </Link>
      <Link to="/surprise-tour" className="plink">
        <div className="cat-body">
          <img className="image" src={Surprise} alt="" />
          <div className="title">
            <p>Surprise Tour</p>
          </div>
        </div>
      </Link>
      <Link to="/roadtrip-tour" className="plink">
        <div className="cat-bod">
          <img className="image" src={Road} alt="" />
          <div className="title">
            <p>Road Trip</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
