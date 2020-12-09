import { AiFillCloseCircle } from "react-icons/ai";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import React from "react";

const Modals = ({ modalIsOpen, closeModal }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      // marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "20px",
      boxShadow: "1px 3px 1px #9E9E9E",
    },
    overlay: { zIndex: 1000 },
  };

  Modal.setAppElement("#root");

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      shouldCloseOnOverlayClick={false}
    >
      <div className="modal-close">
        <AiFillCloseCircle size={30} onClick={closeModal} />
      </div>
      <div className="modal-container">
        <img
          className="modal-image"
          src="https://image.freepik.com/free-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg"
          alt=""
        />
        <p>Please login to proceed Further!!</p>
        <Link to="/login">
          <button className="modal-loginbutton">Proceed to Login</button>
        </Link>
      </div>
    </Modal>
  );
};

export default Modals;
