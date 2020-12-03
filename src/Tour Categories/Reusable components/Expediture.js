import React from "react";
import "./Expediture.css";

const Expediture = ({
  imgSrc,
  expediture1,
  expediture2,
  expediture3,
  startPoint,
  setStartPoint,
  setExpediture1,
  setExpediture2,
  setExpediture3,
}) => {
  return (
    <div className="destination-container">
      <img className="expediture-img" src={imgSrc} alt="" />
      <div className="destination-questionss">
        <div className="que1">
          <h6>Expediture 1</h6>
          <input
            type="text"
            onChange={(e) => setExpediture1(e.target.value)}
            value={expediture1}
          />
        </div>
        <div className="que2">
          <h6>Expediture 2</h6>

          <input
            type="text"
            onChange={(e) => setExpediture2(e.target.value)}
            value={expediture2}
          />
        </div>
        <div className="que3">
          <h6>Expediture 3</h6>
          <input
            type="text"
            onChange={(e) => setExpediture3(e.target.value)}
            value={expediture3}
          />
        </div>
        <div className="que3">
          <h6>Start Point</h6>
          <input
            type="text"
            onChange={(e) => setStartPoint(e.target.value)}
            value={startPoint}
          />
        </div>
      </div>
    </div>
  );
};

export default Expediture;
