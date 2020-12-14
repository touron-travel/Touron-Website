import React, { useState } from "react";
import { Popover, PopoverBody } from "reactstrap";
import "./UserDropdown.css";

import { UserMenuItems } from "./UserMenuItems";
import { Link, Redirect } from "react-router-dom";
import { signout } from "../Login components/auth";
const Profilenav = (props) => {
  console.log("history :>> ", props);
  const [userDropdown, setUserDropdown] = useState(false);
  const toggle = () => setUserDropdown(!userDropdown);

  return (
    <div className="account-head">
      <div className="account-title">
        <h4>{props.title}</h4>
      </div>
      <div className="account-profile" id="Popover1">
        <img
          src="https://demos.creative-tim.com/argon-dashboard-react/static/media/team-4-800x800.23007132.jpg"
          alt=""
        />
        <h6 onClick={() => setUserDropdown(!userDropdown)}>Jessica Jones</h6>
      </div>
      <Popover
        placement="bottom"
        isOpen={userDropdown}
        target="Popover1"
        toggle={toggle}
      >
        <PopoverBody>
          <ul className="user-dropdowns-menu">
            {UserMenuItems.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item.path}
                  className={item.className}
                  onClick={() => {
                    if (item.title == "Logout") {
                      signout(() => {
                        return <Redirect to="/" />;
                      });
                    }
                    setUserDropdown(false);
                  }}
                >
                  <li key={index}>{item.title}</li>
                </Link>
              );
            })}
          </ul>
        </PopoverBody>
      </Popover>
    </div>
  );
};

export default Profilenav;
