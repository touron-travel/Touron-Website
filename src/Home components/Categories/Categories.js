import React from "react";
import "./Categories.css";
import cat1 from "../../assests/cat1.jpg";
import cat2 from "../../assests/cat2.jpg";
import cat3 from "../../assests/cat3.jpg";
import cat4 from "../../assests/cat4.jpg";
import cat5 from "../../assests/cat5.jpg";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className="categories">
      <Link to="/luxury-tour" className="plink">
        <div className="cat-body">
          <img className="image" src={cat4} alt="" />
          <div className="title">
            <p>Luxury</p>
          </div>
        </div>
      </Link>
      <Link to="/honeymoon-tour" className="plink">
        <div className="cat-body">
          <img className="image" src={cat5} alt="" />
          <div className="title">
            <p>Honeymoon Tour</p>
          </div>
        </div>
      </Link>
      <Link to="/planned-tour" className="plink">
        <div className="cat-body">
          <img className="image" src={cat1} alt="" />
          <div className="title">
            <p>Planned Tour</p>
          </div>
        </div>
      </Link>
      <Link to="/surprise-tour" className="plink">
        <div className="cat-body">
          <img className="image" src={cat2} alt="" />
          <div className="title">
            <p>Surprise Tour</p>
          </div>
        </div>
      </Link>
      <Link to="/roadtrip-tour" className="plink">
        <div className="cat-bod">
          <img className="image" src={cat3} alt="" />
          <div className="title">
            <p>Road Trip</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
