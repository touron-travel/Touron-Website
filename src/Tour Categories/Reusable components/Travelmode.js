import React from "react";
import Checked from "./Checked";
import "./Tourtype.css";
import Domestic from "../../assests/planned-tour/india.png";
import International from "../../assests/planned-tour/International.png";

const Travelmode = ({ travelMode, setTravelMode, imgSrc1, imgSrc2 }) => {
  console.log(travelMode, "mode");
  return (
    <div>
      <h1 style={{ fontSize: "20px" }}>
        It’s all about the journey! Select your preferred mode of travel
      </h1>
      <div className="tour-type">
        <div
          className={
            travelMode == "Flight" ? "domestic-selected domestic" : "domestic"
          }
          onClick={() => setTravelMode("Flight")}
        >
          <div style={{ position: "absolute", top: "10px", right: "10px" }}>
            {travelMode == "Flight" ? <Checked /> : null}
          </div>
          <img src={imgSrc2} alt="" />
          <h6>Flight</h6>
        </div>
        <div
          className={
            travelMode == "Train"
              ? "international-selected international"
              : "international"
          }
          onClick={() => setTravelMode("Train")}
        >
          <div style={{ position: "absolute", top: "10px", right: "10px" }}>
            {travelMode == "Train" ? <Checked /> : null}
          </div>
          <img src={imgSrc1} alt="" />
          <h6>Train</h6>
        </div>
      </div>
    </div>
  );
};

export default Travelmode;
