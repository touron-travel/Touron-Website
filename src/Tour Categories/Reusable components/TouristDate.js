import React from "react";
import "./TouristDate.css";

const TouristDate = ({ imgSrc, fromDate, toDate, setFromDate, setToDate }) => {
  return (
    <div className="tourist-Date">
      <div className="from-category">
        <div className="date-from">
          <label>From</label>
        </div>
        <img src={imgSrc} alt="" />
        <div className="date-input">
          <input type="date" />
        </div>
      </div>
      <div className="to-category">
        <div className="date-to">
          <label>To</label>
        </div>
        <img src={imgSrc} alt="" />
        <div className="date-input">
          <input type="date" />
        </div>
      </div>
    </div>
  );
};

export default TouristDate;
