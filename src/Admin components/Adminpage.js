import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { IconContext } from "react-icons";
import { AdminSidebarData } from "./AdminSidebarData";
import "../Admin components/Sidebar.css";
import { setAdminRoute } from "../Admin components/utilities/AdminroutesCheck";
import { ApiContext } from "../Context/ApiContext";
import Admin from "./Admin";
import Management from "./Management";
import Packages from "./Packages";
import Pages from "./Pages";
import CategoriesTags from "./Categories-Tags";
import Advertisement from "./Advertisement";
import TrendingPlaces from "./TrendingPlaces";
import Coupons from "./Coupons";

const routes = [
  {
    path: "/admin",
    exact: true,
    // sidebar: () => <Sidebar />,
    main: () => <Admin />,
  },
  {
    path: "/management",
    // sidebar: () => <Sidebar />,
    main: () => <Management />,
  },
  {
    path: "/packages",
    // sidebar: () => <Sidebar />,
    main: () => <Packages />,
  },
  {
    path: "/pages",
    // sidebar: () => <Sidebar />,
    main: () => <Pages />,
  },
  {
    path: "/categories",
    // sidebar: () => <Sidebar />,
    main: () => <CategoriesTags />,
  },
  {
    path: "/advertisement",
    // sidebar: () => <Sidebar />,
    main: () => <Advertisement />,
  },
  {
    path: "/trendingplaces",
    // sidebar: () => <Sidebar />,
    main: () => <TrendingPlaces />,
  },
  {
    path: "/coupons",
    // sidebar: () => <Sidebar />,
    main: () => <Coupons />,
  },
];

const Adminpage = () => {
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
                {AdminSidebarData.map((item, index) => {
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

        <div style={{ padding: "10px" }}>
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

export default Adminpage;
