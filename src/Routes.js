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
import Profilepage from "./Account details components/Profilepage";
import PrivateRoute from "./Login components/Privateroutes";
import AdminRoute from "./Login components/AdminRoute";
import AdminLogin from "./Admin components/AdminLogin";
import Adminpage from "./Admin components/Adminpage";

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

  console.log("adminRoutes :>> ", adminRoutes);

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
            <Route path="/popular_tour" component={Popular_tour} />
            <Route path="/popular_countries" component={Popular_countries} />
            <Route path="/profilepage" component={Profilepage} />
            <Route path="/user-details" component={Profilepage} />
            <Route path="/my-requests" component={Profilepage} />
            <Route path="/myvisa-requests" component={Profilepage} />
            <Route path="/my-plans" component={Profilepage} />
            <Route path="/saved-tours" component={Profilepage} />
            <Route path="/faq" component={Profilepage} />
            <Route path="/support" component={Profilepage} />
            <Route
              path="/countrydetails/:countryname/:countryid"
              component={CountryInner}
            />
            <Route
              path="/tourdetails/:countryname/:tourname/:tourid"
              component={TourInner}
            />
            <Route path="/admindashboard" component={AdminLogin} />

            <Route path="/adminpage" component={Adminpage} />
            <Route path="/admin" component={Adminpage} />
            <Route path="/management" component={Adminpage} />
            <Route path="/packages" component={Adminpage} />
            <Route path="/pages" component={Adminpage} />
            <Route path="/categories" component={Adminpage} />
            <Route path="/advertisement" component={Adminpage} />
            <Route path="/trendingplaces" component={Adminpage} />
            <Route path="/coupons" component={Adminpage} />
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
