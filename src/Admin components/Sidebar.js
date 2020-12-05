import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import { IconContext } from "react-icons";

const Sidebar = () => {
  // const [sidebar, setSidebar] = useState(false);
  // console.log("sidebar", sidebar);

  // const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "gray" }}>
        {/* <div className="sidebar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div> */}
        <div className={"sidebar-menu"}>
          <ul className="sidebar-menu-items">
            {/* <li className="sidebar-toggle">
                <Link to="#" className="menu-bars">
                  <FaIcons.FaTimes onClick={showSidebar} />
                </Link>
              </li> */}
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="sidebar-title">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
