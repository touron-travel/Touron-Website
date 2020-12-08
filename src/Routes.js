import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About components/About";
import HowItWorks from "./How it works components/How-it-works";
import Contact from "./Contact components/Contact";
import Destination from "./Destination components/Destination";
import Login from "./Login components/Login";
import Signup from "./Login components/Signup";
import Popular_tour from "./Tours page/Popular_tour";
import Popular_countries from "./Country Page/Popular_countries";
import Navbar from "./Home components/Navbar/Navbar";
import Footer from "./Home components/Footer/Footer";
import axios from "axios";
import { API } from "./backend";
import { ApiContext } from "./Context/ApiContext";
import CountryInner from "./Country Page/CountryInner";
import TourInner from "./Tours page/TourInner";
import ScrollToTop from "./ScrollToTop";
import PlannedTour from "./Tour Categories/Planned Tour/PlannedTour";
import HoneymoonTour from "./Tour Categories/Honeymoon Tour/HoneymoonTour";
import LuxuryTour from "./Tour Categories/Luxury Tour/LuxuryTour";
import RoadtripTour from "./Tour Categories/Roadtrip Tour/RoadtripTour";
import SurpriseTour from "./Tour Categories/Surprise Tour/SurpriseTour";
import Visa from "./Visa Page/Visa";
import Admin from "./Admin components/Admin";
import Management from "./Admin components/Admin pages/Management";
import Packages from "./Admin components/Admin pages/Packages";
import Pages from "./Admin components/Admin pages/Pages";
import CategoriesTags from "./Admin components/Admin pages/Categories-Tags";
import Advertisement from "./Admin components/Admin pages/Advertisement";
import TrendingPlaces from "./Admin components/Admin pages/TrendingPlaces";
import Coupons from "./Admin components/Admin pages/Coupons";
import Profilepage from "./Account details components/Profilepage";
import PrivateRoute from "./Login components/Privateroutes";
import AdminRoute from "./Login components/AdminRoute";
import AdminLogin from "./Admin components/AdminLogin";

export default function Routes() {
  const [tours, setTour] = useState([]);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [adminRoutes, setAdminRoutes] = useState(false);

  const getTours = async () => {
    try {
      const tourResponse = await axios.get(`${API}/tour`);
      setTour(tourResponse.data);
    } catch (err) {
      console.log(err, "err");
    }
  };

  const getCountries = async () => {
    try {
      const countryResponse = await axios.get(`${API}/country`);
      setCountries(countryResponse.data);
    } catch (err) {
      console.log(err, "err");
    }
  };
  const getCities = async () => {
    try {
      const cityResponse = await axios.get(`${API}/city`);
      setCities(cityResponse.data);
    } catch (err) {
      console.log(err, "err");
    }
  };

  useEffect(() => {
    getCities();
  }, []);
  useEffect(() => {
    getCountries();
  }, []);
  useEffect(() => {
    getTours();
  }, []);

  return (
    <ApiContext.Provider value={{ tours, countries, cities, setAdminRoutes }}>
      <Router>
        <ScrollToTop>
          {adminRoutes ? null : (
            <div className="nav">
              <Navbar />
            </div>
          )}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/planned-tour" component={PlannedTour} />
            <Route path="/surprise-tour" component={SurpriseTour} />
            <Route path="/roadtrip-tour" component={RoadtripTour} />
            <Route path="/luxury-tour" component={LuxuryTour} />
            <Route path="/honeymoon-tour" component={HoneymoonTour} />
            <Route path="/how-it-works" component={HowItWorks} />
            <Route path="/visa" component={Visa} />
            <Route path="/contact" component={Contact} />
            <Route path="/destination" component={Destination} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/profilepage" component={Profilepage} />
            <Route path="/popular_tour" component={Popular_tour} />
            <Route path="/popular_countries" component={Popular_countries} />
            <Route
              path="/countrydetails/:countryname/:countryid"
              component={CountryInner}
            />
            <Route
              path="/tourdetails/:countryname/:tourname/:tourid"
              component={TourInner}
            />
            <Route path="/admindashboard" component={AdminLogin} />
            <AdminRoute path="/admin" exact component={Admin} />
            <AdminRoute path="/admin/management" component={Management} />
            <AdminRoute path="/admin/packages" component={Packages} />
            <AdminRoute path="/admin/pages" component={Pages} />
            <AdminRoute path="/admin/categories" component={CategoriesTags} />
            <AdminRoute path="/admin/advertisement" component={Advertisement} />
            <AdminRoute
              path="/admin/trendingplaces"
              component={TrendingPlaces}
            />
            <AdminRoute path="/admin/coupons" component={Coupons} />
          </Switch>
          {adminRoutes ? null : (
            <div className="footer">
              <Footer />
            </div>
          )}
        </ScrollToTop>
      </Router>
    </ApiContext.Provider>
  );
}
