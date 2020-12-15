import React, { useState, useEffect } from "react";
import { Popover, PopoverBody } from "reactstrap";
import "./UserDropdown.css";

import { UserMenuItems } from "./UserMenuItems";
import { Link, Redirect } from "react-router-dom";
import { isAuthenticated, signout } from "../Login components/auth";
const Profilenav = (props) => {
  const [userDropdown, setUserDropdown] = useState(false);
  const toggle = () => setUserDropdown(!userDropdown);

  const { user } = isAuthenticated();

  return (
    <div className="account-head">
      <div className="account-title">
        <h4>{props.title}</h4>
      </div>
      <div className="account-profile" id="Popover1">
        <img
          // src={user.photoUrl}
          src="https://demos.creative-tim.com/argon-dashboard-react/static/media/team-4-800x800.23007132.jpg"
          alt=""
        />
        <h6 onClick={() => setUserDropdown(!userDropdown)}>
          {user.displayName}
        </h6>
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
                  // target="_blank"
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
