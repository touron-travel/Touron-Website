import React from "react";
import Checked from "./Checked";

const Tourpreference = ({
  imgSrc1,
  imgSrc2,
  imgSrc3,
  imgSrc4,
  tourPreferance,
  setAdventure,
  setRelaxation,
  setCultural,
  setExplore,
  nextStep,
}) => {
  return (
    <div className="traveltype_container">
      <h6 style={{ textAlign: "center", fontSize: "20px", padding: "10px" }}>
        Are you the Solo traveller kind or the more the merrier kind? Select
        your tour companions.
      </h6>
      <div className="travellertype-row1">
        <div
          className={
            tourPreferance == "Adventure" ? " solo traveltype" : "traveltype"
          }
          onClick={() => {
            setAdventure();
            // nextStep();
          }}
        >
          <div className="traveltype-details">
            <div style={{ position: "absolute", top: 5, right: 5 }}>
              {tourPreferance == "Adventure" ? <Checked /> : null}
            </div>
            <img src={imgSrc1} />
            <h2>Adventure</h2>
          </div>
        </div>
        <div
          className={
            tourPreferance == "Relaxation" ? " family traveltype" : "traveltype"
          }
          onClick={() => {
            setRelaxation();
            // nextStep();
          }}
        >
          <div className="traveltype-details">
            <div style={{ position: "absolute", top: 5, right: 5 }}>
              {tourPreferance == "Relaxation" ? <Checked /> : null}
            </div>
            <img src={imgSrc2} />
            <h2>Relaxation</h2>
          </div>
        </div>
      </div>
      <div className="travellertype-row2">
        <div
          className={
            tourPreferance == "Cultural" ? " friends traveltype" : "traveltype"
          }
          onClick={() => {
            setCultural();
            // nextStep();
          }}
        >
          <div className="traveltype-details">
            <div style={{ position: "absolute", top: 5, right: 5 }}>
              {tourPreferance == "Cultural" ? <Checked /> : null}
            </div>
            <img src={imgSrc3} />
            <h2>Cultural</h2>
          </div>
        </div>
        <div
          className={
            tourPreferance == "Explore" ? " honeymoon traveltype" : "traveltype"
          }
          onClick={() => {
            setExplore();
            // nextStep();
          }}
        >
          <div className="traveltype-details">
            <div style={{ position: "absolute", top: 5, right: 5 }}>
              {tourPreferance == "Explore" ? <Checked /> : null}
            </div>
            <img src={imgSrc4} />
            <h2>Explore</h2>
          </div>
        </div>
        {/* <div
      className="traveltype"
      onClick={() => {
        setHoneymoon();
        nextStep();
      }}
    >
      <div>
        <div style={{ position: "absolute", top: -30, right: -20 }}>
          {tourPreferance == "Honeymoon" ? <Checked /> : null}
        </div>
        <img src={imgSrc4} />

        <h2>Honeymoon</h2>
      </div>
    </div> */}
      </div>
    </div>
  );
};

export default Tourpreference;
