import React from "react";
import "./Popular_tour.css";

export default function Popular_tourTile({ t }) {
  return (
    <div className="poptour_trends">
      <img className="poptour_img" src={t.imageUrl} alt="" />
      <div className="poptour_details">
        <h3 className="poptour_title">{t.tourName}</h3>
        <p className="poptour_description">{t.aboutTour}</p>
        <div className="poptour_days">
          <i className="far fa-clock"></i>
          <span>{t.tourDuration}</span>
          <span>/</span>
          <span>{t.tourType}</span>
        </div>
      </div>
    </div>
  );
}
