import React from "react";
import "./Touristnumber.css";

const Touristnumber = ({
  imgSrc1,
  imgSrc2,
  nextStep,
  adult,
  children,
  setAdult,
  setChildren,
}) => {
  const inc = () => {
    setAdult(adult + 1);
    setChildren(children + 1);
  };
  const dec = () => {
    setAdult(adult - 1);
    setChildren(children - 1);
  };
  return (
    <div className="tourist-container">
      <div className="adult">
        <div className="tourist-category">
          <label>Adult</label>
        </div>
        <img src={imgSrc1} alt="" />
        <div className="tourist-func">
          <button
            className="decrement"
            onClick={() => {
              if (adult !== 0) setAdult(adult - 1);
            }}
          >
            -
          </button>
          <input type="text" value={adult} />
          <button className="increment" onClick={() => setAdult(adult + 1)}>
            +
          </button>
        </div>
      </div>
      <div className="child">
        <div className="tourist-category">
          <label>Child</label>
        </div>
        <img src={imgSrc2} alt="" />

        <div className="tourist-func">
          <button
            className="decrement"
            onClick={() => {
              if (children !== 0) setChildren(children - 1);
            }}
          >
            -
          </button>
          <input type="text" value={children} />
          <button
            className="increment"
            onClick={() => setChildren(children + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Touristnumber;
