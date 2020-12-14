import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ProfileSidebarData } from "./ProfileSidebarData";
import "./Profilepage.css";
import Logo from "../assests/logo2.png";
import { setAdminRoute } from "../Admin components/utilities/AdminroutesCheck";
import { ApiContext } from "../../src/Context/ApiContext";
const Profilepage = () => {
  const location = useLocation();
  const { setAdminRoutes } = useContext(ApiContext);

  useEffect(() => {
    let value = setAdminRoute(location.pathname);
    setAdminRoutes(value);
    setClicked(location.pathname);
  }, []);

  const [clicked, setClicked] = useState("");
  return (
    <div className={"sidebar-menu"}>
      <div className="sidebar-image">
        <img src={Logo} alt="" />
      </div>
      <ul className="sidebar-menu-items">
        {ProfileSidebarData.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => setClicked(item.path)}
              className={
                item.path == clicked
                  ? `${item.className} clicked `
                  : `${item.className}`
              }
            >
              <Link to={item.path}>
                {item.icon}
                <span className="sidebar-title">{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Profilepage;
