import React from "react";
import "./Top_destination.css";

export default function Top_destinationTile({ t }) {
  return (
    <div className="citypop">
      <img className="section_image" src={t.imageUrl} alt="" />
      <p className="city">{t.cityName}</p>
    </div>
  );
}
