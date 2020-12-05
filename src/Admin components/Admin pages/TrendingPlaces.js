import React, { useContext, useEffect } from "react";

import Sidebar from "../Sidebar";
import { ApiContext } from "../../Context/ApiContext";
import { setAdminRoute } from "../utilities/AdminroutesCheck";
import { useLocation } from "react-router-dom";

const TrendingPlaces = () => {
  const location = useLocation();
  const { setAdminRoutes } = useContext(ApiContext);

  useEffect(() => {
    let value = setAdminRoute(location.pathname);
    console.log("value :>> ", value);
    setAdminRoutes(value);
  }, []);
  return (
    <div className="dashboard-flex">
      <Sidebar />
      <h1>Trending Places</h1>
    </div>
  );
};

export default TrendingPlaces;
