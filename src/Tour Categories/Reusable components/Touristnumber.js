import React from "react";
import "./Touristnumber.css";

const Touristnumber = ({ adult, setAdult, children, setChildren }) => {
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
        <div className="tourist-func">
          <button className="decrement" onClick={() => dec()}>
            -
          </button>
          <input type="text" />
          <button className="increment" onClick={() => inc()}>
            +
          </button>
        </div>
      </div>
      <div className="child">
        <div className="tourist-category">
          <label>Child</label>
        </div>
        <div className="tourist-func">
          <button className="decrement" onClick={() => dec()}>
            -
          </button>
          <input type="text" />
          <button className="increment" onClick={() => inc()}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Touristnumber;
