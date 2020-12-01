import React, { Component } from "react";
import "./Destination.css";
const Destination = ({
  imgSrc,
  destination,
  startPoint,
  preferanece,
  setDestination,
  setPreferanece,
  setStartPoint,
}) => {
  return (
    <div className="destination-container">
      <img src={imgSrc} alt="" style={{ height: "40%", width: "50%" }} />
      <div className="destination-questions">
        <div className="que1">
          <h6>Enter the holiday destination you want to travel</h6>
          <input
            type="text"
            onChange={(e) => setDestination(e.target.value)}
            value={destination}
          />
        </div>
        <div className="que2">
          <h6>From where would you like to start your journey </h6>

          <input
            type="text"
            onChange={(e) => setStartPoint(e.target.value)}
            value={startPoint}
          />
        </div>
        <div className="que3">
          <h6>Your preferences when you travel (Optional):</h6>
          <input
            type="text"
            onChange={(e) => setPreferanece(e.target.value)}
            value={preferanece}
          />
        </div>
      </div>
    </div>
  );
};

export default Destination;
