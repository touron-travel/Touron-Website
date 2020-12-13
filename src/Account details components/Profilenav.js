import React, { useState } from "react";
import { Popover, PopoverBody } from "reactstrap";
import "./UserDetails.css";

import { UserMenuItems } from "./UserMenuItems";
import { Link } from "react-router-dom";
const Profilenav = ({ title }) => {
  const [userDropdown, setUserDropdown] = useState(false);
  const toggle = () => setUserDropdown(!userDropdown);

  return (
    <div className="account-head">
      <div className="account-title">
        <h4>{title}</h4>
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
          <ul className={"user-dropdowns-menu"}>
            {UserMenuItems.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item.path}
                  target="_blank"
                  className={item.className}
                  onClick={() => setUserDropdown(false)}
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
