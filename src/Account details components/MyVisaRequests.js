import React, { useState, useEffect } from "react";
import "./MyRequest.css";
import { GiConqueror, GiRocketFlight } from "react-icons/gi";
import * as RiIcons from "react-icons/ri";
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
import { firedb } from "../firebase";
import { isAuthenticated } from "../Login components/auth";

const MyVisaRequests = () => {
  const [visaRequest, setVisaRequest] = useState([]);

  useEffect(() => {
    getVisaRequest();
  }, []);
  const getVisaRequest = () => {
    const { user } = isAuthenticated();

    firedb.ref("visaSubmission").on("value", (data) => {
      if (data) {
        let visareq = [];
        data.forEach((d) => {
          if (d.val().userID == user.uid) {
            console.log("d.va;(", d.val());
            visareq.push(d.val());
          }
        });
        setVisaRequest(visareq);
      }
    });
  };

  // const [domesticModal, setDomesticModal] = useState(false);
  // const [internationalModal, setInternationalModal] = useState(false);

  // const openDomesticModal = () => {
  //   setDomesticModal(true);
  // };
  // const closeDomesticModal = () => {
  //   setDomesticModal(false);
  // };

  // function openInternationalModal() {
  //   setInternationalModal(true);
  // }
  // function closeInternationalModal() {
  //   setInternationalModal(false);
  // }

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
        <div className="requests-info-visa">
          <Profilenav title={"My Visa Request"} />
          <div className="requests-body-container ">
            <div className="card-body">
              <div className="card-title">
                <h5>Submitted Requestt</h5>
                <h1>04</h1>
              </div>
              <div className="card-logo logo1">
                <RiIcons.RiVisaFill size={28} color="white" />
              </div>
            </div>
            <div className="card-body">
              <div className="card-title">
                <h5>Completed Request</h5>
                <h1>04</h1>
              </div>
              <div className="card-logo logo2">
                <GiRocketFlight size={28} color="white" />
              </div>
            </div>
          </div>
        </div>

        <div className="requests-table">
          <Table hover bordered>
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Name</th>
                <th scope="col">Phonu Number</th>
                <th scope="col">Destination</th>
                <th scope="col">Employee Type</th>
                <th scope="col">Travel Month</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {visaRequest.length !== 0 ? (
                <>
                  {visaRequest
                    .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
                    .map((c, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{c.name}</td>
                        <td>{c.phoneNumber}</td>
                        <td>{c.countryName}</td>
                        <td>{c.workType}</td>
                        <td>{c.travelMonth}</td>
                      </tr>
                    ))}
                </>
              ) : (
                <div className="noFind">No Visa Request found</div>
              )}
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
              >
                <i className="fa fa-angle-left" />
              </PaginationLink>
            </PaginationItem>
            {[...Array(pagesCount)].map((page, i) => (
              <PaginationItem active={i === currentPage} key={i}>
                <PaginationLink
                  onClick={(e) => handleClick(e, i)}
                  href="#pablo"
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem disabled={currentPage >= pagesCount - 1}>
              <PaginationLink
                onClick={(e) => handleClick(e, currentPage + 1)}
                next
                href="#"
              >
                <i className="fa fa-angle-right" />
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default MyVisaRequests;
