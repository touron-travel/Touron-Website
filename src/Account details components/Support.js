import React, { useState, useContext, useEffect } from "react";
import Profilenav from "./Profilenav";
import "./Support.css";
import logo from "../assests/logo1.png";
import Profilepage from "./Profilepage";
import {
  Table,
  Modal,
  Pagination,
  Form,
  Input,
  Button,
  PaginationLink,
  PaginationItem,
} from "reactstrap";
import { ApiContext } from "../Context/ApiContext";
import { firedb } from "../firebase";
import { useToasts } from "react-toast-notifications";
import * as BiIcons from "react-icons/bi";

const Support = () => {
  const { addToast } = useToasts();
  // const { addToast } = useToasts();
  const [queries, setQueries] = useState([]);
  const { userInfo } = useContext(ApiContext);
  const [values, setValues] = useState({
    name: "",
    email: "",


    mobileNumber: "",
    queryType: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name,value :>> ", name, value);

    setValues({
      ...values,
      [name]: value,
    });
  };

  const submitQueryData = (e) => {
    e.preventDefault();
    firedb
      .ref(`supportQueries`)
      .push(values)
      .then((data) => {
        addToast("Submitted Successfully", {
          appearance: "success",
        });

        setValues({
          name: "",
          email: "",
          mobileNumber: "",
          queryType: "",
          comments: "",
        });
      })
      .catch((err) => console.log("err :>> ", err));
  };

  const getSubmittedQueries = () => {
    firedb.ref("supportQueries").on("value", (data) => {
      if (data) {
        let req = [];
        data.forEach((d) => {
          console.log("d.val() :>> ", d.val());
          req.push(d.val());
        });
        setQueries(req);
      }
    });
  };

  useEffect(() => {
    getSubmittedQueries();
  }, []);

  let pageSize = 7;
  let pagesCount = Math.ceil(queries.length / pageSize);

  const handleClick = (e, index) => {
    e.preventDefault();
    setCurrentpage(index);
  };

  const [clicked, setClicked] = useState(false);
  const toggleSidebar = () => {
    setClicked(!clicked);
  };
  const { name, email, queryType, comments, mobileNumber } = values;
  const [currentPage, setCurrentpage] = useState(0);
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className={clicked ? "toggleSidebar" : "toggleSideba"}>
          <Profilepage />
        </div>
        <div className="support-container">
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
          <div className="support-section">
            <Profilenav title={"Support"} />
          </div>
          <div className="support-section-form">
            <div className="support-section-form2">
              <div className="support-section-from2-head">
                <h3>Contact us</h3>
              </div>
              <div className="support-section-form2-info">
                <Form>
                  <div className="form-group">
                    <label className="user-label">Name</label>
                    <input
                      type="text"
                      value={name}
                      name="name"
                      onChange={handleChange}
                      className="user-input-alter user-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="user-label">Email</label>
                    <input
                      type="text"
                      onChange={handleChange}
                      value={email}
                      name="email"
                      className="user-input-alter user-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="user-label">Mobile no</label>
                    <input
                      type="text"
                      onChange={handleChange}
                      value={mobileNumber}
                      name="mobileNumber"
                      className="user-input-alter user-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="user-label">Choose the type</label>
                    <Input
                      type="select"
                      onChange={handleChange}
                      name="queryType"
                      value={queryType}
                      className="user-input-alter user-input"
                    >
                      <option>Type 1</option>
                      <option>Type 2</option>
                      <option>Type 3</option>
                    </Input>
                  </div>
                  <div className="form-group">
                    <label className="user-label">Comment</label>
                    <Input
                      type="textarea"
                      rows="5"
                      onChange={handleChange}
                      name="comments"
                      value={comments}
                      className="user-input-alter user-input"
                    />
                  </div>
                  <div className="user-button">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={submitQueryData}
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              </div>
            </div>
            <div className="support-section-form1">
              <div className="reach-section">
                <h1>Reach us</h1>
              </div>
              <div className="reach-section-img">
                <img src={logo} alt="" />
              </div>
              <div className="reach-section-contact">
                <h2>Email : touronholidayz@gmail.com</h2>
                <h2>Mobile no : 8667801206</h2>
                <Button color="success" type="button" style={{ marginTop: 20 }}>
                  Chat with us!
                </Button>
              </div>
            </div>
          </div>

          {!userInfo.admin ? (
            <div className="support-queries-container">
              <h1>Submitted Queries</h1>
              <div className="requests-table support">
                <Table hover bordered>
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Mobile Number</th>
                      <th scope="col">Query Type</th>
                      <th scope="col">Comments</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {queries.length !== 0 ? (
                      <>
                        {queries
                          .slice(
                            currentPage * pageSize,
                            (currentPage + 1) * pageSize
                          )
                          .map((q, i) => (
                            <tr key={i}>
                              <td>{q.name}</td>
                              <td>{q.email}</td>
                              <td>{q.mobileNumber}</td>
                              <td>{q.queryType}</td>
                              <td>{q.comments}</td>
                            </tr>
                          ))}
                      </>
                    ) : (
                      <div className="noFindQueries">No Queries found</div>
                    )}
                  </tbody>
                </Table>
              </div>
              {/* <div>
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
                      <PaginationLink
                        onClick={(e) => handleClick(e, i)}
                        href="#"
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
                    />
                  </PaginationItem>
                </Pagination>
              </div> */}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Support;
