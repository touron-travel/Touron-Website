import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { IconContext } from "react-icons";
import { ProfileSidebarData } from "./ProfileSidebarData";
import "./Profilepage.css";
import { setAdminRoute } from "../Admin components/utilities/AdminroutesCheck";
import { ApiContext } from "../Context/ApiContext";
import UserDetails from "./UserDetails";
import MyRequest from "./MyRequest";
import SavedTours from "./SavedTours";
import MyPlans from "./MyPlans";
import MyVisaRequests from "./MyVisaRequests";
import Support from "./Support";
import Faq from "./Faq";
import Logo from "../assests/logo2.png";

const routes = [
  {
    path: "/user-details",
    exact: true,
    // sidebar: () => <Sidebar />,
    main: () => <UserDetails />,
  },
  {
    path: "/my-requests",
    // sidebar: () => <Sidebar />,
    main: () => <MyRequest />,
  },
  {
    path: "/saved-tours",
    // sidebar: () => <Sidebar />,
    main: () => <SavedTours />,
  },
  {
    path: "/my-plans",
    // sidebar: () => <Sidebar />,
    main: () => <MyPlans />,
  },
  {
    path: "/myvisa-requests",
    // sidebar: () => <Sidebar />,
    main: () => <MyVisaRequests />,
  },
  {
    path: "/faq",
    // sidebar: () => <Sidebar />,
    main: () => <Faq />,
  },
  {
    path: "/support",
    // sidebar: () => <Sidebar />,
    main: () => <Support />,
  },
];

const Profilepage = () => {
  const location = useLocation();
  const { setAdminRoutes } = useContext(ApiContext);

  useEffect(() => {
    let value = setAdminRoute(location.pathname);
    console.log("value :>> ", value);
    setAdminRoutes(value);
  }, []);

  const [clicked, setClicked] = useState("");
  return (
    <Router>
      <div
        style={{ display: "flex", maxHeight: "100vh", paddingBottom: "30px" }}
      >
        <div className={"sidebar-menu"}>
          <div className="sidebar-image">
            <img src={Logo} alt="" />
          </div>
          <ul className="sidebar-menu-items">
            {ProfileSidebarData.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setClicked(item.title)}
                  className={
                    item.title == clicked
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



        <div style={{ width: "100%", overflow: "scroll" }}>
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              );
            })}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Profilepage;
