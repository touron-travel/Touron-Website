import React, { useState } from "react";
import "./MyRequest.css";
import { GiConqueror, GiRocketFlight } from "react-icons/gi";
import { FaTrain } from "react-icons/fa";
import { RiFlightTakeoffFill } from "react-icons/ri";

import {
  Button,
  Table,
  Modal,
  Pagination,
  PaginationLink,
  PaginationItem,
} from "reactstrap";
import Profilenav from "./Profilenav";
import Profilepage from "./Profilepage";
const MyRequest = () => {
  const [domesticModal, setDomesticModal] = useState(false);
  const [internationalModal, setInternationalModal] = useState(false);

  const openDomesticModal = () => {
    setDomesticModal(true);
  };
  const closeDomesticModal = () => {
    setDomesticModal(false);
  };

  function openInternationalModal() {
    setInternationalModal(true);
  }
  function closeInternationalModal() {
    setInternationalModal(false);
  }

  const colors = [
    {
      name: "Query Received",
      color: "#f39c12",
    },
    {
      name: "Plan Shared",
      color: "#7f8c8d",
    },
    {
      name: "On Progress",
      color: "#8e44ad",
    },
    {
      name: "Cancelled",
      color: "red",
    },
    {
      name: "On Hold",
      color: "#3498db",
    },
    {
      name: "Duplicate Query",
      color: "#fbc531",
    },
    {
      name: "Tour Booked",
      color: "#2d3436",
    },
    {
      name: "Awaiting Payment",
      color: "#00cec9",
    },
    {
      name: "Cancellation Requested",
      color: "#d63031",
    },
    {
      name: "Estimated",
      color: "#2d3436",
    },
    {
      name: "Completed",
      color: "#55efc4",
    },
  ];

  let pageSize = 7;
  let pagesCount = Math.ceil(colors.length / pageSize);

  const handleClick = (e, index) => {
    e.preventDefault();

    setCurrentpage(index);
  };

  const [currentPage, setCurrentpage] = useState(0);

  return (
    <div style={{ display: "flex" }}>
      <Profilepage />
      <div className="request-container">
        <div className="requests-info">
          <Profilenav title={"My Request"} />
          <div className="requests-body-container ">
            <div className="card-body">
              <div className="card-title">
                <h5>Submitted Request</h5>
                <h1>04</h1>
              </div>
              <div className="card-logo logo1">
                <GiConqueror size={28} color="white" />
              </div>
            </div>
            <div className="card-body">
              <div className="card-title">
                <h5>Submitted Request</h5>
                <h1>04</h1>
              </div>
              <div className="card-logo logo2">
                <GiRocketFlight size={28} color="white" />
              </div>
            </div>

            <div className="card-body" onClick={openDomesticModal}>
              <div className="card-title">
                <h5>Places to visit in India</h5>
                <h1>26</h1>
              </div>
              <div className="card-logo logo3">
                <FaTrain size={28} color="white" />
              </div>
            </div>

            <div className="card-body" onClick={openInternationalModal}>
              <div className="card-title">
                <h5>Places to visit in Abroad</h5>
                <h1>30</h1>
              </div>
              <div className="card-logo logo4">
                <RiFlightTakeoffFill size={28} color="white" />
              </div>
            </div>
          </div>
        </div>

        <div className="requests-table">
          <Table hover bordered>
            <thead>
              <tr>
                <th scope="col">Request Status</th>
                <th scope="col">Request Id</th>
                <th scope="col">Tour Category</th>
                <th scope="col">Destination</th>
                <th scope="col">Departure Date</th>
                <th scope="col">Departure in Days</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {colors
                .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
                .map((c, i) => (
                  <tr key={i}>
                    <td style={{ color: `${c.color}` }}>{c.name}</td>
                    <td>#T0-121220-676767</td>
                    <td>Planned Tour</td>
                    <td>Maldives</td>
                    <td>Jan 26 2021</td>
                    <td>-56 Days</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
        <div>
          <Pagination
            className="pagination justify-content-end"
            listClassName="justify-content-end"
          >
            <PaginationItem disabled={currentPage <= 0}>
              <PaginationLink
                onClick={(e) => handleClick(e, currentPage - 1)}
                previous
                href="#"
              />
            </PaginationItem>
            {[...Array(pagesCount)].map((page, i) => (
              <PaginationItem active={i === currentPage} key={i}>
                <PaginationLink onClick={(e) => handleClick(e, i)} href="#">
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem disabled={currentPage >= pagesCount - 1}>
              <PaginationLink
                onClick={(e) => handleClick(e, currentPage + 1)}
                next
                href="#"
              />
            </PaginationItem>
          </Pagination>
        </div>

        <Modal
          className="modal-dialog-centered modal-danger"
          contentClassName="bg-gradient-danger"
          isOpen={domesticModal}
        >
          <div className="modal-header">
            <h6 className="modal-title" id="modal-title-notification">
              Domestic
            </h6>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={closeDomesticModal}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="py-3 text-center">
              <i className="ni ni-bell-55 ni-3x" />
              <h4 className="heading mt-4">You should read this!</h4>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
          <div className="modal-footer">
            <Button className="btn-white" color="default" type="button">
              Ok, Got it
            </Button>
            <Button
              className="text-white ml-auto"
              color="link"
              data-dismiss="modal"
              type="button"
              onClick={closeDomesticModal}
            >
              Close
            </Button>
          </div>
        </Modal>
        <Modal
          className="modal-dialog-centered modal-danger"
          contentClassName="bg-gradient-danger"
          isOpen={internationalModal}
        >
          <div className="modal-header">
            <h6 className="modal-title" id="modal-title-notification">
              International
            </h6>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={closeInternationalModal}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="py-3 text-center">
              <i className="ni ni-bell-55 ni-3x" />
              <h4 className="heading mt-4">You should read this!</h4>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
          <div className="modal-footer">
            <Button className="btn-white" color="default" type="button">
              Ok, Got it
            </Button>
            <Button
              className="text-white ml-auto"
              color="link"
              data-dismiss="modal"
              type="button"
              onClick={closeInternationalModal}
            >
              Close
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default MyRequest;
