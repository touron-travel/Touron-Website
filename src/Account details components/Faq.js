import React, { useState } from "react";
import Profilenav from "./Profilenav";
import "./Faq.css";
import FaqQuestion from "./FaqQuestions";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import { FcPlus } from "react-icons/fc";
import { RiCloseCircleFill } from "react-icons/ri";
const Faq = () => {
  const [selectedType, setSelectedType] = useState("general");
  const [isOpen, setIsOpen] = useState();

  const toggle = (index) => {
    // let event = e.target.dataset.event;
    // setIsOpen(isOpen === Number(event) ? 0 : Number(event));
    setIsOpen(index);
    if (isOpen === index) {
      setIsOpen();
    } else {
      setIsOpen(index);
    }
  };
  const FaqQuestions = FaqQuestion();
  return (
    <div className="faq-container">
      <Profilenav title="Faq" />
      <div className="faq-title">
        <h1>Frequently Asked Question</h1>
      </div>
      <div className="faq-types">
        <div
          className="general"
          style={{
            borderBottom: selectedType == "general" ? "5px solid #40E0D0" : "",
            borderTop: selectedType == "general" ? "5px solid tomato" : "",
          }}
          onClick={() => setSelectedType("general")}
        >
          <h6>General</h6>
        </div>
        <div
          className="booking"
          onClick={() => setSelectedType("booking")}
          style={{
            borderBottom: selectedType == "booking" ? "5px solid tomato" : "",
            borderTop: selectedType == "booking" ? "5px solid #40E0D0" : "",
          }}
        >
          <h6>Booking</h6>
        </div>
        <div
          className="support"
          onClick={() => setSelectedType("support")}
          style={{
            borderBottom: selectedType == "support" ? "5px solid #40E0D0" : "",
            borderTop: selectedType == "support" ? "5px solid tomato" : "",
          }}
        >
          <h6>Support</h6>
        </div>
      </div>

      <div className="questions-container">
        {FaqQuestions.map((q, index) => {
          if (q.type == selectedType)
            return (
              <div className="questions">
                <div className="faq-question">
                  <h1>{q.question}</h1>
                  {isOpen === index ? (
                    <RiCloseCircleFill
                      onClick={() => toggle(index)}
                      size={30}
                      className="que-icon"
                      color="red"
                    />
                  ) : (
                    <FcPlus
                      onClick={() => toggle(index)}
                      size={30}
                      className="que-icon"
                    />
                  )}
                </div>
                <Collapse isOpen={isOpen === index}>
                  <p>{q.answer}</p>
                </Collapse>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default Faq;
