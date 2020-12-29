import React, { useState, useEffect, useContext,useRef } from "react";
import "./MyRequest.css";
import { GiConqueror, GiRocketFlight } from "react-icons/gi";
import { FaTrain } from "react-icons/fa";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { HiInformationCircle } from "react-icons/hi";
import { MdDeleteForever } from "react-icons/md";
import { TiGroup, TiTicket } from "react-icons/ti";
import { Ellipsis } from "react-spinners-css";
import moment from 'moment';
import {
  Button,
  Table,
  Modal,
  Popover,
  Pagination,
  Input,
  PaginationLink,
  PaginationItem,
} from "reactstrap";
import Profilenav from "./Profilenav";
import Profilepage from "./Profilepage";
import { firedb } from "../firebase";
import { isAdmin, isAuthenticated } from "../Login components/auth";
import { ApiContext } from "../Context/ApiContext";
import { useToasts } from "react-toast-notifications";
import * as BiIcons from "react-icons/bi";

const MyRequest = () => {
  const { addToast } = useToasts();

  const [domesticModal, setDomesticModal] = useState(false);
  const [internationalModal, setInternationalModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [userRequest, setUserRequest] = useState([]);
  const [totalUserRequest, setTotalUserRequest] = useState([]);
  const [userRequestDates, setUserRequestDates] = useState([]);
  const [userRequestCount, setUserRequestCount] = useState(0);
  const [selectedRequest, setSelectedRequest] = useState({});
  const [status, setStatus] = useState("");
  const [key, setKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [querystatus, setQueryStatus] = useState("");
  const [category, setCategory] = useState("");
  const [requestId, setRequestId] = useState("");
  const toggleSidebar = () => {
    setClicked(!clicked);
  };

console.log('requestId', requestId)
  console.log('key', key)
  // console.log('user', user)


const [weekPopover, setWeekPopover] = useState(false);
const [monthPopover, setMonthPopover] = useState(false);
const [totalPopover, setTotalPopover] = useState(false);

const toggleWeekPopover = () => setWeekPopover(!weekPopover);
const toggleMonthPopover = () => setMonthPopover(!monthPopover);
const toggleTotalPopover = () => setTotalPopover(!totalPopover);


  const getDepatureDate = (date) => {
    const countDate = Date.parse(date);
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    return d;
  };



  let weekReq = []

 const weekRequest = ()=>{
  let count = 0
  userRequestDates.forEach(d=>{
  const ds = moment()
 const date = moment().subtract(7, 'days')

    if(moment(d.requestDate).isBetween(date,ds)){
      count = count + 1
      weekReq.push(d)
    }
  })
  return count
 }

 let monthReq = []
 const monthRequest = ()=>{

   let count = 0
  userRequestDates.forEach(d=>{
    const ds = moment()
    const month = moment().subtract(31, 'days')
    if(moment(d.requestDate).isBetween(month,ds)){
      count = count + 1
      monthReq.push(d)
    }
  })
  return count
 }


  const { userInfo } = useContext(ApiContext);
  const openDomesticModal = () => {
    setDomesticModal(true);
  };
  const closeDomesticModal = () => {
    setDomesticModal(false);
  };
  const openDetailsModal = () => {
    setDetailsModal(true);
  };
  const closeDetailsModal = () => {
    setDetailsModal(false);
  };

  function openInternationalModal() {
    setInternationalModal(true);
  }
  function closeInternationalModal() {
    setInternationalModal(false);
  }

  useEffect(() => {
    getUserRequest();
    if (!userInfo.admin) getAllRequest();
  }, []);

  useEffect(()=>{
    console.log('isAdmin(', isAdmin())
  },[])

  
  const getUserRequest = () => {
    setLoading(true);
    const { user } = isAuthenticated();

    firedb.ref("requests").on("value", (data) => {
      if (data) {
        let req = [];
        data.forEach((d) => {
          if (d.val().userID == user.uid) {
            // console.log("d.va;(", d.val());
            req.push(d.val());
          }
        });
        setUserRequest(req.reverse());
        setLoading(false);
      }
    });
  };

  const getUserRequestCount = (uid) => {

    firedb.ref("requests").on("value", (data) => {
      if (data !== null) {
        let req = [];
        data.forEach((d) => {
          if (d.val().userID == uid) {
            req.push(d.val());
          }
        });
        setUserRequestDates(req)
        setUserRequestCount(req.length);
      }
    });
  };
  const getAllRequest = () => {
    setLoading(true);
    firedb.ref("requests").on("value", (data) => {
    
      if (data !== null) {
        let newReq = {}
        if(data !== null && data !== undefined){
          let revReq = Object.keys(data.val()).reverse()
          revReq.forEach(i=>{
            newReq[i] = data.val()[i]
          })
          setUserRequest({
            ...newReq
          });
        }
      
      }
      setLoading(false);
    });
  };

  const updateRequest = () => {
    console.log('key', key)
    firedb
      .ref(`requests/${key}`)
      .update({
        status: status,
      })
      .then(() => {
        setKey("");
        setStatus("");
        console.log("success :>> ");
        closeDetailsModal();
        addToast("Request Status Updated Successfully", {
          appearance: "success",
        });
      })
      .catch((err) => console.log("err :>> ", err));
  };
  const deleteRequest = () => {
    firedb
      .ref(`requests/${key}`)
      .set(null)
      .then(() => {
        setKey("");
        setStatus("");
        console.log("success :>> ");
        closeDetailsModal();
        addToast("Duplicated Query Deleted Successfully", {
          appearance: "error",
        });
      })
      .catch((err) => console.log("err :>> ", err));
  };

 
  const colors = [
    {
      name: "All",
      color: "#f39c12",
    },
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

  
  const getColor = (status) => {
    let color = "";
    colors.filter((c) => {
      if (c.name === status) color = c.color;
    });
    return color;
  };

  const filterRequests = () => {
    if (querystatus !== "") {
      let rs = {};
      const tour = Object.keys(userRequest).map((r) => {
        console.log('r', r)
        if (userRequest[r].status === querystatus) {
          rs[r] = userRequest[r];
        }
      });
      console.log('rs', rs)
      return rs;
    } else if (category !== "") {
      let rs = {};
      const tour = Object.keys(userRequest).map((r) => {
        console.log('r', r)

        if (userRequest[r].tourCategory === category) {
          rs[r] = userRequest[r];
        }
      });
      console.log('rs', rs)
      return rs;
    }else if (requestId !== "") {
      let rs ={}
      const tour = Object.keys(userRequest).map((r) => {
        console.log('r', r)

        if (userRequest[r].requestID === requestId) {
          rs[r] = userRequest[r];
        }
      });

      console.log('rs', rs)
      return rs;
    } 
    else {
      return userRequest;
    }
  };

  let pageSize = 7;
  let pagesCount = Math.ceil(Object.keys(userRequest).length / pageSize);

  const handleClick = (e, index) => {
    e.preventDefault();
    setCurrentpage(index);
  };

  const [currentPage, setCurrentpage] = useState(0);

  return (
    <div style={{ display: "flex" }}>
      <div className={clicked ? "toggleSidebar" : "toggleSideba"}>
        <Profilepage />
      </div>
      <div className="request-container">
        <BiIcons.BiMenuAltRight
          onClick={toggleSidebar}
          size={50}
          color="white"
          style={{
            zIndex: 20,
            position: "absolute",
            paddingLeft: 20,
            marginRight: 20,
            top: 18,
            cursor: "pointer",
          }}
        />
        <div className="requests-info">
          <Profilenav title={"My Request"} />
          <div className="requests-body-container ">
            <div className="card-body">
              <div className="card-title">
                <h5>Submitted Request</h5>
                <h1>{Object.keys(userRequest).length}</h1>
              </div>
              <div className="card-logo logo1">
                <GiConqueror size={28} color="white" />
              </div>
            </div>
            <div className="card-body">
              <div className="card-title">
                <h5>Completed Request</h5>
                <h1>0</h1>
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

          <div className='filter-section'>
            <div className='reqid'>

          <label>Request Id </label>
          <Input type='text'  
                      className="user-input-alter user-input"
                      onChange={(e)=>setRequestId(e.target.value)}
                      value={requestId}
          
          />
            </div>
         
            <div>

          <label>Tour Category </label>
          <Input
                      type="select"
                      onChange={(e) => setCategory(e.target.value)}
                      value={category}
                    >
                    <option value=''>All</option>
                    <option value='Planned Tour'>Planned Tour</option>
                    <option value='Surprise Tour'>Surprise Tour</option>
                    <option value='Honeymoon Tour'>Honeymoon Tour</option>
                    <option value='Luxury Tour'>Luxury Tour</option>
                    <option value='Road Trip'>Road Trip</option>
                    </Input>
            </div>
         
            <div>

          <label>Query Status</label>
          <Input
                      type="select"
                      onChange={(e) =>{
                        setQueryStatus(e.target.value)
                        setTimeout(()=>{
// filterRequests()
                        },1500)
                        filterRequests()
                      } }
                      value={querystatus}
                    >
                      {colors.map((c, index) => {
                        return (
                          <option key={index} value={c.name == 'All' ? '' : c.name}>
                            {c.name}
                          </option>
                        );
                      })}
                    </Input>
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
              {loading ? (
                <div className="req-loading">
                  Fetching Data <Ellipsis color="#fff" />
                </div>
              ) : (
                <>
                  {userRequest.length !== 0 ? (
                    <>
                      {Object.keys(filterRequests())
                        .slice(
                          currentPage * pageSize,
                          (currentPage + 1) * pageSize
                        )
                        .map((c, i) => (
                          <tr
                            key={i}
                            onClick={() => {
                              console.log('c', i)
                              setKey(c);
                              setSelectedRequest(userRequest[c]);
                              openDetailsModal();
                              getUserRequestCount(userRequest[c].userID)
                              // weekRequest(userRequest[c].requestDate)
                            }}
                          >
                            <td style={{ color:`${getColor(userRequest[c].status)}`}}>{userRequest[c].status}</td>
                            <td>{userRequest[c].requestID}</td>
                            <td>{userRequest[c].tourCategory}</td>
                            <td>
                              {userRequest[c].tourCategory == "Surprise Tour"
                                ? "--"
                                : userRequest[c].destination}
                            </td>
                            <td>{userRequest[c].fromDate}</td>
                            <td>
                              {getDepatureDate(userRequest[c].fromDate)} days
                              {userRequest[c].status == "Duplicate Query" ? (
                                <MdDeleteForever className="duplicateDelete" />
                              ) : null}
                            </td>
                          </tr>
                        ))}
                    </>
                  ) : (
                    <div className="noFind">No Request found</div>
                  )}
                </>
              )}
            </tbody>
          </Table>
        </div>

        {Object.keys(userRequest).length <= 7 ? null : (
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
        )}

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
        <Modal contentClassName="modal-request" isOpen={detailsModal}>
          <div className="modal-header">
            <h3 className="modal-title" id="modal-title-notification">
              Request Info
            </h3>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={closeDetailsModal}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-visadetails">
            <div className="modal-req">
              <div className="iternary">
                <Table bordered>
                  <thead>
                    <tr>
                      <th className="title-iternary">
                        <TiTicket className="title-iternary-icon" />
                        Iternary
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Request ID</td>
                      <td>{selectedRequest.requestID}</td>
                    </tr>
                    <tr>
                      <td>Tour Category</td>
                      <td>{selectedRequest.tourCategory}</td>
                    </tr>
                    <tr>
                      <td>Destination Type</td>
                      <td>{selectedRequest.tourType}</td>
                    </tr>
                    <tr>
                      <td>Travel Mode</td>
                      <td>{selectedRequest.travelMode}</td>
                    </tr>
                    <tr>
                      <td>Tour Preferance</td>
                      <td>{selectedRequest.tourPreference}</td>
                    </tr>
                    <tr>
                      <td>From Date</td>
                      <td>{selectedRequest.fromDate}</td>
                    </tr>
                    <tr>
                      <td>To Date</td>
                      <td>{selectedRequest.toDate}</td>
                    </tr>
                    <tr>
                      <td>Destination</td>
                      <td>{selectedRequest.destination}</td>
                    </tr>
                    <tr>
                      <td>Boarding Point</td>
                      <td>{selectedRequest.startPoint}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="companions">
                <Table bordered>
                  <thead>
                    <tr>
                      <th className="title-companions">
                        <TiGroup className="title-companions-icon" />
                        Companions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tour Companions</td>
                      <td>{selectedRequest.travellerType}</td>
                    </tr>
                    <tr>
                      <td>Adult(s)</td>
                      <td>{selectedRequest.adult}</td>
                    </tr>
                    <tr>
                      <td>Children(s)</td>
                      <td>{selectedRequest.children}</td>
                    </tr>
                  </tbody>
                </Table>
                <Table bordered>
                  <thead>
                    <tr>
                      <th className="title-companions">
                        <TiGroup className="title-companions-icon" />
                        User History
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>{selectedRequest.name}</td>
                    </tr>
                    <tr>
                      <td>Total Request</td>
                      <td  id='totalPopover'  style={{cursor:'pointer'}}>{userRequestCount}</td>
                    </tr>
                    <Popover placement="right" isOpen={totalPopover} target="totalPopover" toggle={toggleTotalPopover}  >
                    {userRequestDates.map((t,index)=>{
                      return (

                      <h6 style={{padding:8,margin:0,cursor:'pointer',backgroundColor: selectedRequest.requestID == t.requestID ? '#53E0BC' : ''}} onClick={()=>{
                        closeDetailsModal()
                        setSelectedRequest(t)
                        openDetailsModal()
                      }}>{index + 1}.{t.requestID} - {t.requestDate}</h6>
                    )})}

      </Popover>
                  
                    <tr >
                      <td>Last Week Request</td>
                      <td id='weekPopover' style={{cursor:'pointer'}}>{weekRequest()}</td>
                    </tr>
                    <Popover placement="right" isOpen={weekPopover} target="weekPopover" toggle={toggleWeekPopover} >
                    {weekReq.map((w,index)=>{
                      return (
                      <h6 style={{padding:8,margin:0,cursor:'pointer',backgroundColor: selectedRequest.requestID == w.requestID ? '#53E0BC' : ''}} onClick={()=>{
                        closeDetailsModal()
                        setSelectedRequest(w)
                        openDetailsModal()
                      }}>{index + 1}.{w.requestID} - {w.requestDate}</h6>
                    )})}
                         </Popover>
                    <tr>
                      <td>Last Month Request</td>
                    
                      <td  id='monthPopover' style={{cursor:'pointer'}}>{monthRequest()}</td>
                    </tr>
                    <Popover placement="right" isOpen={monthPopover} target="monthPopover" toggle={toggleMonthPopover} >
                    {monthReq.map((m,index)=>{
                      return (

                      <h6 style={{padding:8,margin:0, cursor:'pointer',backgroundColor: selectedRequest.requestID == m.requestID ? '#53E0BC' : ''}} onClick={()=>{
                        closeDetailsModal()
                        setSelectedRequest(m)
                        openDetailsModal()
                      }}>{index + 1}.{m.requestID} - {m.requestDate.toString()}</h6>
                    )})}

      </Popover>
                  
                  
                  </tbody>
                </Table>
              </div>
              <div className="Information">
                <Table bordered>
                  <thead>
                    <tr>
                      <th className="title-Information">
                        <HiInformationCircle className="title-Information-icon" />
                        Other Information
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Your Preferaneces</td>
                      <td>{selectedRequest.preferanece}</td>
                    </tr>
                    <tr>
                      <td>Name</td>
                      <td>{selectedRequest.name}</td>
                    </tr>
                    <tr>
                      <td>Budget</td>
                      <td>{selectedRequest.budget}</td>
                    </tr>
                    <tr>
                      <td>Whatsapp Number</td>
                      <td>{selectedRequest.number}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>

            {userInfo.admin ? (
              <>
                <div className="status-flex">
                  <div className="status">
                    <h1>Status:</h1>
                    <Input
                      type="select"
                      onChange={(e) => setStatus(e.target.value)}
                      value={selectedRequest.status}
                    >
                      {colors.map((c, index) => {
                        return (
                          <option key={index} value={c.name}>
                            {c.name}
                          </option>
                        );
                      })}
                    </Input>
                  </div>
                  <div className="update-button">
                    <button className="btn btn-success" onClick={updateRequest}>
                      Update
                    </button>
                  </div>
                  <div className="del-button">
                    {selectedRequest.status == "Duplicate Query" ? (
                      <button
                        className="btn btn-danger"
                        onClick={deleteRequest}
                      >
                        Delete
                      </button>
                    ) : null}
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* <div className="user-status">
                  <h1>Status: {selectedRequest.status}</h1>
                </div> */}
              </>
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default MyRequest;
