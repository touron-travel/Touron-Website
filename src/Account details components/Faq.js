import React, { useState, useEffect, useContext } from "react";
import Profilenav from "./Profilenav";
import "./Faq.css";
import FaqQuestion from "./FaqQuestions";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import { FcPlus } from "react-icons/fc";
import { RiCloseCircleFill } from "react-icons/ri";
import Profilepage from "./Profilepage";
import { ApiContext } from "../Context/ApiContext";
import { setAdminRoute } from "../Admin components/utilities/AdminroutesCheck";
import { useLocation } from "react-router-dom";

const Faq = () => {
  const [selectedType, setSelectedType] = useState("general");
  const [isOpen, setIsOpen] = useState();
  const location = useLocation();
  const { setAdminRoutes } = useContext(ApiContext);

  useEffect(() => {
    let value = setAdminRoute(location.pathname);
    setAdminRoutes(value);
  }, []);
  const toggle = (index) => {
    if (isOpen === index) {
      setIsOpen();
    } else {
      setIsOpen(index);
    }
  };
  const FaqQuestions = FaqQuestion();
  return (
    <div style={{ display: "flex" }}>
      <Profilepage />
      <div className="faq-container">
        <Profilenav title="Frequently Asked Question" />

        <div className="faq-types">
          <div
            className="general"
            style={{
              borderBottom:
                selectedType == "general" ? "5px solid #40E0D0" : "",
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
            }}
          >
            <h6>Booking</h6>
          </div>
          <div
            className="support"
            onClick={() => setSelectedType("support")}
            style={{
              borderBottom:
                selectedType == "support" ? "5px solid #40E0D0" : "",
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
    </div>
  );
};

export default Faq;
