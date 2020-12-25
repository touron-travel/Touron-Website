import React from "react";
import Checked from "./Checked";
import "./Tourtype.css";
import Domestic from "../../assests/planned-tour/india.png";
import International from "../../assests/planned-tour/International.png";

const Tourtype = ({ tourType, setTourType }) => {
  return (
    <div className='tourtype'>
      <h1>Pick the type of tour! </h1>
      <div className="tour-type">
        <div
          className={
            tourType === "Domestic" ? "domestic-selected domestic" : "domestic"
          }
          onClick={() => setTourType("Domestic")}
        >
          <div style={{ position: "absolute", top: "10px", right: "10px" }}>
            {tourType === "Domestic" ? <Checked /> : null}
          </div>
          <img src={Domestic} alt="" />
          <h6>Domestic</h6>
        </div>
        <div
          className={
            tourType === "International"
              ? "international-selected international"
              : "international"
          }
          onClick={() => setTourType("International")}
        >
          <div style={{ position: "absolute", top: "10px", right: "10px" }}>
            {tourType === "International" ? <Checked /> : null}
          </div>
          <img src={International} alt="" />
          <h6>International</h6>
        </div>
      </div>
    </div>
  );
};

export default Tourtype;
