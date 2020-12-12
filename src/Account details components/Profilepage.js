import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { IconContext } from "react-icons";
import { ProfileSidebarData } from "./ProfileSidebarData";
import "../Admin components/Sidebar.css";
import { setAdminRoute } from "../Admin components/utilities/AdminroutesCheck";
import { ApiContext } from "../Context/ApiContext";
import UserDetails from "./UserDetails";
import MyRequest from "./MyRequest";
import SavedTours from "./SavedTours";
import MyPlans from "./MyPlans";
import MyVisaRequests from "./MyVisaRequests";
import Support from "./Support";
import Faq from "./Faq";

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

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div>
          <IconContext.Provider value={{ color: "gray" }}>
            <div className={"sidebar-menu"}>
              <ul className="sidebar-menu-items">
                {ProfileSidebarData.map((item, index) => {
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
        </div>

        <div>
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
