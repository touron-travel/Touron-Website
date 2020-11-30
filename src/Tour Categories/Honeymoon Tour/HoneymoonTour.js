import React, { useState } from "react";
import TourHeader from "../Reusable components/TourHeader";
import Honeymoon from "../../assests/Honeymoon.jpg";

const HoneymoonTour = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => {
    if (step !== 1) setStep(step - 1);
  };
  const renderForm = (step) => {
    switch (step) {
      case 1:
        return <h1>1</h1>;
      case 2:
        return <h1>2</h1>;
      case 3:
        return <h1>3</h1>;
      case 4:
        return <h1>4</h1>;
      case 5:
        return <h1>5</h1>;
      case 6:
        return <h1>6</h1>;
    }
  };

  const desc = `We surprise you with the best suitable location within your budget and according to your travel preferences. We don’t have concrete itineraries as we believe that you should decide where you want to invest your money. We also recommend various things to do which you can book yourself or we can book upon your confirmation.`;

  return (
    <div className="Honeymoon_tour-container">
      <TourHeader
        image={Honeymoon}
        title={"Honeymoon Tour"}
        description={desc}
        className={"Planned-form-container"}
      />
      <div className="Planned-form-container">
        <div
          className={
            step == 1 ? "planned_tour-form-selected" : "planned_tour-form"
          }
        >
          <h1>Honeymoon Tour</h1>
          <div className="planned_form">{renderForm(step)}</div>
          <div className="navigation_btn">
            <div className="previous-button" onClick={() => prevStep()}>
              Previous
            </div>
            <div className="next-button" onClick={() => nextStep()}>
              Next
            </div>
          </div>
        </div>
        <div
          className={
            step == 1 ? "planned_tour-details-selected" : "planned_tour-details"
          }
        >
          bbxb
        </div>
      </div>
    </div>
  );
};

export default HoneymoonTour;
