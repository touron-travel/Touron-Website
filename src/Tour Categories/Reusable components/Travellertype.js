import React from "react";
import Checked from "./Checked";
import "./Travellertype.css";
const Travellertype = ({
  imgSrc1,
  imgSrc2,
  imgSrc3,
  imgSrc4,
  travellerType,
  nextStep,
  setSolo,
  setFamily,
  setFriends,
  setGroup,
}) => {
  return (
    <div className="travellertype_container">
      <h5 className="travellertype-sub">
        Are you the Solo traveller kind or the more the merrier kind? Select
        your tour companions.
      </h5>
      <div className="travellertype-row1">
        <div
          className={
            travellerType === "Solo" ? " solo traveltype" : "traveltype"
          }
          onClick={() => {
            setSolo();
            // nextStep();
          }}
        >
          <div className="traveltype-details">
            <div style={{ position: "absolute", top: 5, right: 5 }}>
              {travellerType === "Solo" ? <Checked /> : null}
            </div>
            <img src={imgSrc1} alt='a' />
            <h2>Solo</h2>
          </div>
        </div>
        <div
          className={
            travellerType === "Family" ? " family traveltype" : "traveltype"
          }
          onClick={() => {
            setFamily();
            // nextStep();
          }}
        >
          <div className="traveltype-details">
            <div style={{ position: "absolute", top: 5, right: 5 }}>
              {travellerType === "Family" ? <Checked /> : null}
            </div>
            <img src={imgSrc2} alt='a'/>
            <h2>Family</h2>
          </div>
        </div>
      </div>
      <div className="travellertype-row2">
        <div
          className={
            travellerType === "Friends" ? " friends traveltype" : "traveltype"
          }
          onClick={() => {
            setFriends();
            // nextStep();
          }}
        >
          <div className="traveltype-details">
            <div style={{ position: "absolute", top: 5, right: 5 }}>
              {travellerType === "Friends" ? <Checked /> : null}
            </div>
            <img src={imgSrc3} alt = 'a' />
            <h2>Friends</h2>
          </div>
        </div>
        <div
          className={
            travellerType === "Group" ? " honeymoon traveltype" : "traveltype"
          }
          onClick={() => {
            setGroup();
            // nextStep();
          }}
        >
          <div className="traveltype-details">
            <div style={{ position: "absolute", top: 5, right: 5 }}>
              {travellerType === "Group" ? <Checked /> : null}
            </div>
            <img src={imgSrc4} alt='a' />
            <h2>Group</h2>
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
              {travellerType == "Honeymoon" ? <Checked /> : null}
            </div>
            <img src={imgSrc4} />

            <h2>Honeymoon</h2>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Travellertype;

// const   =  heet.create({
//   travelTypeContainer: {
//     width: WIDTH,
//     height: HEIGHT / 3.7,
//     flexDirection: "row",
//   },
//   travelTypediv: {
//     width: WIDTH / 2,
//     height: HEIGHT / 3.9,
//     alignItems: "center",
//   },
// });
