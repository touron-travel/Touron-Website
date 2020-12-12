import React, { useState } from "react";
import "./UserDetails.css";
import { UserMenuItems } from "./UserMenuItems";
import { Link } from "react-router-dom";

import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import Profilenav from "./Profilenav";

const UserDetails = () => {
  return (
    <>
      <div className="account">
        <Profilenav title={"User Details"} />
        <div className="account-content">
          <h1>Hello Jesse</h1>
          <p>
            This is your profile page. You can see the progress you've made with
            your work and manage your projects or assigned tasks
          </p>
        </div>
      </div>
      <div className="account-profile-page">
        <div className="account-profile-column1">
          <div className="account-column1-head">
            <h3>My account</h3>
            <button className="btn btn-primary btn-sm">Settings</button>
          </div>
          <div className="account-column-info">
            <Form>
              <h6>User Information</h6>

              <Row>
                <Col md="6">
                  <FormGroup>
                    <Input
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Input disabled placeholder="Regular" type="text" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-zoom-split-in" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Search" type="text" />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <InputGroup className="mb-4">
                      <Input placeholder="Birthday" type="text" />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <i className="ni ni-zoom-split-in" />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup className="has-success">
                    <Input
                      className="is-valid"
                      placeholder="Success"
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup className="has-danger">
                    <Input
                      className="is-invalid"
                      placeholder="Error Input"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
        <div className="account-profile-column2">pag2</div>
      </div>
    </>
  );
};

export default UserDetails;
