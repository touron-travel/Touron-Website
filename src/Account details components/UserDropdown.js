import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserMenuItems } from "./UserMenuItems";
import "./UserDropdown.css";

const UserDropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        onClick={handleClick}
        className={
          click ? "user-dropdowns-menu clicked" : "user-dropdowns-menu"
        }
      >
        {UserMenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.path}
                className={item.className}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UserDropdown;
