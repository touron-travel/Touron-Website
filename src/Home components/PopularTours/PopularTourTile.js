import React from "react";
import "./PopularTours.css";
import { Link } from "react-router-dom";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

export default function PopularTourTile({ t }) {
  return (
    <div className="poptour1">
      <div className="trends">
        <div className="crop-bottom">
          <img className="pop-image" src={t.imageUrl} alt="" />
        </div>
        <div className="tour-details">
          <Link to="" className="link">
            <h3 className="title">{t.tourName}</h3>
          </Link>
          <p className="description">{t.aboutTour.slice(0, 100)}</p>
          <div className="days">
            <span className="icons">
              <AccessTimeIcon />
            </span>
            <span>{t.tourDuration}</span>
            <span>/</span>
            <span>{t.tourType}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
