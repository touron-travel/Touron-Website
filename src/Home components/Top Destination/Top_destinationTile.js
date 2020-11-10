import React from "react";
import { Link } from "react-router-dom";
import "./Top_destination.css";

export default function Top_destinationTile({ t }) {
  return (
    <Link to={{ pathname: "/popular_tour", cityName: t.cityName }}>
      <div className="citypop">
        <img className="section_image" src={t.imageUrl} alt="" />
        <p className="city">{t.cityName}</p>
      </div>
    </Link>
  );
}
