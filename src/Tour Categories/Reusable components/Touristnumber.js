import React from "react";
import "./Touristnumber.css";

const Touristnumber = ({ adult, setAdult, children, setChildren }) => {
  return (
    <div className="tourist-container">
      <div className="adult">
        <div className="tourist-category">
          <label>Adult</label>
        </div>
        <div className="tourist-func">
          <button className="decrement" onClick={() => setAdult(adult - 1)}>
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
        <div className="tourist-func">
          <button
            className="decrement"
            onClick={() => setChildren(children - 1)}
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
