import React from "react";
import "./Checkout.css";
import "./Destination.css";

const Checkout = ({
  imgSrc,
  setName,
  setBudget,
  setNumber,
  submitData,
  name,
  number,
  budget,
}) => {
  return (
    <div className="destination-container">
      <img className="checkout-image" src={imgSrc} alt="" />
      <div className="destination-questions">
        <div className="que1">
          <h6>Enter your Name</h6>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="que2">
          <h6>Your Budget</h6>

          <input
            type="number"
            onChange={(e) => setBudget(e.target.value)}
            value={budget}
          />
        </div>
        <div className="que3">
          <h6>Whatsapp Number</h6>
          <input
            type="number"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
