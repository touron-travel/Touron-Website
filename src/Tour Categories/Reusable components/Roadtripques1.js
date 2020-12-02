import React from "react";

const Roadtripques1 = ({
  imgSrc,
  attr1,
  attr2,
  attr3,
  que1,
  que2,
  que3,
  func1,
  func2,
  func3,
  placeholder1,
  placeholder2,
  placeholder3,
}) => {
  return (
    <div className="destination-container">
      <img src={imgSrc} alt="" style={{ height: "40%", width: "50%" }} />
      <div className="destination-questions">
        <div className="que1">
          <h6>{que1}</h6>
          <input
            type="text"
            onChange={(e) => func1(e.target.value)}
            value={attr1}
            placeholder={placeholder1}
          />
        </div>
        <div className="que2">
          <h6>{que2}</h6>

          <input
            type="text"
            onChange={(e) => func2(e.target.value)}
            value={attr2}
            placeholder={placeholder2}
          />
        </div>
        <div className="que3">
          <h6>{que3}</h6>
          <input
            type="text"
            onChange={(e) => func3(e.target.value)}
            value={attr3}
            placeholder={placeholder3}
          />
        </div>
      </div>
    </div>
  );
};

export default Roadtripques1;
